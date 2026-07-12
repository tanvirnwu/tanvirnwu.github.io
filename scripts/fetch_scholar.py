#!/usr/bin/env python3
"""Fetch Google Scholar citation metrics into _data/scholar.json.

Runs weekly in CI (.github/workflows/scholar-stats.yml). Exits non-zero on
any failure so the workflow skips the commit and keeps the last good data.
"""
import json
import sys
from datetime import date
from pathlib import Path

from scholarly import scholarly

AUTHOR_ID = "UvINe-sAAAAJ"
OUT = Path(__file__).resolve().parent.parent / "_data" / "scholar.json"


def main() -> int:
    author = scholarly.search_author_id(AUTHOR_ID)
    author = scholarly.fill(author, sections=["basics", "indices"])

    data = {
        "citations": author.get("citedby"),
        "h_index": author.get("hindex"),
        "i10_index": author.get("i10index"),
        "updated": date.today().isoformat(),
    }

    if data["citations"] is None:
        print("No citation data returned; refusing to overwrite.", file=sys.stderr)
        return 1

    OUT.write_text(json.dumps(data, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {OUT}: {data}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
