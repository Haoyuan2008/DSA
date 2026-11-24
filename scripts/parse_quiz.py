# -*- coding: utf-8 -*-
"""Parse the three quiz.md files into a unified question bank JSON.

Output: data/questions.json  (an array of question objects)

Each question object:
  id      - stable id like "l05-01"
  lesson  - the lesson the question tests (L01..L11), inferred from the ref
  src     - source quiz ("l05" | "l09" | "l11")
  topic   - "" for now (filled in a later pass)
  prompt  - the question stem (markdown preserved: ```code```, `inline`, **bold**)
  options - list of option strings (A/B/C/D prefix removed)
  answer  - index of the correct option
  exp     - the explanation (markdown preserved)
  ref     - the "Read again" pointer, e.g. "L02 notes, sections 2 and 4"
  code    - "" (reference code, used later for generated questions)
"""
import re
import json
import os

BASE = r"C:\courses\algo1\dsa1"

SOURCES = [
    ("L05", "l05", os.path.join(BASE, "L05", "L05-quiz.md")),
    ("L09", "l09", os.path.join(BASE, "L09", "L09-quiz.md")),
    ("L11", "l11", os.path.join(BASE, "L11", "L11-quiz.md")),
]


def infer_lesson(ref, src):
    """Infer L01..L11 from the 'Read again' pointer."""
    if src == "l11":
        return "L11"
    # l09 quiz points at "L09 notes, section N" where section 3 -> L01 ... 10 -> L08
    if src == "l09":
        m = re.search(r"section\s+(\d+)", ref or "")
        if m:
            sec = int(m.group(1))
            if 3 <= sec <= 10:
                return "L%02d" % (sec - 2)
        return "L00"
    # l05 quiz (and future sources) point straight at "L01 notes" .. "L04 notes"
    m = re.search(r"\bL(\d{2})\b", ref or "")
    if m:
        return "L%02d" % int(m.group(1))
    return "L00"


def clean_blank_lines(s):
    """Collapse 2+ newlines to 2, strip leading/trailing blank lines."""
    s = re.sub(r"\n{3,}", "\n\n", s)
    return s.strip("\n")


def parse_one(block, num, src):
    # Split off the answer <details> block.
    det = re.search(r"<details>.*?</details>", block, re.S)
    detail = det.group(0) if det else ""
    body = block[: det.start()] if det else block

    # ---- options: lines starting with "- **A**" etc.
    opt_re = re.compile(r"^- \*\*([A-Z])\*\*\s*(?:&nbsp;)?\s*(.*)$", re.M)
    opts = []
    opt_spans = []
    for m in opt_re.finditer(body):
        opts.append(m.group(2).strip())
        opt_spans.append((m.start(), m.end()))

    # ---- prompt: everything before the first option
    prompt_start = opt_spans[0][0] if opt_spans else len(body)
    prompt = body[:prompt_start]
    prompt = clean_blank_lines(prompt)
    # remove the "### Question N" heading if present
    prompt = re.sub(r"^###\s+Question\s+\d+\s*", "", prompt)
    prompt = clean_blank_lines(prompt)

    # ---- answer + explanation from the details block
    ans_letter = ""
    exp = ""
    ref = ""
    inner = detail.replace("<details>", "").replace("</details>", "")
    inner = re.sub(r"<summary>.*?</summary>", "", inner, flags=re.S)
    m_ans = re.match(r"\s*\*\*([A-Z])\.\*\*", inner)
    if m_ans:
        ans_letter = m_ans.group(1)
        inner = inner[m_ans.end():]
    # split explanation at "Read again:"
    m_ref = re.search(r"\n\s*Read again:\s*", inner)
    if m_ref:
        exp = inner[: m_ref.start()]
        ref = inner[m_ref.end():].strip()
        ref = re.sub(r"\s+", " ", ref)
    else:
        exp = inner
    exp = clean_blank_lines(exp)
    exp = re.sub(r"^\n+", "", exp)

    answer = "ABCDEFGH".index(ans_letter) if ans_letter else 0

    return {
        "id": "%s-%02d" % (src, num),
        "lesson": infer_lesson(ref, src),
        "src": src,
        "topic": "",
        "prompt": prompt,
        "options": opts,
        "answer": answer,
        "exp": exp,
        "ref": ref,
        "code": "",
    }


def main():
    all_q = []
    for label, src, path in SOURCES:
        with open(path, encoding="utf-8") as f:
            text = f.read()
        parts = re.split(r"\n### Question \d+\n", text)
        # parts[0] is the intro text; drop it
        for i, block in enumerate(parts[1:], 1):
            try:
                q = parse_one(block, i, src)
                all_q.append(q)
            except Exception as e:
                print("ERR %s #%d: %s" % (src, i, e))

    out = os.path.join(os.path.dirname(__file__), "..", "data", "questions.json")
    with open(out, "w", encoding="utf-8") as f:
        json.dump(all_q, f, ensure_ascii=False, indent=2)

    print("Total parsed: %d" % len(all_q))
    from collections import Counter
    print("By lesson:", dict(Counter(q["lesson"] for q in all_q)))
    print("By src:", dict(Counter(q["src"] for q in all_q)))
    # sanity: any empty prompts/options/answers
    bad = [q["id"] for q in all_q if not q["prompt"] or len(q["options"]) < 2 or not q["exp"]]
    print("Empty-ish:", bad)


if __name__ == "__main__":
    main()
