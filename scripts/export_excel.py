from pathlib import Path

import pandas as pd


PROJECT_DIR = Path(__file__).resolve().parents[1]
CSV_DIRS = (
    PROJECT_DIR / "data" / "source",
    PROJECT_DIR / "data" / "processed",
)
OUTPUT_DIR = PROJECT_DIR / "data" / "exports" / "excel"


def main():
    csv_files = sorted(
        csv_file
        for directory in CSV_DIRS
        for csv_file in directory.glob("*.csv")
    )
    if not csv_files:
        raise FileNotFoundError("No CSV files found in the source or processed data folders.")

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    for csv_file in csv_files:
        dataframe = pd.read_csv(csv_file)
        excel_file = OUTPUT_DIR / f"{csv_file.stem}.xlsx"
        dataframe.to_excel(excel_file, index=False, engine="openpyxl")
        print(f"Exported {csv_file.name} to {excel_file}")


if __name__ == "__main__":
    main()
