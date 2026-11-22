import json
from pathlib import Path

import pandas as pd


DATA_DIR = Path(__file__).resolve().parent
OUTPUT_FILE = DATA_DIR / "dashboard_data.json"

TABLE_FILES = {
    "petitioners": "petitoners_table - Sheet1 (1).csv",
    "locations": "locations_table - Sheet1 (4).csv",
    "receivers": "receiver_table - Sheet1 (2).csv",
}


def main():
    data = {
        table: json.loads(
            pd.read_csv(DATA_DIR / filename).to_json(
                orient="records", force_ascii=False
            )
        )
        for table, filename in TABLE_FILES.items()
    }

    OUTPUT_FILE.write_text(
        json.dumps(data, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"Exported dashboard data to {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
