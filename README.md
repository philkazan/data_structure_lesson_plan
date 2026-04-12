# 🗺️ Beginner DSA Lesson Plan
**Duration:** ~3 months | **Pace:** 1 topic per week

---

## Phase 1 — Foundations (Weeks 1–3)

### Week 1: Big O Notation
- What is time and space complexity?
- O(1), O(n), O(n²), O(log n) — learn to recognize them by sight
- Practice: estimate the complexity of loops you've already written
- 🛠️ **Project:** Build a simple benchmarking script that runs different search/loop implementations and prints how long each takes — visually confirm why O(n²) slows down fast

### Week 2: Arrays
- How they work in memory, indexing, resizing
- Common operations: traversal, insertion, deletion, searching
- Practice problems: reverse an array, find the max, two-sum
- 🛠️ **Project:** Build a command-line contacts list — add, remove, and search for contacts stored in an array

### Week 3: Strings
- Strings as character arrays, immutability
- Common patterns: palindrome check, anagram detection, sliding window intro
- Practice: 5–10 easy string problems
- 🛠️ **Project:** Build a text analyzer — input any paragraph and output word count, most frequent word, and whether any word is a palindrome

---

## Phase 2 — Core Data Structures (Weeks 4–7)

### Week 4: Linked Lists
- Singly vs. doubly linked, nodes and pointers
- Traversal, insertion, deletion
- Practice: reverse a linked list, detect a cycle
- 🛠️ **Project:** Build a music playlist — songs are nodes in a linked list, support play next, play previous, and insert a song at any position

### Week 5: Stacks & Queues
- Stack (LIFO) and Queue (FIFO) — when and why to use each
- Implementation using arrays or linked lists
- Practice: valid parentheses, implement a queue using stacks
- 🛠️ **Project:** Build a browser history simulator — back and forward buttons using a stack, and a separate queue to manage a download queue

### Week 6: Hash Maps & Sets
- How hashing works, collision handling (conceptually)
- O(1) lookups — why this matters
- Practice: two-sum with a hash map, frequency counting, grouping anagrams
- 🛠️ **Project:** Build a word frequency counter for a book or article — input a block of text and output a ranked list of the most common words, excluding filler words like "the" and "and"

### Week 7: Trees (Binary Trees)
- Nodes, root, leaves, height
- Traversals: in-order, pre-order, post-order
- Practice: max depth of a tree, check if a tree is symmetric
- 🛠️ **Project:** Build a file system explorer — represent a folder structure as a tree, and write functions to print all files, find a file by name, and calculate total depth

---

## Phase 3 — Core Algorithms (Weeks 8–11)

### Week 8: Recursion
- Base cases, the call stack, thinking recursively
- Practice: factorial, fibonacci, flatten a nested list
- 🛠️ **Project:** Build a maze solver — represent a maze as a 2D grid and use recursion to find a path from start to finish, printing the solution path

### Week 9: Binary Search
- Why sorted data enables O(log n) search
- Practice: classic binary search, find first/last position
- 🛠️ **Project:** Build a "guess the number" game where the computer uses binary search to guess a number you're thinking of — it should always find it in at most log₂(n) guesses

### Week 10: Sorting Algorithms
- Bubble sort (learn it, then forget it), merge sort, quick sort conceptually
- Know which sorting algorithm your language uses natively and why
- Practice: sort by custom comparator, understand stable vs. unstable sorts
- 🛠️ **Project:** Build a leaderboard sorter — given a list of players and scores, implement your own merge sort to rank them, then compare its speed to your language's built-in sort

### Week 11: Intro to Graph Thinking
- Graphs as nodes + edges, adjacency lists
- BFS and DFS — two ways to explore
- Practice: number of islands, find if path exists
- 🛠️ **Project:** Build a social network explorer — represent friends as a graph and write BFS to find the shortest connection between two people ("6 degrees of separation")

---

## 📌 How to Use Each Week
1. **Watch or read** a short explanation (30 min) — NeetCode, CS50, or a single article
2. **Solve 2–3 problems** on LeetCode or HackerRank (easy level only)
3. **Build the week's project** — keep it small, focus on the concept
4. **Review your solution** against others — what did cleaner solutions do differently?

---

## 🔧 Recommended Resources
- **NeetCode.io** — excellent free video explanations tied to problems
- **LeetCode** — filter by topic + easy difficulty
- **"Grokking Algorithms"** by Aditya Bhargava — the most beginner-friendly DSA book, illustrated
