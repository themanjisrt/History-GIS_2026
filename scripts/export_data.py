import json
from pathlib import Path

import pandas as pd


PROJECT_DIR = Path(__file__).resolve().parents[1]
SOURCE_DIR = PROJECT_DIR / "data" / "source"
OUTPUT_FILE = PROJECT_DIR / "data" / "processed" / "dashboard_data.json"

TABLE_FILES = {
    "petitioners": "petitioners.csv",
    "locations": "locations.csv",
    "receivers": "receivers.csv",
}


def main():
    data = {
        table: json.loads(
            pd.read_csv(SOURCE_DIR / filename).to_json(
                orient="records", force_ascii=False
            )
        )
        for table, filename in TABLE_FILES.items()
    }

    for petitioner in data["petitioners"]:
        year = petitioner["year"]
        if isinstance(year, str) and year.isdecimal():
            petitioner["year"] = int(year)

    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_FILE.write_text(
        json.dumps(data, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"Exported dashboard data to {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
