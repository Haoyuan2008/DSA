// DSA1 question bank — generated. Edit THIS file to add questions.
// Question fields:
//   id      : unique string, e.g. "l05-01"
//   lesson  : "L01" .. "L11" (which chapter it belongs to)
//   topic   : a short knowledge-point label (shown as a tag)
//   prompt  : the question text; ```python``` code, `inline`, **bold** are supported
//   options : array of 2-6 answer choices (A, B, C ... are added automatically)
//   answer  : index of the correct option (0 = A, 1 = B, ...)
//   exp     : the explanation, shown after answering
//   ref     : "Read again" pointer, e.g. "L03 notes, section 4"
//   code    : optional reference code shown above the question

window.LESSONS = [
  {
    "id": "L01",
    "title": "Algorithms & Data Structures",
    "en": "Algorithms",
    "color": "#c97b5a"
  },
  {
    "id": "L02",
    "title": "Complexity & Big-O",
    "en": "Big-O",
    "color": "#c98a3d"
  },
  {
    "id": "L03",
    "title": "Lists & Memory",
    "en": "Lists",
    "color": "#b9774a"
  },
  {
    "id": "L04",
    "title": "Strings",
    "en": "Strings",
    "color": "#a06b4a"
  },
  {
    "id": "L05",
    "title": "Selection & Bubble Sort",
    "en": "Sorting I",
    "color": "#d9826a"
  },
  {
    "id": "L06",
    "title": "Insertion Sort & Stability",
    "en": "Sorting II",
    "color": "#c9765a"
  },
  {
    "id": "L07",
    "title": "Linear & Binary Search",
    "en": "Searching",
    "color": "#c8823f"
  },
  {
    "id": "L08",
    "title": "Two Pointers",
    "en": "Two pointers",
    "color": "#d99a3d"
  },
  {
    "id": "L10",
    "title": "Stacks",
    "en": "Stacks",
    "color": "#a4714b"
  },
  {
    "id": "L11",
    "title": "Queues",
    "en": "Queues",
    "color": "#c9935a"
  }
];

