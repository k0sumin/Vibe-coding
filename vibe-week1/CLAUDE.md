# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

This directory is a personal workspace, not a single cohesive project. It bundles several unrelated things together:

- **Root-level files** — standalone Python exercise scripts from a university course, "2022-1학기 파이썬프로그래밍" (Python Programming, Spring 2022), student ID 20221607.
- **`vibe-coding/`** — a separate, independent git repository containing a static HTML/CSS/JS starter page.
- **`vibe-week1/`** — currently empty.
- **`hello/`** — currently contains only a stray `CLAUDE.md` (no source files); its content actually describes the root-level Python scripts, not anything inside `hello/` itself. Treat it as orphaned rather than authoritative for that directory.

There is no unifying build system, dependency manifest, or test suite across the whole directory — treat each subproject independently.

## Overview

- 바이브 코딩 2주차 실습을 위한 레포지토리 프로젝트 저장소입니다.

## Root-level Python scripts

Standalone `.py` files, each an independent script written for a single class session or assignment. No shared entry point.

Run any script directly:
```
python <filename>.py
```
Many scripts call `input()` interactively (reading exam scores, phone numbers, names, etc.), so they expect to run in a terminal rather than being imported.

File naming:
- Date-named files (`20220310.py`, `20220317.py`, `20220414.py`, `study20220420.py`, ...) correspond to individual class sessions, in chronological order (March–June 2022).
- `20221607*.py` / `202216077.py` are exam/assignment submissions named after the student ID, per the professor's submission convention (see the academic-integrity header inside `20221607_1.py`).
- `.txt` files (`score.txt`, `foods.txt`, `1.txt`, `12345.txt`, `start.txt`) are plain-text data fixtures read by the scripts (e.g. lists of scores, stock codes, or I/O practice input) — not configuration.
- `first.py` is the earliest "hello world" script.

Code characteristics:
- Comments are in Korean and are frequently instructional notes-to-self (explaining language semantics like `//` vs `/`, mutable vs immutable types, `%` formatting) rather than documentation — preserve this style if editing rather than rewriting to English/docstring conventions.
- Many files contain large commented-out blocks representing alternate solution attempts or a reference solution kept alongside the student's own; both are intentional study history. Don't delete commented-out code when editing these files unless asked.
- Scripts are procedural/top-level (no `if __name__ == "__main__"` guards, minimal function/class use except where an exercise specifically calls for `def`/`class`).

## `vibe-coding/`

An independent git repository (has its own `.git`, no commits yet as of this writing) — do not treat it as part of the same version history as the rest of this directory. A minimal static web page:

- `index.html` — single page, Korean-language starter template ("동덕여자대학교 데이터사이언스전공").
- `css/style.css` — page styling.
- `js/main.js` — one click-handler (`alert`) on the `#clickMe` button.
- `images/` — currently empty.

No build tooling — open `index.html` directly or serve the folder with any static file server.
