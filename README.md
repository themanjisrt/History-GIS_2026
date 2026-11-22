# History-GIS_2026
An interactive **Historical Geographic Information System (HGIS)** web portal and relational spatial database built to map, analyze, and visualize administrative decrees from the **Ottoman Complaints Register (*1 Numaralı Şikâyet Defteri*)** issued during 1059 Hijri (1649–1650 CE).

This digital humanities project connects central imperial directives issued by the **Divan-ı Hümayun** (Imperial Council) to their specific regional, provincial, and judicial destinations across Rumeli, Western Anatolia, the Levant, and East/South-East Anatolia.

```markdown
# 🏛️ Ottoman HGIS: Imperial Decrees Spatial Explorer (1649–1650 CE / 1059 A.H.)

---

## 🌟 Key Features

- 🗺️ **Interactive Spatial Visualization**: Built with **Leaflet.js** and CartoDB basemaps to visualize historical locations with precise WGS84 geographic coordinates.
- 🔥 **Density Heatmaps**: Integrated kernel density spatial heatmaps highlighting petitioning clusters across Edirne, Bursa, Western Anatolia, and Syria/Aleppo.
- 🔍 **Dynamic Filtering & Search**: Sift through decrees by **Complaint Category** (*Extortion & Misconduct, Debt, Official Appointments, Property Disputes, Resettlement*), **Eyalet/Province**, or **Petitioner Status**.
- 📊 **Analytical KPI Dashboard**: Real-time statistical metrics displaying decree distributions, recipient officer titles (Kadıs, Pashas, Viziers), and petitioner demographics (male, female, collective groups).
- 💾 **Relational HGIS Architecture**: Standardized SQLite database schema linking petitioners, administrative receivers, geographic locations, financial claim amounts, and defendant groups.

---

## 📐 Relational Database Schema

The project structure links five primary relational entities:

1. **`petitoners_table`**: Legal status, gender (`male`, `female`, `group`), standardized complaint type, and Hijri date.
2. **`locations_table`**: Ottoman settlement names (`receiver_location`), modern geographic names (`location_name`), and decimal coordinates (`lat`, `long`).
3. **`receiver_table`**: Bureaucratic recipient titles (*Kadi*, *Pasha*, *Vizier*, *Bostancıbaşı*).
4. **`defendants_table`**: Alleged perpetrators or accused parties (*Local Elites*, *State Officials*, *Eşkıya*).
5. **`financials_table`**: Extortion, loan, and debt figures recorded in historical currencies (*Guruş*, *Akçe*).

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+), Leaflet.js
- **Backend**: Python 3.12, Flask, Pandas, SQLite3
- **Spatial Analytics**: GeoPandas, Matplotlib, Seaborn
- **Deployment**: Static GeoJSON rendering via GitHub Pages / Dynamic API via Flask


## 📜 Citation & Archival Source
Data transcribed and standardized from the **Presidency of State Archives (Devlet Arşivleri Başkanlığı)**: *1 Numaralı Şikâyet Defteri (1059 / 1649–1650)*.
```

---

🔍 **Need any adjustments?** If you'd like to add specific license info (e.g., MIT License) or a section on how to contribute data, let me know!
