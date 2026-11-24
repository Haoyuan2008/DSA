# -*- coding: utf-8 -*-
"""Merge the parsed quiz questions and the generated supplement into one bank file.

Output: data/bank.js  (loads into window.QUESTION_BANK and window.LESSONS)

This is the file you edit to add questions later. Do NOT touch index.html.
"""
import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(HERE, "..", "data")

with open(os.path.join(DATA, "questions.json"), encoding="utf-8") as f:
    parsed = json.load(f)
with open(os.path.join(DATA, "generated.json"), encoding="utf-8") as f:
    generated = json.load(f)

user_added = []
user_added_path = os.path.join(DATA, "user_added.json")
if os.path.exists(user_added_path):
    with open(user_added_path, encoding="utf-8") as f:
        user_added = json.load(f)

bank = parsed + generated + user_added

# Lesson metadata: order, title, short English name, warm color.
LESSONS = [
    {"id": "L01", "title": "Algorithms & Data Structures", "en": "Algorithms",        "color": "#c97b5a"},
    {"id": "L02", "title": "Complexity & Big-O",            "en": "Big-O",             "color": "#c98a3d"},
    {"id": "L03", "title": "Lists & Memory",                "en": "Lists",             "color": "#b9774a"},
    {"id": "L04", "title": "Strings",                       "en": "Strings",           "color": "#a06b4a"},
    {"id": "L05", "title": "Selection & Bubble Sort",       "en": "Sorting I",         "color": "#d9826a"},
    {"id": "L06", "title": "Insertion Sort & Stability",    "en": "Sorting II",        "color": "#c9765a"},
    {"id": "L07", "title": "Linear & Binary Search",        "en": "Searching",         "color": "#c8823f"},
    {"id": "L08", "title": "Two Pointers",                  "en": "Two pointers",      "color": "#d99a3d"},
    {"id": "L10", "title": "Stacks",                        "en": "Stacks",            "color": "#a4714b"},
    {"id": "L11", "title": "Queues",                        "en": "Queues",            "color": "#c9935a"},
]

lesson_order = {l["id"]: i for i, l in enumerate(LESSONS)}

# Fill blank topics with the lesson title.
for q in bank:
    if not q.get("topic"):
        meta = next((l for l in LESSONS if l["id"] == q["lesson"]), None)
        q["topic"] = meta["title"] if meta else q["lesson"]

# Sort: by lesson order, then by id.
bank.sort(key=lambda q: (lesson_order.get(q["lesson"], 99), q["id"]))

# Build the JS file.
lines = []
lines.append("// DSA1 question bank — generated. Edit THIS file to add questions.")
lines.append("// Question fields:")
lines.append("//   id      : unique string, e.g. \"l05-01\"")
lines.append("//   lesson  : \"L01\" .. \"L11\" (which chapter it belongs to)")
lines.append("//   topic   : a short knowledge-point label (shown as a tag)")
lines.append("//   prompt  : the question text; ```python``` code, `inline`, **bold** are supported")
lines.append("//   options : array of 2-6 answer choices (A, B, C ... are added automatically)")
lines.append("//   answer  : index of the correct option (0 = A, 1 = B, ...)")
lines.append("//   exp     : the explanation, shown after answering")
lines.append("//   ref     : \"Read again\" pointer, e.g. \"L03 notes, section 4\"")
lines.append("//   code    : optional reference code shown above the question")
lines.append("")
lines.append("window.LESSONS = " + json.dumps(LESSONS, ensure_ascii=False, indent=2) + ";")
lines.append("")
lines.append("window.QUESTION_BANK = " + json.dumps(bank, ensure_ascii=False, indent=2) + ";")
lines.append("")

with open(os.path.join(DATA, "bank.js"), "w", encoding="utf-8") as f:
    f.write("\n".join(lines))

from collections import Counter
print("Total bank: %d questions" % len(bank))
print("By lesson:", dict(Counter(q["lesson"] for q in bank)))
print("Output: data/bank.js  (%d bytes)" % os.path.getsize(os.path.join(DATA, "bank.js")))
