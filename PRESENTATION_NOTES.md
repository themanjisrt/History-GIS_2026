# ArcGIS Pro Project Journal

## Project

**Ottoman HGIS:** mapping locations connected to Ottoman administrative decrees from 1649–1650.

## Journal entry — 23 November 2026

### Work completed

- Organized the original petitioner, location, and receiver data as CSV files in `data/source/`.
- Used Python and Pandas to connect records using `decree_id`.
- Created `data/processed/ottoman_decrees_gis_master.csv` for mapping. It has 75 location rows with latitude and longitude.
- Created a SQLite database with the original tables and a combined GIS table.
- Prepared JSON data for the web dashboard. Decree 57 is included.

### ArcGIS Pro status

The data is prepared for ArcGIS Pro, but this repository does not yet contain an ArcGIS Pro project (`.aprx`) or a file geodatabase. ArcGIS Pro map-making steps below are the next steps, not completed work. This project is currently being prepared on macOS; ArcGIS Pro must be opened on a Windows computer.

### Next ArcGIS Pro steps

1. Create a new ArcGIS Pro project and a file geodatabase.
2. Add `data/processed/ottoman_decrees_gis_master.csv` to the map.
3. Run **XY Table To Point**:
   - X Field: `long`
   - Y Field: `lat`
   - Coordinate System: **WGS 1984**
4. Save the output points in the file geodatabase.
5. Style the points by complaint subject and label them with `decree_id`.
6. Check that the 75 locations appear in the expected regions, then save the `.aprx` project.

## Code and files

- `scripts/analyze.py` joins the CSV tables and creates the GIS CSV, SQLite database, and charts.
- `scripts/export_data.py` converts the source CSVs into JSON for the web dashboard.
- `index.html` displays the interactive web map and dashboard.
- `app.py` serves the dashboard locally.
- `data/source/` holds the original CSVs; `data/processed/` holds generated data; `assets/` holds charts.

To rebuild the data and charts, run these commands from the project folder:

```bash
python scripts/export_data.py
python scripts/analyze.py
```

## Short presentation summary

> This project prepares Ottoman decree records for mapping. Python joins the petitioner, location, and receiver data by decree ID and creates a GIS-ready CSV with coordinates. In ArcGIS Pro, I can turn those coordinates into map points, symbolize them by complaint subject, and label them by decree number. The web dashboard provides an additional way to explore the same records.
