// DSA1 lesson review content — edit THIS file to add or change review notes.
// Each lesson: points (what to remember) and mistakes (traps to avoid).
window.LESSON_CONTENT = {
  "L01": {
    "points": [
      "An **algorithm** is a method: steps anyone can follow exactly, that always finish, and that are correct for every valid input. It is **not code** — code is one way to write it down.",
      "A **data structure** is a way of organising data so we can use it efficiently. Same books, different arrangement, very different work.",
      "Guessing 1–1,000,000: 1,000,000 guesses one at a time, or about 20 by halving the range. Same game, ~50,000× less work.",
      "The two depend on each other: halving works because data is ordered; ordering is worth the work because it lets you halve."
    ],
    "mistakes": [
      "Thinking an algorithm must be written in a programming language.",
      "\"My example works\" does not mean correct for every valid input."
    ]
  },
  "L02": {
    "points": [
      "Five runtimes, slowest to fastest growth: `O(1)` < `O(log n)` < `O(n)` < `O(n log n)` < `O(n²)`.",
      "Simplify a count: drop constant factors, keep the fastest-growing term. `3n + 10` → `O(n)`, `n² + n` → `O(n²)`.",
      "Sequential loops **add**; nested loops **multiply**. Count the **turns**, not the loops on the page.",
      "Time and space are separate questions. `total` is `O(n)` time, `O(1)` space; `double_all` is `O(n)` time, `O(n)` space.",
      "No case named → **worst case** (a promise the code is never slower)."
    ],
    "mistakes": [
      "Reading `O(n)` as \"n seconds\" — Big-O has no unit.",
      "Thinking `O(2n)` differs from `O(n)`.",
      "Counting loops on the page instead of turns."
    ]
  },
  "L03": {
    "points": [
      "`items[i]` is `O(1)`: one address calculation, no search.",
      "The **end** is cheap (`append` / `pop()` `O(1)`); the **front** is expensive (`insert(0,x)` / `pop(0)` `O(n)`).",
      "`in` / `.index()` / `.count()` / `.remove()` search, so `O(n)`. A slice `items[a:b]` is `O(b-a)`.",
      "`b = a` is a second name, not a copy. `a[:]` copies.",
      "In place vs a new list: decide, and say which."
    ],
    "mistakes": [
      "`numbers = numbers.append(x)` stores `None`.",
      "Removing items while looping over the list skips items.",
      "`insert(0, x)` in a loop turns `O(n)` into `O(n²)`.",
      "Confusing `len(items)` with the last position (`len-1` or `-1`)."
    ]
  },
  "L04": {
    "points": [
      "A string is **immutable**: `word[0] = \"x\"` is a `TypeError`. `+` builds a new string.",
      "String methods give back a new value and change nothing; `append` is the opposite (changes the list, gives back `None`).",
      "Never build a string with `+` in a loop: `O(n²)`. Collect the pieces in a list, then `\"\".join(...)` once: `O(n)`.",
      "`split()` cuts a string into a list of words; `join` puts them back. `find` returns `-1` when not found — compare with `!= -1`.",
      "`text[i]` and `len(text)` are `O(1)`; anything reading the whole string is `O(n)`."
    ],
    "mistakes": [
      "Losing the result of a string method: `text.upper()` alone.",
      "`if text.find(\"x\"):` — `0` counts as false, `-1` as true.",
      "`text = text[1:]` in a loop → `O(n²)`."
    ]
  },
  "L05": {
    "points": [
      "**Selection sort**: find the smallest in the unsorted part, swap it into the next position. At most `n-1` swaps.",
      "**Bubble sort**: compare neighbours, swap if the left is bigger. After one pass the largest value is in place.",
      "Both make `n(n-1)/2` comparisons: `O(n²)`.",
      "Bubble with an **early exit** is `O(n)` best case on a sorted list. Selection sort has no early exit.",
      "`return` gives a value back; `print` only shows it. An in-place sort gives back `None`."
    ],
    "mistakes": [
      "A two-line swap loses a value. Use `a[i], a[j] = a[j], a[i]`.",
      "`numbers = bubble_sort(numbers)` stores `None`.",
      "`swapped` set once before the loop instead of at the start of every pass.",
      "Inner bound should be `range(n-1-i)`, not `range(n-1)`."
    ]
  },
  "L06": {
    "points": [
      "**Insertion sort**: take the key, slide it left past bigger items, place it at `j + 1`. It **shifts**, it does not swap.",
      "Best case `O(n)` on sorted data, worst case `O(n²)` on reversed data.",
      "**Stable** = equal items keep their order. Insertion and bubble sort are stable; selection sort is not.",
      "`sorted()` returns a new list, `O(n log n)`, stable. `.sort()` sorts in place and returns `None`.",
      "`min()` / `max()` give back a **value**, not a position."
    ],
    "mistakes": [
      "Not saving the key before the first shift.",
      "Putting the key back at `j` instead of `j + 1`.",
      "Dropping the `j >= 0` guard → `IndexError`.",
      "Using `>=` instead of `>` (loses stability)."
    ]
  },
  "L07": {
    "points": [
      "**Linear search**: `return i` sits inside the loop (early exit); `return -1` sits after the loop. `O(n)`.",
      "`-1` means \"not found\"; `0` is a real position. Test `if position != -1:` before using it.",
      "**Binary search**: check the middle, throw away half. `O(log n)`. The list **must be sorted**.",
      "Loop rules: `while low <= high`; `low = mid + 1` / `high = mid - 1`; something changes every turn.",
      "Sort once, search many: one search → scan; many searches → sort first."
    ],
    "mistakes": [
      "`return -1` inside the loop (gives up after position 0).",
      "`items[-1]` is the last item — no error.",
      "`while low < high` skips the last item.",
      "`low = mid` (not `mid + 1`) → infinite loop."
    ]
  },
  "L08": {
    "points": [
      "**Two pointers** = two indexes moved by a rule inside one loop.",
      "From both ends: `while left < right`, for palindromes, reversing in place, and a pair in a sorted list.",
      "Slow & fast: `fast` reads every value, `slow` marks where the next kept value goes. Returns the **new length**.",
      "Two pointers is `O(n)`: every turn moves a pointer, each moves one way only.",
      "A pair in a sorted list is `O(n)`; on an unsorted list, sort first → `O(n log n)`."
    ],
    "mistakes": [
      "A branch that moves nothing → infinite loop.",
      "`while left <= right` compares the same item with itself.",
      "Comparing indexes (`left != right`) instead of values (`word[left] != word[right]`).",
      "Sorting inside the loop."
    ]
  },
  "L10": {
    "points": [
      "**LIFO**: last in, first out. Add and remove at one end only — the **top**.",
      "Five operations, all `O(1)`: push=`append`, pop=`pop()`, peek=`[-1]`, is_empty=`len==0`, size=`len`.",
      "The top is the **end** of the list. `insert(0,x)` / `pop(0)` would be `O(n)`.",
      "Popping an empty stack raises `IndexError` (correct). Check `len > 0` first.",
      "Bracket matching fails three ways: closer vs wrong top, closer on empty stack, leftover opener at the end.",
      "The call stack holds one frame per unfinished call. A traceback is the call stack — read it **bottom-up**."
    ],
    "mistakes": [
      "Forgetting the end-of-text check (leftover `(`).",
      "`pop` vs `peek` — `pop` takes the item away.",
      "Using `insert(0,x)` / `pop(0)` for a stack."
    ]
  },
  "L11": {
    "points": [
      "**FIFO**: first in, first out. Add at the back, remove from the front. It **keeps** the order (fairness).",
      "A list is a slow queue: `pop(0)` is `O(n)`, so serving `n` people is `O(n²)`.",
      "`deque` is `O(1)` at **both** ends: `append` + `popleft()`. Nothing shifts.",
      "A `deque` gives up `O(1)` indexing: the middle is `O(n)`.",
      "Load it with `from collections import deque`."
    ],
    "mistakes": [
      "Building a queue on a list (works, but `O(n²)`).",
      "Forgetting the import → `NameError`.",
      "`popleft()` (front) vs `pop()` (back) — opposite ends.",
      "Indexing a `deque` in a loop → `O(n²)`."
    ]
  }
};
