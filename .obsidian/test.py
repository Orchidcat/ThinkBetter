import json
from pathlib import Path

for f in Path(".obsidian").rglob("*.json"):
    try:
        json.loads(f.read_text(encoding="utf-8-sig"))
    except Exception as e:
        print(f"\n异常文件：{f}")
        print(e)