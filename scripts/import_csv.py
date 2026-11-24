# -*- coding: utf-8 -*-
"""Import questions from a CSV spreadsheet into the question bank.

Usage:
    python scripts/import_csv.py [path/to/your.csv]

If no path is given, it reads templates/题目录入表.csv (created on first run
with a BOM so Excel opens the Chinese headers correctly).

The CSV columns (order matters):
    章节, 知识点标签, 题干, 选项A, 选项B, 选项C, 选项D, 选项E, 选项F, 答案, 解析, 回读提示

  - 章节: L01..L11
  - 答案: a single letter (A) for single choice, or several letters (AC) for multi-choice
  - 题干/解析: ```python 代码块、`行内代码`、**加粗** are supported; use Alt+Enter for a new line in Excel

After import it re-runs the merge so data/bank.js is updated. index.html is never touched.
"""
import csv
import os
import re
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.join(HERE, "..")
TPL = os.path.join(ROOT, "templates", "题目录入表.csv")
USER_ADDED = os.path.join(ROOT, "data", "user_added.json")

HEADERS = ["章节", "知识点标签", "题干", "选项A", "选项B", "选项C", "选项D", "选项E", "选项F", "答案", "解析", "回读提示"]

SAMPLE = [
    ["示例", "栈 · LIFO", "What does this code print?\n```python\ns = []\ns.append(\"x\")\nprint(s.pop())\n```",
     "`x`", "`None`", "`s`", "", "", "A", "pop() removes and returns the last item pushed: `x`.", "L10 notes, section 1."],
    ["示例", "队列 · deque", "Which end of a `deque` does `popleft()` remove from?", "the front",
     "the back", "the middle", "both ends", "", "A", "`popleft()` removes from the front (left). `pop()` removes from the back.", "L11 notes, section 3."],
]


def ensure_template():
    os.makedirs(os.path.dirname(TPL), exist_ok=True)
    if os.path.exists(TPL):
        return
    with open(TPL, "w", encoding="utf-8-sig", newline="") as f:
        w = csv.writer(f)
        w.writerow(HEADERS)
        for row in SAMPLE:
            w.writerow(row)
    print("已创建模板:", TPL)


def letter_to_index(letters):
    """'A' -> 0 ; 'AC' -> [0, 2]"""
    letters = letters.strip().upper()
    if len(letters) == 1:
        return ord(letters) - ord("A")
    return [ord(ch) - ord("A") for ch in letters]


def main():
    ensure_template()
    path = sys.argv[1] if len(sys.argv) > 1 else TPL
    if not os.path.exists(path):
        print("找不到文件:", path)
        sys.exit(1)

    rows = []
    with open(path, encoding="utf-8-sig", newline="") as f:
        reader = csv.reader(f)
        data = list(reader)
    # find header row (first row whose first cell looks like a header)
    start = 0
    for i, r in enumerate(data):
        if r and r[0].strip() == "章节":
            start = i + 1
            break

    for i, r in enumerate(data[start:], start + 1):
        if not r or not any(cell.strip() for cell in r):
            continue
        lesson = r[0].strip()
        if not re.match(r"^L\d{2}$", lesson):
            print("第 %d 行跳过：章节需为 L01–L11（示例行请删除或改成真实章节）" % i)
            continue
        topic = r[1].strip() if len(r) > 1 else ""
        prompt = r[2] if len(r) > 2 else ""
        # collect option cells A..F (indexes 3..8), skip empty
        opts = []
        for j in range(3, 9):
            if j < len(r) and r[j].strip():
                opts.append(r[j].strip())
        ans_cell = r[9].strip() if len(r) > 9 else ""
        exp = r[10].strip() if len(r) > 10 else ""
        ref = r[11].strip() if len(r) > 11 else ""

        if not prompt:
            print("第 %d 行跳过：题干为空" % i)
            continue
        if len(opts) < 2:
            print("第 %d 行跳过：选项不足 2 个" % i)
            continue
        if not ans_cell:
            print("第 %d 行跳过：没有答案" % i)
            continue

        answer = letter_to_index(ans_cell)
        if isinstance(answer, list) and any(a >= len(opts) for a in answer):
            print("第 %d 行跳过：答案越界" % i)
            continue
        if not isinstance(answer, list) and answer >= len(opts):
            print("第 %d 行跳过：答案越界" % i)
            continue

        rows.append({
            "id": "u-%03d" % i,
            "lesson": lesson,
            "src": "user",
            "topic": topic,
            "prompt": prompt,
            "options": opts,
            "answer": answer,
            "exp": exp or "（无解析）",
            "ref": ref,
            "code": "",
        })

    # load existing user_added, append
    existing = []
    if os.path.exists(USER_ADDED):
        import json
        with open(USER_ADDED, encoding="utf-8") as f:
            existing = json.load(f)
    existing = existing + rows

    import json
    with open(USER_ADDED, "w", encoding="utf-8") as f:
        json.dump(existing, f, ensure_ascii=False, indent=2)

    print("本次导入 %d 题，累计自定义 %d 题" % (len(rows), len(existing)))
    # re-run merge
    subprocess.run([sys.executable, os.path.join(HERE, "merge.py")])


if __name__ == "__main__":
    main()
