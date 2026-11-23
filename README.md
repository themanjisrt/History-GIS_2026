# History-GIS_2026

An interactive **Historical Geographic Information System (HGIS)** web portal and relational spatial database built to map, analyze, and visualize administrative decrees from the **Ottoman Complaints Register (*1 Numaralı Şikâyet Defteri*)** issued during 1059 Hijri (1649–1650 CE).

This digital humanities project connects central imperial directives issued by the **Divan-ı Hümayun** (Imperial Council) to their specific regional, provincial, and judicial destinations across Rumeli, Western Anatolia, the Levant, and East/South-East Anatolia.

## 🏛️ Ottoman HGIS: Imperial Decrees Spatial Explorer

### Key Features

- **Interactive spatial visualization** built with Leaflet.js and CartoDB basemaps.
- **Density heatmaps** highlighting petitioning clusters across Edirne, Bursa, Western Anatolia, and Syria/Aleppo.
- **Dynamic filtering and search** by complaint category, eyalet/province, or petitioner status.
- **Analytical dashboard** for decree distributions, recipient titles, and petitioner demographics.
- **Relational HGIS architecture** linking petitioners, administrative receivers, geographic locations, financial claims, and defendant groups.

### Relational Database Schema

The project structure links five primary relational entities:

1. `petitoners_table`: Legal status, gender (`male`, `female`, `group`), complaint type, and Hijri date.
2. `locations_table`: Ottoman settlement names (`receiver_location`), modern geographic names (`location_name`), and decimal coordinates (`lat`, `long`).
3. `receiver_table`: Bureaucratic recipient titles (*Kadi*, *Pasha*, *Vizier*, *Bostancıbaşı*).
4. `defendants_table`: Alleged perpetrators or accused parties.
5. `financials_table`: Extortion, loan, and debt figures in historical currencies (*Guruş*, *Akçe*).

### Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript, Leaflet.js
- **Backend:** Python, Flask, Pandas, SQLite
- **Spatial analytics:** Matplotlib, Seaborn
- **Deployment:** Static hosting via GitHub Pages or the Flask development server

## Local Setup

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
python app.py
```

Open <http://127.0.0.1:5000> in a browser. The root-level `index.html` is retained for static hosting.

## Project Layout

- `data/source/`: Source CSV tables.
- `data/processed/`: Dashboard JSON, GIS CSV, and SQLite database.
- `assets/`: Generated charts.
- `scripts/`: Data export and analysis scripts.
- `archive/`: Preserved older dashboard HTML versions.

## Data Workflow

- Run `python scripts/export_data.py` to rebuild `data/processed/dashboard_data.json`.
- Run `python scripts/analyze.py` to rebuild the GIS CSV and SQLite database in `data/processed/`, and charts in `assets/`.

## Accessibility

- Use the decree list and expandable map table as text alternatives to the map.
- Open each chart's table to read its data without relying on color or graphics.
- The interface supports keyboard focus, announces filter and selection updates, and respects reduced-motion preferences.
- These improvements are not a legal compliance certification. Test with keyboard and screen-reader users and verify color contrast before public release.

## Citation & Archival Source

Data transcribed and standardized from the **Presidency of State Archives (Devlet Arşivleri Başkanlığı)**: *1 Numaralı Şikâyet Defteri (1059 / 1649–1650)*.