window.QUESTION_BANK = [
  {
    "id": "g-l01-01",
    "lesson": "L01",
    "src": "gen",
    "topic": "Algorithm definition",
    "prompt": "Which of these is **not** an algorithm?",
    "options": [
      "Look at each card from left to right, and stop at the first ace.",
      "Guess the middle of the remaining range, and repeat until one number is left.",
      "Add a little salt until the soup tastes good.",
      "Open a dictionary near the middle, and go left or right by the letter."
    ],
    "answer": 2,
    "exp": "\"Add salt to taste\" needs judgement: two cooks would do something different. An algorithm's steps must be ones anyone can follow exactly. The other three are clear steps that always finish.",
    "ref": "L01 notes, section 3.",
    "code": ""
  },
  {
    "id": "g-l01-02",
    "lesson": "L01",
    "src": "gen",
    "topic": "Data structure",
    "prompt": "A hundred books are moved from piles on the floor to a shelf in alphabetical order. What changed?",
    "options": [
      "The books changed.",
      "The arrangement changed, so finding one book is now much faster.",
      "Nothing changed — they are still stored.",
      "The number of books changed."
    ],
    "answer": 1,
    "exp": "Same books, same room: the arrangement changed, and the work changed with it. A data structure is a way of organising data so we can use it efficiently. No arrangement is best at everything — alphabetical order makes looking up fast and adding a new book slow.",
    "ref": "L01 notes, section 4.",
    "code": ""
  },
  {
    "id": "l05-01",
    "lesson": "L01",
    "src": "l05",
    "topic": "Algorithms & Data Structures",
    "prompt": "Which one of these is an **algorithm**?",
    "options": [
      "Add a little salt until the soup tastes good.",
      "Look at each card from left to right. Stop at the first ace. If there is no ace, say \"no ace\".",
      "Keep guessing numbers at random until you find the right one.",
      "Any program written in Python."
    ],
    "answer": 1,
    "exp": " An algorithm has steps anyone can follow **exactly**, it **always finishes**, and it is\n**correct** for every valid input. A needs judgement (\"tastes good\"). C may never finish. D is\nwrong because code is only one way to write an algorithm down, and a program can be wrong or\nnever finish.",
    "ref": "L01 notes, section 3.",
    "code": ""
  },
  {
    "id": "l09-01",
    "lesson": "L01",
    "src": "l09",
    "topic": "Algorithms & Data Structures",
    "prompt": "You play the guessing game: I think of a number between 1 and 1,000,000. You cut the range\nin half with each guess. In the worst case, about how many guesses do you need?",
    "options": [
      "1,000,000",
      "500,000",
      "20",
      "1,000"
    ],
    "answer": 2,
    "exp": " Each guess throws away half of the numbers that are left. 1,000,000 halves down to 1\nin about 20 steps. Guessing one number at a time needs up to 1,000,000 guesses.",
    "ref": "L09 notes, section 3.",
    "code": ""
  },
  {
    "id": "l09-02",
    "lesson": "L01",
    "src": "l09",
    "topic": "Algorithms & Data Structures",
    "prompt": "What is a **data structure**?",
    "options": [
      "A way of organising and storing data, so that we can use it efficiently",
      "Any program written in Python",
      "A list of steps that always finishes and is always correct",
      "The memory inside a computer"
    ],
    "answer": 0,
    "exp": " C describes an **algorithm**, not a data structure. The two work together: halving\nonly works because the numbers are **in order**, and the order is the data structure.",
    "ref": "L09 notes, section 3.",
    "code": ""
  },
  {
    "id": "l05-02",
    "lesson": "L02",
    "src": "l05",
    "topic": "Complexity & Big-O",
    "prompt": "Count one operation each time a line inside the function runs. The `for` line itself does not\ncount. **In the worst case**, how many operations does `count_big` do on a list of `n` numbers?\n\n```python\ndef count_big(numbers):\n    count = 0\n    for number in numbers:\n        if number > 10:\n            count = count + 1\n    return count\n```",
    "options": [
      "`n + 2`",
      "`2n`",
      "`n² + 2`",
      "`2n + 2`"
    ],
    "answer": 3,
    "exp": " `count = 0` and `return count` run once each: 2. The `if` line runs once per item: `n`.\nIn the worst case every number is bigger than 10, so `count = count + 1` also runs `n` times.\nTotal: `2n + 2`. That is still `O(n)`.",
    "ref": "L02 notes, sections 2 and 4.",
    "code": ""
  },
  {
    "id": "l05-03",
    "lesson": "L02",
    "src": "l05",
    "topic": "Complexity & Big-O",
    "prompt": "What is the time complexity of `halvings_for_each`?\n\n```python\ndef halvings_for_each(numbers):\n    steps = 0\n    for number in numbers:\n        size = len(numbers)\n        while size > 1:\n            size = size // 2\n            steps = steps + 1\n    return steps\n```",
    "options": [
      "`O(log n)`",
      "`O(n)`",
      "`O(n log n)`",
      "`O(n²)`"
    ],
    "answer": 2,
    "exp": " The inner `while` loop halves `size`: `log n` turns. It sits **inside** a loop over `n`\nitems, and nested loops multiply: `n × log n`.\n\nCompare: a loop over `n` items, **then** a halving loop after it, is `n + log n`, so `O(n)`.\nInside multiplies. After adds.",
    "ref": "L02 notes, sections 7 and 8.",
    "code": ""
  },
  {
    "id": "l05-04",
    "lesson": "L02",
    "src": "l05",
    "topic": "Complexity & Big-O",
    "prompt": "What is the **space** complexity of `squares`, the extra memory it uses?\n\n```python\ndef squares(numbers):\n    result = []\n    for number in numbers:\n        result.append(number * number)\n    return result\n```",
    "options": [
      "`O(1)`",
      "`O(n)`",
      "`O(log n)`",
      "`O(n²)`"
    ],
    "answer": 1,
    "exp": " `result` grows by one item for each item of `numbers`, so it holds `n` items at the end.\nThe time is `O(n)` too, but time and space are two separate questions.",
    "ref": "L02 notes, section 3.",
    "code": ""
  },
  {
    "id": "l05-05",
    "lesson": "L02",
    "src": "l05",
    "topic": "Complexity & Big-O",
    "prompt": "An `O(n²)` function does about 100 operations on 10 items. About how many operations does\nit do on 100 items?",
    "options": [
      "1,000",
      "2,000",
      "10,000",
      "100,000"
    ],
    "answer": 2,
    "exp": " The input is 10 times bigger, and `O(n²)` squares that: `10² = 100` times more\noperations. So `100 × 100 = 10,000`. An `O(n)` function would do only 10 times more.\n\nBig-O tells you how the **work** grows, never how many seconds it takes: the seconds depend\non the computer.",
    "ref": "L02 notes, sections 1 and 7.",
    "code": ""
  },
  {
    "id": "l05-06",
    "lesson": "L02",
    "src": "l05",
    "topic": "Complexity & Big-O",
    "prompt": "What is the **worst case** of `has_negative`, and when does it happen?\n\n```python\ndef has_negative(numbers):\n    for number in numbers:\n        if number < 0:\n            return True\n    return False\n```",
    "options": [
      "`O(1)`, when the first number is negative",
      "`O(n)`, when the first number is negative",
      "`O(n²)`, when every number is negative",
      "`O(n)`, when no number is negative"
    ],
    "answer": 3,
    "exp": " The loop stops at the first negative number. With no negative number, it looks at all\n`n` items, then returns `False`. A is the **best** case, not the worst.",
    "ref": "L02 notes, section 4.",
    "code": ""
  },
  {
    "id": "l09-03",
    "lesson": "L02",
    "src": "l09",
    "topic": "Complexity & Big-O",
    "prompt": "A function does `4n + 7` operations. What is its time complexity?",
    "options": [
      "`O(1)`",
      "`O(n)`",
      "`O(n²)`",
      "`O(log n)`"
    ],
    "answer": 1,
    "exp": " Drop the constant factor `4`. Keep only the fastest-growing term: `n` grows, `7` does\nnot. So `4n + 7` is `O(n)`.",
    "ref": "L09 notes, section 4.",
    "code": ""
  },
  {
    "id": "l09-04",
    "lesson": "L02",
    "src": "l09",
    "topic": "Complexity & Big-O",
    "prompt": "What is the time complexity of `three_each`?\n\n```python\ndef three_each(numbers):\n    count = 0\n    for number in numbers:\n        for i in range(3):\n            count = count + 1\n    return count\n```",
    "options": [
      "`O(n²)`",
      "`O(1)`",
      "`O(log n)`",
      "`O(n)`"
    ],
    "answer": 3,
    "exp": " There is a loop inside a loop, but the inner loop always runs **3** times. Count the\nturns: `3 × n`. Drop the `3`: `O(n)`. A nested loop is `O(n²)` only when both loops grow\nwith `n`.",
    "ref": "L09 notes, section 4, \"Reading loops\".",
    "code": ""
  },
  {
    "id": "l09-05",
    "lesson": "L02",
    "src": "l09",
    "topic": "Complexity & Big-O",
    "prompt": "A function has a loop over `n` items. **Inside** that loop, there is a halving loop: it\nhalves a number until it reaches 1. What is the time complexity of the function?",
    "options": [
      "`O(n log n)`",
      "`O(log n)`",
      "`O(n)`",
      "`O(n²)`"
    ],
    "answer": 0,
    "exp": " The outer loop runs `n` times. Each time, the halving loop runs about `log n` times.\nA loop inside a loop **multiplies**: `n × log n`.",
    "ref": "L09 notes, section 4.",
    "code": ""
  },
  {
    "id": "l09-06",
    "lesson": "L02",
    "src": "l09",
    "topic": "Complexity & Big-O",
    "prompt": "What is the **space** complexity of `total`? Space complexity is the **extra** memory the\nfunction uses.\n\n```python\ndef total(numbers):\n    result = 0\n    for number in numbers:\n        result = result + number\n    return result\n```",
    "options": [
      "`O(n)`",
      "`O(1)`",
      "`O(n²)`",
      "`O(log n)`"
    ],
    "answer": 1,
    "exp": " The function makes one variable, `result`, whatever the size of the list. The input\nlist does not count: you were given it. The **time** is `O(n)`, but the **space** is `O(1)`.",
    "ref": "L09 notes, section 4.",
    "code": ""
  },
  {
    "id": "l09-07",
    "lesson": "L02",
    "src": "l09",
    "topic": "Complexity & Big-O",
    "prompt": "A function is `O(n)`. You run it on 1,000 items, then on 2,000 items. What happens to the\nwork?",
    "options": [
      "It stays the same",
      "It goes up by one step",
      "It is about two times larger",
      "It is about four times larger"
    ],
    "answer": 2,
    "exp": " `O(n)`: double the input, and the work doubles. A is `O(1)`, B is `O(log n)`, and D\nis `O(n²)`.",
    "ref": "L09 notes, section 4, the table of the five runtimes.",
    "code": ""
  },
  {
    "id": "l09-08",
    "lesson": "L02",
    "src": "l09",
    "topic": "Complexity & Big-O",
    "prompt": "Someone says: \"`contains` is `O(n)`.\" They do not say best, worst or average case. Which\ncase do they mean?",
    "options": [
      "The best case",
      "The average case",
      "All three cases at once",
      "The worst case"
    ],
    "answer": 3,
    "exp": " When no case is named, we mean the **worst** case. It is a promise: the code is never\nslower than this.",
    "ref": "L09 notes, section 4.",
    "code": ""
  },
  {
    "id": "g-l03-01",
    "lesson": "L03",
    "src": "gen",
    "topic": "Slicing",
    "prompt": "`items` is a list of `n` items. What does `items[1:]` cost?",
    "options": [
      "`O(1)`",
      "`O(n)`",
      "`O(log n)`",
      "`O(n²)`"
    ],
    "answer": 1,
    "exp": "A slice builds a new list and copies its items. `items[1:]` copies `n - 1` items, so it is `O(n)`. `items[:3]` copies at most 3, so it is `O(1)`. The cost is the size of the slice: `O(b - a)`.",
    "ref": "L03 notes, section 4.",
    "code": ""
  },
  {
    "id": "l05-07",
    "lesson": "L03",
    "src": "l05",
    "topic": "Lists & Memory",
    "prompt": "What is the time complexity of `total_of_rests`?\n\n```python\ndef total_of_rests(numbers):\n    total = 0\n    for i in range(len(numbers)):\n        rest = numbers[i:]\n        total = total + len(rest)\n    return total\n```",
    "options": [
      "`O(1)`",
      "`O(n)`",
      "`O(n log n)`",
      "`O(n²)`"
    ],
    "answer": 3,
    "exp": " It looks like one loop, but `numbers[i:]` is a **slice**, and a slice copies its items.\nThe slices copy `n`, then `n - 1`, and so on down to 1 item: about `n² / 2` copies in total.",
    "ref": "L03 notes, section 4, and L04 notes, section 6.",
    "code": ""
  },
  {
    "id": "l05-08",
    "lesson": "L03",
    "src": "l05",
    "topic": "Lists & Memory",
    "prompt": "What does this code print?\n\n```python\nmarks = [4, 7, 9]\nfor mark in marks:\n    mark = mark + 1\nprint(marks)\n```",
    "options": [
      "`[4, 7, 9]`",
      "`[5, 8, 10]`",
      "`[5, 7, 9]`",
      "`None`"
    ],
    "answer": 0,
    "exp": " `mark = mark + 1` changes the name `mark`, not the list. A loop over items cannot change\nthe list. To change it, loop over the positions: `marks[i] = marks[i] + 1`.",
    "ref": "L03 notes, section 6.",
    "code": ""
  },
  {
    "id": "l05-09",
    "lesson": "L03",
    "src": "l05",
    "topic": "Lists & Memory",
    "prompt": "What does this code print?\n\n```python\na = [3, 1, 2]\nb = a[:]\nb.append(4)\nprint(a, b)\n```",
    "options": [
      "`[3, 1, 2, 4] [3, 1, 2, 4]`",
      "`[3, 1, 2] [3, 1, 2, 4]`",
      "`[3, 1, 2] None`",
      "`[3, 1, 2, 4] [3, 1, 2]`"
    ],
    "answer": 1,
    "exp": " `a[:]` is a full slice, so `b` is a **new** list, a copy. Changing `b` does not change\n`a`. With `b = a` instead, both names would show `[3, 1, 2, 4]`: one list, two names.",
    "ref": "L03 notes, sections 4 and 6.",
    "code": ""
  },
  {
    "id": "l09-09",
    "lesson": "L03",
    "src": "l09",
    "topic": "Lists & Memory",
    "prompt": "`items` is a list of `n` items. What does `items.pop(0)` cost?",
    "options": [
      "`O(1)`",
      "`O(log n)`",
      "`O(n)`",
      "`O(n²)`"
    ],
    "answer": 2,
    "exp": " `pop(0)` removes the **first** item. Every other item then moves one place left. That\nis `n - 1` moves: `O(n)`. `pop()` with no position removes the last item, and nothing\nmoves: `O(1)`.",
    "ref": "L09 notes, section 5.",
    "code": ""
  },
  {
    "id": "l09-10",
    "lesson": "L03",
    "src": "l09",
    "topic": "Lists & Memory",
    "prompt": "What does this code print?\n\n```python\nitems = [5, 6, 7, 8]\nprint(items[len(items) - 1])\n```",
    "options": [
      "`8`",
      "`7`",
      "An `IndexError`",
      "`4`"
    ],
    "answer": 0,
    "exp": " `len(items)` is 4. The positions are 0, 1, 2 and 3, so the last position is\n`4 - 1 = 3`. `items[3]` is `8`. `items[4]` would be an `IndexError`.",
    "ref": "L09 notes, section 5.",
    "code": ""
  },
  {
    "id": "l09-11",
    "lesson": "L03",
    "src": "l09",
    "topic": "Lists & Memory",
    "prompt": "What does this code print?\n\n```python\na = [1, 2]\nb = a[:]\nb.append(3)\nprint(a)\n```",
    "options": [
      "`[1, 2, 3]`",
      "`None`",
      "`[3]`",
      "`[1, 2]`"
    ],
    "answer": 3,
    "exp": " `a[:]` is a full slice: it makes a **copy**. So `b` is a different list, and\n`append` changes only `b`. With `b = a`, the answer would be `[1, 2, 3]`.",
    "ref": "L09 notes, section 5.",
    "code": ""
  },
  {
    "id": "l09-12",
    "lesson": "L03",
    "src": "l09",
    "topic": "Lists & Memory",
    "prompt": "What does this code print?\n\n```python\nnumbers = [3, 3, 5]\nfor number in numbers:\n    if number == 3:\n        numbers.remove(number)\nprint(numbers)\n```",
    "options": [
      "`[5]`",
      "`[3, 5]`",
      "`[3, 3, 5]`",
      "An error"
    ],
    "answer": 1,
    "exp": " The loop reads position 0: a `3`, so it removes it. The list is now `[3, 5]`. The\nsecond `3` moved to position 0, but the loop goes on to position 1 and reads `5`. So it\nnever sees the second `3`. Do not remove items from a list while you loop over it.",
    "ref": "L09 notes, section 5.",
    "code": ""
  },
  {
    "id": "l05-10",
    "lesson": "L04",
    "src": "l05",
    "topic": "Strings",
    "prompt": "What does this code print?\n\n```python\nprint(chr(ord(\"a\") + 2))\n```",
    "options": [
      "`c`",
      "`b`",
      "`99`",
      "A `TypeError`"
    ],
    "answer": 0,
    "exp": " Read it from the inside out. First `ord(\"a\")`: 97. Then `+ 2`: 99. Then `chr(99)`, the\ncharacter for 99, which is `c`. The letters follow each other with no gaps, so you can do arithmetic with them.",
    "ref": "L04 notes, section 5.",
    "code": ""
  },
  {
    "id": "l05-11",
    "lesson": "L04",
    "src": "l05",
    "topic": "Strings",
    "prompt": "What does this code print?\n\n```python\nparts = \"2026-11-07\".split(\"-\")\nprint(len(parts), parts[1])\n```",
    "options": [
      "`3 11`",
      "`2 11`",
      "`3 -`",
      "`10 11`"
    ],
    "answer": 0,
    "exp": " `split(\"-\")` cuts the string at each `-` and gives back a **list** of 3 strings:\n`[\"2026\", \"11\", \"07\"]`. Position 1 is `\"11\"`. The `-` signs are not in the list.",
    "ref": "L04 notes, section 4.",
    "code": ""
  },
  {
    "id": "l05-12",
    "lesson": "L04",
    "src": "l05",
    "topic": "Strings",
    "prompt": "`text` holds `n` characters. Which one of these is `O(1)`?",
    "options": [
      "`text.upper()`",
      "`\"x\" in text`",
      "`text[5]`",
      "`text.replace(\"a\", \"b\")`"
    ],
    "answer": 2,
    "exp": " Reading one position is `O(1)`, as on a list. The others read the whole string, and\n`upper` and `replace` also build a new one: `O(n)`.",
    "ref": "L04 notes, \"What each operation costs\".",
    "code": ""
  },
  {
    "id": "l09-13",
    "lesson": "L04",
    "src": "l09",
    "topic": "Strings",
    "prompt": "What happens when this code runs?\n\n```python\nword = \"Bat\"\nword[0] = \"C\"\nprint(word)\n```",
    "options": [
      "It prints `Cat`",
      "It prints `Bat`",
      "It gives a `TypeError`",
      "It prints `None`"
    ],
    "answer": 2,
    "exp": " A string is **immutable**: it cannot change. You cannot change one character. Build\na new string instead: `word = \"C\" + word[1:]`.",
    "ref": "L09 notes, section 6.",
    "code": ""
  },
  {
    "id": "l09-14",
    "lesson": "L04",
    "src": "l09",
    "topic": "Strings",
    "prompt": "You build a string of `n` characters. Which way costs `O(n)`?",
    "options": [
      "Put the characters in a list, then call `\"\".join(...)` once",
      "Add each character with `result = result + letter`",
      "Add each character at the front of a list with `insert(0, letter)`",
      "Cut the first character off with `text = text[1:]` on each turn"
    ],
    "answer": 0,
    "exp": " `join` copies each character once: `O(n)`. B copies the whole string on every `+`,\nand C and D move or copy everything on every turn: all three are `O(n²)`.",
    "ref": "L09 notes, section 6.",
    "code": ""
  },
  {
    "id": "l09-15",
    "lesson": "L04",
    "src": "l09",
    "topic": "Strings",
    "prompt": "What does this code print?\n\n```python\nwords = \"I like green tea\".split()\nprint(len(words))\n```",
    "options": [
      "`16`",
      "`1`",
      "`3`",
      "`4`"
    ],
    "answer": 3,
    "exp": " `split()` cuts the string at each space and gives back a **list** of words:\n`[\"I\", \"like\", \"green\", \"tea\"]`. The list holds 4 words. 16 is the number of characters in\nthe string.",
    "ref": "L09 notes, section 6.",
    "code": ""
  },
  {
    "id": "l09-16",
    "lesson": "L04",
    "src": "l09",
    "topic": "Strings",
    "prompt": "What does this code print?\n\n```python\ntext = \"xyz\"\nif text.find(\"x\"):\n    print(\"yes\")\nelse:\n    print(\"no\")\n```",
    "options": [
      "`yes`",
      "`no`",
      "`0`",
      "An error"
    ],
    "answer": 1,
    "exp": " `\"x\"` is at position 0, so `find` gives back `0`. In an `if`, `0` counts as **false**,\nso the code prints `no`, even though `\"x\"` is there. Always compare with `-1`:\n`if text.find(\"x\") != -1:`.",
    "ref": "L09 notes, section 6.",
    "code": ""
  },
  {
    "id": "g-l05-01",
    "lesson": "L05",
    "src": "gen",
    "topic": "Selection sort",
    "prompt": "Selection sort runs on `[3, 1, 2]`. What is the list after **one pass**?",
    "options": [
      "`[1, 3, 2]`",
      "`[1, 2, 3]`",
      "`[3, 1, 2]`",
      "`[2, 1, 3]`"
    ],
    "answer": 0,
    "exp": "The smallest value is `1`, at position 1. Selection sort swaps it with the item at position 0, the `3`. Nothing else moves: `[1, 3, 2]`. B is the finished sort, not one pass.",
    "ref": "L05 notes, section 2.",
    "code": ""
  },
  {
    "id": "g-l05-02",
    "lesson": "L05",
    "src": "gen",
    "topic": "Bubble sort early exit",
    "prompt": "Bubble sort with an early exit runs on an already sorted list of 8 items. How many comparisons does it make?",
    "options": [
      "7",
      "8",
      "28",
      "56"
    ],
    "answer": 0,
    "exp": "One pass makes `n - 1 = 7` comparisons, finds no swap, and stops. On a sorted list, bubble sort with the early exit is `O(n)`. Selection sort has no early exit: it still makes 28 comparisons on 8 items.",
    "ref": "L05 notes, section 4.",
    "code": ""
  },
  {
    "id": "g-l05-03",
    "lesson": "L05",
    "src": "gen",
    "topic": "Swap",
    "prompt": "`a = [1, 2, 3]`. After `a[0], a[2] = a[2], a[0]`, what is `a`?",
    "options": [
      "`[3, 2, 1]`",
      "`[1, 2, 1]`",
      "`[3, 2, 3]`",
      "`[1, 2, 3]`"
    ],
    "answer": 0,
    "exp": "Python reads the right side first — it remembers `3` and `1` — then writes them. So the two positions really swap: `[3, 2, 1]`. A two-line swap would lose a value.",
    "ref": "L05 notes, section 1, \"Swapping two items\".",
    "code": ""
  },
  {
    "id": "l09-17",
    "lesson": "L05",
    "src": "l09",
    "topic": "Selection & Bubble Sort",
    "prompt": "Bubble sort runs on `[4, 2, 5, 1]`. What is the list after **one full pass**?",
    "options": [
      "`[2, 4, 1, 5]`",
      "`[2, 4, 5, 1]`",
      "`[1, 2, 4, 5]`",
      "`[1, 2, 5, 4]`"
    ],
    "answer": 0,
    "exp": " Compare each pair of neighbours, from left to right:\n\n| Pair | Values | Action | The list after |\n| --- | --- | --- | --- |\n| 0 and 1 | 4 and 2 | swap | 2, 4, 5, 1 |\n| 1 and 2 | 4 and 5 | keep | 2, 4, 5, 1 |\n| 2 and 3 | 5 and 1 | swap | 2, 4, 1, 5 |\n\nB stops after one swap. C is the finished sort. D is selection sort's first pass.",
    "ref": "L09 notes, section 7.",
    "code": ""
  },
  {
    "id": "l09-18",
    "lesson": "L05",
    "src": "l09",
    "topic": "Selection & Bubble Sort",
    "prompt": "Selection sort runs on `[9, 4, 7, 1, 3]`. What is the list after **one pass**?",
    "options": [
      "`[4, 7, 1, 3, 9]`",
      "`[4, 9, 7, 1, 3]`",
      "`[1, 4, 7, 9, 3]`",
      "`[1, 3, 4, 7, 9]`"
    ],
    "answer": 2,
    "exp": " The smallest value is `1`, at position 3. Selection sort swaps it with the item at\nposition 0, the `9`. Nothing else moves. A is bubble sort's first pass. D is the finished\nsort.",
    "ref": "L09 notes, section 7.",
    "code": ""
  },
  {
    "id": "l09-19",
    "lesson": "L05",
    "src": "l09",
    "topic": "Selection & Bubble Sort",
    "prompt": "Selection sort runs on a list of 10 items. What is the **largest** number of swaps it can\nmake?",
    "options": [
      "1",
      "9",
      "45",
      "100"
    ],
    "answer": 1,
    "exp": " Selection sort makes at most one swap per pass, and there are `n - 1` passes: 9.\nThat is its one strength. Bubble sort can make up to `n(n - 1) / 2` swaps: 45.",
    "ref": "L09 notes, section 7.",
    "code": ""
  },
  {
    "id": "l09-20",
    "lesson": "L05",
    "src": "l09",
    "topic": "Selection & Bubble Sort",
    "prompt": "`bubble_sort(numbers)` sorts the list **in place**, like the one in the L05 notes. What does\nthis code print?\n\n```python\nnumbers = [3, 1, 2]\nnumbers = bubble_sort(numbers)\nprint(numbers)\n```",
    "options": [
      "`[1, 2, 3]`",
      "`[3, 1, 2]`",
      "`[3, 2, 1]`",
      "`None`"
    ],
    "answer": 3,
    "exp": " An in-place sort changes the list and gives back `None`. The second line stores that\n`None` in `numbers`, and the sorted list is lost. Call the sort alone on its line:\n`bubble_sort(numbers)`.",
    "ref": "L09 notes, section 7.",
    "code": ""
  },
  {
    "id": "g-l06-01",
    "lesson": "L06",
    "src": "gen",
    "topic": "Insertion sort",
    "prompt": "When you pick up a new playing card in insertion sort, what do you do with it?",
    "options": [
      "Swap it with the first card.",
      "Slide it left past every bigger card until it sits in the right place.",
      "Move it to the very end.",
      "Find the smallest card and put it at the front."
    ],
    "answer": 1,
    "exp": "Insertion sort takes the next item (the key) and slides it left past every item that is bigger, then puts it in the free position. The left part is always sorted. Finding the smallest is selection sort's move.",
    "ref": "L06 notes, section 1.",
    "code": ""
  },
  {
    "id": "g-l06-02",
    "lesson": "L06",
    "src": "gen",
    "topic": "Shift vs swap",
    "prompt": "Insertion sort uses a **shift**, not a swap. What is the difference?",
    "options": [
      "A shift moves one item; a swap moves two.",
      "A swap moves one item; a shift moves two.",
      "They are the same thing.",
      "A shift swaps two neighbours."
    ],
    "answer": 0,
    "exp": "A shift copies one item one position to the right. A swap exchanges two items. This is why you must save the key first: the first shift writes over the position where the key was.",
    "ref": "L06 notes, section 1, \"Shifting, not swapping\".",
    "code": ""
  },
  {
    "id": "g-l06-03",
    "lesson": "L06",
    "src": "gen",
    "topic": "Insertion sort key placement",
    "prompt": "In insertion sort, the `while` loop has stopped. Where does the key go?",
    "options": [
      "At position `j`",
      "At position `j + 1`",
      "At position `j - 1`",
      "At position `0`"
    ],
    "answer": 1,
    "exp": "When the loop stops, `j` is one step too far left: on an item that is not bigger than the key, or at `-1`. The free position is the one after it: `j + 1`.",
    "ref": "L06 notes, section 1, \"Placing one item\".",
    "code": ""
  },
  {
    "id": "g-l06-04",
    "lesson": "L06",
    "src": "gen",
    "topic": "Insertion sort best case",
    "prompt": "Insertion sort runs on a list that is already sorted. What is its complexity?",
    "options": [
      "`O(n²)`",
      "`O(n log n)`",
      "`O(n)`",
      "`O(1)`"
    ],
    "answer": 2,
    "exp": "Every key is bigger than the item on its left, so the first comparison is `False` and the `while` loop never runs. One comparison per key, no shift: `n - 1` comparisons, `O(n)`. The worst case (a reversed list) is still `O(n²)`.",
    "ref": "L06 notes, section 2.",
    "code": ""
  },
  {
    "id": "g-l06-05",
    "lesson": "L06",
    "src": "gen",
    "topic": "min and max",
    "prompt": "`scores = [90, 75, 60]`. What does `min(scores)` give back?",
    "options": [
      "The position `2`",
      "The value `60`",
      "A sorted list",
      "`None`"
    ],
    "answer": 1,
    "exp": "`min()` and `max()` give back a **value**, not a position. Selection sort needed the position to swap that item, which is why L05 wrote `position_of_smallest` by hand.",
    "ref": "L06 notes, section 5.",
    "code": ""
  },
  {
    "id": "l09-21",
    "lesson": "L06",
    "src": "l09",
    "topic": "Insertion Sort & Stability",
    "prompt": "Which of these sorts is **not** stable?",
    "options": [
      "Selection sort",
      "Bubble sort",
      "`sorted()`",
      "`.sort()`"
    ],
    "answer": 0,
    "exp": " Selection sort swaps two items that can be far apart, so an item can jump over an\nequal one. Bubble sort only swaps two neighbours when the left one is **bigger**, so equal\nitems never pass each other. Python's `sorted()` and `.sort()` are stable.",
    "ref": "L09 notes, section 8.",
    "code": ""
  },
  {
    "id": "l09-22",
    "lesson": "L06",
    "src": "l09",
    "topic": "Insertion Sort & Stability",
    "prompt": "What does this code print?\n\n```python\nscores = [3, 1, 2]\nscores = scores.sort()\nprint(scores)\n```",
    "options": [
      "`[1, 2, 3]`",
      "`[3, 1, 2]`",
      "`None`",
      "An error"
    ],
    "answer": 2,
    "exp": " `.sort()` sorts the list in place and gives back `None`, like the sorts you wrote.\nWrite `scores.sort()` alone, or `in_order = sorted(scores)`.",
    "ref": "L09 notes, section 8.",
    "code": ""
  },
  {
    "id": "l09-23",
    "lesson": "L06",
    "src": "l09",
    "topic": "Insertion Sort & Stability",
    "prompt": "What is the time complexity of Python's `sorted()` on `n` items?",
    "options": [
      "`O(n)`",
      "`O(n log n)`",
      "`O(n²)`",
      "`O(log n)`"
    ],
    "answer": 1,
    "exp": " `sorted()` and `.sort()` are `O(n log n)`, even in the worst case, and they are\nstable. Selection sort and bubble sort are `O(n²)`. On 1,000 items, that is about 10,000 steps against\nabout 500,000.",
    "ref": "L09 notes, section 8.",
    "code": ""
  },
  {
    "id": "g-l07-01",
    "lesson": "L07",
    "src": "gen",
    "topic": "Binary search loop",
    "prompt": "In binary search, why is the loop `while low <= high` and not `while low < high`?",
    "options": [
      "With `<`, the last item left is never checked.",
      "With `<=`, the loop runs forever.",
      "`<` is faster.",
      "It does not matter."
    ],
    "answer": 0,
    "exp": "When `low` and `high` are equal, one item is left, and it still needs a check. `while low < high` would skip it. The loop stops only when `low` passes `high` — then nothing is left.",
    "ref": "L07 notes, section 6.",
    "code": ""
  },
  {
    "id": "g-l07-02",
    "lesson": "L07",
    "src": "gen",
    "topic": "The -1 trap",
    "prompt": "`position = find_index(items, target)`, and the target is not found, so `position` is `-1`. What does `items[position]` give?",
    "options": [
      "An error",
      "The first item",
      "The last item",
      "`None`"
    ],
    "answer": 2,
    "exp": "Python allows a negative index: `items[-1]` is the **last** item, and there is no error. So check `if position != -1:` before you use the result as an index.",
    "ref": "L07 notes, section 1, \"-1 means not found\".",
    "code": ""
  },
  {
    "id": "l09-24",
    "lesson": "L07",
    "src": "l09",
    "topic": "Linear & Binary Search",
    "prompt": "What does this code print?\n\n```python\ndef find_index(items, target):\n    for i in range(len(items)):\n        if items[i] == target:\n            return i\n        else:\n            return -1\n\nprint(find_index([4, 9, 2], 9))\n```",
    "options": [
      "`1`",
      "`9`",
      "`None`",
      "`-1`"
    ],
    "answer": 3,
    "exp": " `return -1` is **inside** the loop. At position 0, `4` is not `9`, so the `else` runs\nand the function returns `-1` at once. It never reaches position 1. `return -1` must go\n**after** the loop.",
    "ref": "L09 notes, section 9.",
    "code": ""
  },
  {
    "id": "l09-25",
    "lesson": "L07",
    "src": "l09",
    "topic": "Linear & Binary Search",
    "prompt": "Linear search stops at the first match. This is the **early exit**. What does it change?",
    "options": [
      "The best case gets better. The worst case is still `O(n)`",
      "The worst case becomes `O(1)`",
      "Linear search becomes `O(log n)`",
      "Nothing at all"
    ],
    "answer": 0,
    "exp": " With the early exit, a target in the first position takes 1 comparison. But a target\nin the last position, or not in the list, still takes `n`. So the search is faster in\npractice, and still `O(n)`.",
    "ref": "L09 notes, section 9.",
    "code": ""
  },
  {
    "id": "l09-26",
    "lesson": "L07",
    "src": "l09",
    "topic": "Linear & Binary Search",
    "prompt": "Binary search runs on `[2, 5, 8, 12, 16, 23, 38, 45, 56, 67]` and looks for `23`. How many\nvalues does it compare with `23`?",
    "options": [
      "1",
      "2",
      "3",
      "6"
    ],
    "answer": 2,
    "exp": "| `low` | `high` | `mid` | `numbers[mid]` | What happens |\n| --- | --- | --- | --- | --- |\n| 0 | 9 | 4 | 16 | too small: `low = 5` |\n| 5 | 9 | 7 | 45 | too big: `high = 6` |\n| 5 | 6 | 5 | 23 | found: return `5` |\n\nLinear search would need 6 comparisons.",
    "ref": "L09 notes, section 9.",
    "code": ""
  },
  {
    "id": "l09-27",
    "lesson": "L07",
    "src": "l09",
    "topic": "Linear & Binary Search",
    "prompt": "A list of 1,000,000 items is **not sorted**. You will search it only **once**. What is the\nbest choice?",
    "options": [
      "Sort it with `sorted()`, then use binary search",
      "Use linear search",
      "Use binary search at once, with no sort",
      "Sort it with selection sort, then use binary search"
    ],
    "answer": 1,
    "exp": " One linear search costs at most 1,000,000 comparisons. Sorting costs about\n20,000,000 steps, more than the search it saves. C gives wrong answers on an unsorted list.\nSort once, search many: sorting first is only worth it when you search many times.",
    "ref": "L09 notes, section 9.",
    "code": ""
  },
  {
    "id": "g-l08-01",
    "lesson": "L08",
    "src": "gen",
    "topic": "Slow and fast pointers",
    "prompt": "`remove_value` is the function from the L08 notes. What does it **return**?",
    "options": [
      "The new length of the kept part.",
      "The shortened list.",
      "The number of values removed.",
      "`None`."
    ],
    "answer": 0,
    "exp": "An in-place function moves the kept values to the front but does not shorten the list. It returns the new length — the only thing that says where the answer stops. Read `numbers[0]` up to `numbers[length - 1]`.",
    "ref": "L08 notes, section 4.",
    "code": ""
  },
  {
    "id": "g-l08-02",
    "lesson": "L08",
    "src": "gen",
    "topic": "Two pointers pair",
    "prompt": "`find_pair_sorted([1, 3, 4, 6, 9], 7)` — what does the two-pointer function return?",
    "options": [
      "`(1, 6)`",
      "`(3, 4)`",
      "`None`",
      "`(0, 3)`"
    ],
    "answer": 0,
    "exp": "`left=0, right=4`: `1 + 9 = 10`, too big, so `right` goes down to 3. `1 + 6 = 7`, found: `(1, 6)`. `(3, 4)` is also 7, but the walk finds `(1, 6)` first. The function returns values, not positions.",
    "ref": "L08 notes, section 5.",
    "code": ""
  },
  {
    "id": "l09-28",
    "lesson": "L08",
    "src": "l09",
    "topic": "Two Pointers",
    "prompt": "`remove_value` is the function from the L08 notes. What are the first two items of\n`numbers` after this code?\n\n```python\nnumbers = [2, 9, 2, 4]\nlength = remove_value(numbers, 2)\n```",
    "options": [
      "`2, 9`",
      "`4, 9`",
      "`2, 2`",
      "`9, 4`"
    ],
    "answer": 3,
    "exp": " `fast` reads every value. Each value that is not `2` is copied to position `slow`,\nthen `slow` moves on. `9` goes to position 0 and `4` goes to position 1. `length` is `2`:\nthe answer is `numbers[0]` and `numbers[1]`. The kept values stay in their order.",
    "ref": "L09 notes, section 10.",
    "code": ""
  },
  {
    "id": "l09-29",
    "lesson": "L08",
    "src": "l09",
    "topic": "Two Pointers",
    "prompt": "`find_pair_sorted` is the function from the L08 notes. What does this code print?\n\n```python\nprint(find_pair_sorted([1, 3, 4, 6, 9], 7))\n```",
    "options": [
      "`(1, 6)`",
      "`(3, 4)`",
      "`None`",
      "`(0, 3)`"
    ],
    "answer": 0,
    "exp": "| `left` | `right` | Values | Sum | Move |\n| --- | --- | --- | --- | --- |\n| 0 | 4 | 1 + 9 | 10 | too big: `right` down |\n| 0 | 3 | 1 + 6 | 7 | found |\n\n`3 + 4` is also 7, but the walk finds `(1, 6)` first. D gives positions: the function\ngives back **values**.",
    "ref": "L09 notes, section 10.",
    "code": ""
  },
  {
    "id": "l09-30",
    "lesson": "L08",
    "src": "l09",
    "topic": "Two Pointers",
    "prompt": "Two pointers uses two indexes, but it is still `O(n)`, not `O(n²)`. Why?",
    "options": [
      "The pointers jump over half of the list on each turn",
      "The list is always sorted",
      "Each turn moves at least one pointer, and each pointer moves one way only",
      "Python runs the two pointers at the same time"
    ],
    "answer": 2,
    "exp": " `left` only goes up and `right` only goes down. Together they cross the `n`\npositions once, so the loop runs at most `n` turns. A describes binary search, which is\n`O(log n)`.",
    "ref": "L09 notes, section 10.",
    "code": ""
  },
  {
    "id": "g-l10-01",
    "lesson": "L10",
    "src": "gen",
    "topic": "LIFO",
    "prompt": "Which rule does a stack follow?",
    "options": [
      "FIFO: first in, first out.",
      "LIFO: last in, first out.",
      "FILO: first in, last out.",
      "Random order."
    ],
    "answer": 1,
    "exp": "A stack is last in, first out (LIFO): the item added last is the one taken off first. A queue is the opposite: FIFO.",
    "ref": "L10 notes, section 1.",
    "code": ""
  },
  {
    "id": "g-l10-02",
    "lesson": "L10",
    "src": "gen",
    "topic": "Stack order",
    "prompt": "What does this code print?\n```python\nplates = []\nplates.append(\"blue\")\nplates.append(\"red\")\nplates.append(\"green\")\nprint(plates.pop())\nprint(plates.pop())\n```",
    "options": [
      "`green` then `red`",
      "`blue` then `red`",
      "`green` then `blue`",
      "`red` then `green`"
    ],
    "answer": 0,
    "exp": "Push `blue`, `red`, `green`. `pop()` returns the one pushed last: `green`, then `red`. A stack hands things back in the opposite order they went in.",
    "ref": "L10 notes, section 1.",
    "code": ""
  },
  {
    "id": "g-l10-03",
    "lesson": "L10",
    "src": "gen",
    "topic": "Peek vs pop",
    "prompt": "`history` is a stack. Which line looks at the top item **and leaves it there**?",
    "options": [
      "`history.pop()`",
      "`history[-1]`",
      "`history[0]`",
      "`history.append(x)`"
    ],
    "answer": 1,
    "exp": "`[-1]` is peek: it reads the top and changes nothing. `pop()` removes the top item. `[0]` is the bottom. `append` adds an item.",
    "ref": "L10 notes, section 2.",
    "code": ""
  },
  {
    "id": "g-l10-04",
    "lesson": "L10",
    "src": "gen",
    "topic": "Empty stack",
    "prompt": "`plates` is an empty list used as a stack. What does `plates.pop()` do?",
    "options": [
      "Returns `None`.",
      "Returns `0`.",
      "Raises `IndexError`.",
      "Returns an empty list."
    ],
    "answer": 2,
    "exp": "Popping an empty stack raises `IndexError: pop from empty list`. That is the right behaviour: an empty stack has no top item, so there is no answer to give back. Check `len(items) > 0` first when the stack might be empty.",
    "ref": "L10 notes, section 2.",
    "code": ""
  },
  {
    "id": "g-l10-05",
    "lesson": "L10",
    "src": "gen",
    "topic": "Stack top at the end",
    "prompt": "A stack is built on a list. Why is the **end** of the list the top?",
    "options": [
      "The end is `O(1)`: `append` and `pop()` touch nothing else. The front is `O(n)`.",
      "The end is where Python stores the biggest item.",
      "The front of a list cannot be read.",
      "It does not matter which end you choose."
    ],
    "answer": 0,
    "exp": "The top is the end of the list, where `append` and `pop()` are `O(1)` — nothing else moves. If the top were position 0, every push and pop would shift all `n` items: `O(n)` each, and `O(n²)` for the whole job.",
    "ref": "L10 notes, section 2, \"The other end is slow\".",
    "code": ""
  },
  {
    "id": "g-l10-06",
    "lesson": "L10",
    "src": "gen",
    "topic": "Bracket matching",
    "prompt": "Which text of round brackets is **not** balanced?",
    "options": [
      "`(())`",
      "`()()`",
      "`(()`",
      "`(()())`"
    ],
    "answer": 2,
    "exp": "`(()` has one `(` left on the stack when the text ends. No comparison fails during the loop, so only a check **after** the loop catches it. The others all end with an empty stack.",
    "ref": "L10 notes, section 3.",
    "code": ""
  },
  {
    "id": "g-l10-07",
    "lesson": "L10",
    "src": "gen",
    "topic": "round_balanced",
    "prompt": "What does this code print?\n```python\ndef round_balanced(text):\n    stack = []\n    for character in text:\n        if character == \"(\":\n            stack.append(character)\n        elif len(stack) == 0:\n            return False\n        else:\n            stack.pop()\n    return len(stack) == 0\n\nprint(round_balanced(\"())\"))\n```",
    "options": [
      "`True`",
      "`False`",
      "`None`",
      "An `IndexError`"
    ],
    "answer": 1,
    "exp": "`(` is pushed; the first `)` pops it; the second `)` finds an empty stack, so the `elif` returns `False` before any pop on an empty stack. `())` is not balanced.",
    "ref": "L10 notes, section 3.",
    "code": ""
  },
  {
    "id": "g-l10-08",
    "lesson": "L10",
    "src": "gen",
    "topic": "Traceback",
    "prompt": "Your program crashes and Python prints a traceback. Which frame is printed **first**, at the top of the screen?",
    "options": [
      "The frame that was running when the error happened.",
      "The frame of the cell's own code — the one called first.",
      "The line with the error message.",
      "There is no rule."
    ],
    "answer": 1,
    "exp": "The traceback is the call stack printed upside down: the frame called first (the cell's own code) is at the bottom of the call stack but printed first, at the top of the screen. Read a traceback from the **bottom** of the screen: what went wrong, then where, then who called it.",
    "ref": "L10 notes, section 4.",
    "code": ""
  },
  {
    "id": "g-l10-09",
    "lesson": "L10",
    "src": "gen",
    "topic": "When to use a stack",
    "prompt": "A stack is the right structure when...",
    "options": [
      "...items must come back out in the opposite order they went in.",
      "...the oldest item must be served first.",
      "...you need to read positions in the middle often.",
      "...items must stay in the order they arrived."
    ],
    "answer": 0,
    "exp": "A stack reverses what you put into it (LIFO). \"Oldest first\" and \"keep the order\" describe a queue (FIFO), and reading the middle is a list's strength, not a stack's job.",
    "ref": "L10 notes, sections 1 and 3.",
    "code": ""
  },
  {
    "id": "g-l10-10",
    "lesson": "L10",
    "src": "gen",
    "topic": "Slow stack",
    "prompt": "You build a stack with `insert(0, x)` for push and `pop(0)` for pop. It gives the right answers. What is wrong?",
    "options": [
      "Nothing — it is as fast as a normal stack.",
      "Every operation is `O(n)`, so the whole job is `O(n²)`.",
      "It returns `None` instead of the item.",
      "It does not follow LIFO."
    ],
    "answer": 1,
    "exp": "The answers are right, but `insert(0, x)` and `pop(0)` shift every item, so each is `O(n)`. Push `n` items and pop them all: `O(n²)` instead of `O(n)`. No test tells you — you must read your own bound.",
    "ref": "L10 notes, section 2, \"The other end is slow\".",
    "code": ""
  },
  {
    "id": "l11-01",
    "lesson": "L11",
    "src": "l11",
    "topic": "Queues",
    "prompt": "A printer must print the documents in the order they were sent. Which structure does it\nneed, and which rule does that structure follow?",
    "options": [
      "A stack, because it follows LIFO: last in, first out.",
      "A stack, because it follows FIFO: first in, first out.",
      "A queue, because it follows LIFO: last in, first out.",
      "A queue, because it follows FIFO: first in, first out."
    ],
    "answer": 3,
    "exp": " The document that has waited longest must come out first: first in, first out. That\nis a queue. A stack follows LIFO, so it gives back the newest document first: a page sent\nearly could wait for ever. B and C mix the two rules: a stack is LIFO, and a queue is FIFO.",
    "ref": "sections 1 and 5 of `L11-notes.md`.",
    "code": ""
  },
  {
    "id": "l11-02",
    "lesson": "L11",
    "src": "l11",
    "topic": "Queues",
    "prompt": "What does this code print?\n\n```python\nstack = []\nline = deque()\nfor letter in [\"a\", \"b\", \"c\"]:\n    stack.append(letter)\n    line.append(letter)\nprint(stack.pop(), line.popleft())\n```",
    "options": [
      "`a a`",
      "`c c`",
      "`c a`",
      "`a c`"
    ],
    "answer": 2,
    "exp": " Both hold `a`, `b`, `c`, in that order. The stack gives back the item that went in\n**last**: `c`. The queue gives back the item that went in **first**: `a`. A stack reverses\nthe order, and a queue keeps it. A treats the stack as a queue, B treats the queue as a\nstack, and D swaps the two.",
    "ref": "section 1 of `L11-notes.md`, \"The same two operations, the opposite end\".",
    "code": ""
  },
  {
    "id": "l11-03",
    "lesson": "L11",
    "src": "l11",
    "topic": "Queues",
    "prompt": "`waiting` is a queue. Which line looks at the **front** item, and leaves it in the queue?",
    "options": [
      "`waiting[0]`",
      "`waiting.popleft()`",
      "`waiting.pop()`",
      "`waiting[-1]`"
    ],
    "answer": 0,
    "exp": " `waiting[0]` reads the front and changes nothing: it is the **front** operation. B\nis **dequeue**: it gives back the front item, but it also takes it away. C takes the\n**back** item away. D reads the back item, the one that joined last.",
    "ref": "sections 1 and 3 of `L11-notes.md`.",
    "code": ""
  },
  {
    "id": "l11-04",
    "lesson": "L11",
    "src": "l11",
    "topic": "Queues",
    "prompt": "A list holds 6 names. You call `pop(0)` once. How many names move one place to the left?",
    "options": [
      "1",
      "6",
      "0",
      "5"
    ],
    "answer": 3,
    "exp": " A list is one block with no gaps. The name at position 0 leaves, and the 5 names\nbehind it each move one place left to close the hole. A moves only the next name. B counts\nthe removed name too: it goes out of the list, it does not move. C is what happens with\n`popleft()` on a `deque`, not with `pop(0)` on a list.",
    "ref": "section 2 of `L11-notes.md`, \"Why the front is expensive\".",
    "code": ""
  },
  {
    "id": "l11-05",
    "lesson": "L11",
    "src": "l11",
    "topic": "Queues",
    "prompt": "A queue is built on a list: people join with `append`, and they are served with `pop(0)`.\nCount one **step** for each person removed, and one step for each person who shifts. How\nmany steps does it take to serve a line of 5 people, one at a time, until nobody is left?",
    "options": [
      "5",
      "15",
      "10",
      "25"
    ],
    "answer": 1,
    "exp": " Serving the 1st person takes 1 removal and 4 shifts: 5 steps. Then 4, 3, 2 and 1\nsteps. `5 + 4 + 3 + 2 + 1 = 15`. This is `n x (n + 1) / 2`, so it is `O(n²)`. A counts the\nremovals only. C is the sum for a line of 4. D is `5 x 5`.",
    "ref": "section 2 of `L11-notes.md`, \"Serving the whole line is `O(n²)`\".",
    "code": ""
  },
  {
    "id": "l11-06",
    "lesson": "L11",
    "src": "l11",
    "topic": "Queues",
    "prompt": "A list is a good stack, but a slow queue. Why?",
    "options": [
      "A stack uses one end, and the end of a list is cheap. A queue needs both",
      "A list can only hold one kind of item.",
      "A queue needs more memory than a stack.",
      "`append` is `O(n)` on a list."
    ],
    "answer": 0,
    "exp": " A stack puts its top at the end of the list, where `append` and `pop()` are `O(1)`.\nA queue joins at one end and leaves from the other, and one of those is the front. B is\nwrong: a list can hold any items. C is wrong: both hold the same `n` items. D is wrong:\n`append` is `O(1)`, it is `pop(0)` that is slow.",
    "ref": "section 2 of `L11-notes.md`, \"Why the stack had no problem\".",
    "code": ""
  },
  {
    "id": "l11-07",
    "lesson": "L11",
    "src": "l11",
    "topic": "Queues",
    "prompt": "What does this code print?\n\n```python\nline = deque([\"Ana\", \"Bo\", \"Cal\"])\nline.append(\"Dee\")\nline.append(line.popleft())\nprint(line.popleft(), line.pop(), len(line))\n```",
    "options": [
      "`Ana Dee 2`",
      "`Bo Ana 3`",
      "`Bo Ana 2`",
      "`Ana Bo 2`"
    ],
    "answer": 2,
    "exp": " After `append(\"Dee\")`, the queue is `Ana Bo Cal Dee`. The next line takes `Ana`\nfrom the front and puts her at the back: `Bo Cal Dee Ana`. Then `popleft()` takes the\nfront, `Bo`, and `pop()` takes the back, `Ana`. `Cal` and `Dee` are left: 2 names. A\nforgets the line that sends `Ana` to the back. B forgets that `pop()` removes a name. D\nswaps `popleft()` and `pop()`.",
    "ref": "section 3 of `L11-notes.md`, \"Front to back, in one turn\".",
    "code": ""
  },
  {
    "id": "l11-08",
    "lesson": "L11",
    "src": "l11",
    "topic": "Queues",
    "prompt": "In a new notebook, nothing has run yet. This cell stops with\n`NameError: name 'deque' is not defined`:\n\n```python\nimport collections\nline = deque()\n```\n\nWhich change fixes it?",
    "options": [
      "Run the cell a second time.",
      "Change the second line to `line = collections.deque()`.",
      "Change the first line to `import deque`.",
      "Change the second line to `line = deque.collections()`."
    ],
    "answer": 1,
    "exp": " `import collections` gives your code only the name `collections`. `deque` is a tool\ninside it, so you write `collections.deque()`. The other fix is to change the first line\nto `from collections import deque`. A is wrong: running it again gives the same error. C is\nwrong: `deque` is not a module, it is inside the module `collections`. D puts the two names\nthe wrong way round.",
    "ref": "section 3 of `L11-notes.md`, \"How an import works\".",
    "code": ""
  },
  {
    "id": "l11-09",
    "lesson": "L11",
    "src": "l11",
    "topic": "Queues",
    "prompt": "`letters` is a `deque` that holds `n` letters. Which line is `O(n)`?",
    "options": [
      "`letters.popleft()`",
      "`letters.appendleft(\"z\")`",
      "`letters[-1]`",
      "`letters[len(letters) // 2]`"
    ],
    "answer": 3,
    "exp": " `len(letters) // 2` is the middle position. A `deque` is a chain of blocks, so to\nreach the middle it walks along the chain: `O(n)`. A and B work at the front, and C reads\nthe back: a `deque` is `O(1)` at both ends. A `deque` gives up `O(1)` indexing to get\n`O(1)` at both ends.",
    "ref": "section 4 of `L11-notes.md`, \"What a `deque` gives up\".",
    "code": ""
  },
  {
    "id": "l11-10",
    "lesson": "L11",
    "src": "l11",
    "topic": "Queues",
    "prompt": "Which job should use a `deque`, not a list?",
    "options": [
      "Customers join at the back, and they are served from the front.",
      "A stack: you add and remove at the back only.",
      "A program reads the scores at many different positions, all over the",
      "A program reads every score once, from the first to the last."
    ],
    "answer": 0,
    "exp": " That is a queue: it needs the front, and only a `deque` is `O(1)` there. B is a\nstack: a list is already `O(1)` at the back. C needs positions in the middle: a list is\n`O(1)` there, and a `deque` is `O(n)`. D walks once from the start: a list does it in\n`O(n)`, and nothing is removed from the front.",
    "ref": "section 4 of `L11-notes.md`, \"So which one do you use?\".",
    "code": ""
  }
];
