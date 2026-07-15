# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal collection of standalone Python exercise scripts from a university course, "2022-1학기 파이썬프로그래밍" (Python Programming, Spring 2022 semester), student ID 20221607. This is not a software package or application — there is no shared entry point, no build system, no dependency manifest, and no test suite. Each `.py` file is an independent script written for a single class session or assignment.

## Running scripts

There is no build/lint/test tooling. Run any script directly:

```
python <filename>.py
```
Many scripts call `input()` interactively (reading exam scores, phone numbers, names, etc.), so they expect to be run in a terminal rather than imported.

## File naming and structure

- Files named by date (`20220310.py`, `20220317.py`, `20220414.py`, `study20220420.py`, ...) correspond to individual class sessions, in chronological order across the semester (March–June 2022).
- `20221607*.py` / `202216077.py` are exam/assignment submissions named after the student ID, per the professor's submission convention (see the academic-integrity header inside `20221607_1.py`).
- `.txt` files (`score.txt`, `foods.txt`, `1.txt`, `12345.txt`, `start.txt`) are plain-text data fixtures read by the scripts (e.g. lists of scores, stock codes, or lines used for I/O practice) — not configuration.
- `first.py` is the earliest "hello world" script.

## Code characteristics

- Comments are in Korean and are frequently instructional notes-to-self (explaining language semantics like `//` vs `/`, mutable vs immutable types, `%` formatting) rather than documentation — preserve this style if editing rather than rewriting to English/docstring conventions.
- Many files contain large commented-out blocks representing alternate solution attempts or the professor's reference solution alongside the student's own; both are kept side by side intentionally as study history. Don't delete commented-out code when editing these files unless asked — it's part of the learning record, not dead code to clean up.
- Scripts are procedural/top-level (no `if __name__ == "__main__"` guards, minimal function/class use except where an exercise specifically calls for `def`/`class`).
