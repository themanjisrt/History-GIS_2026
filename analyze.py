### Python Veri İşleme Kodu

import numpy as np
import pandas as pd

# -----------------------------------------------------------------------------
# 1. VERİLERİN YÜKLENMESİ (DATA INGESTION)
# -----------------------------------------------------------------------------
# Dosya yollarınızı kendi çalışma dizininize göre güncelleyebilirsiniz:
pet_path = "petitoners_table - Sheet1 (1).csv"
loc_path = "locations_table - Sheet1 (4).csv"
rec_path = "receiver_table - Sheet1 (2).csv"

df_pet = pd.read_csv(pet_path)
df_loc = pd.read_csv(loc_path)
df_rec = pd.read_csv(rec_path)

print(
    f"Yüklendi: {len(df_pet)} Davacı, {len(df_loc)} Konum, {len(df_rec)} Alıcı kaydı."
)

# -----------------------------------------------------------------------------
# 2. İLİŞKİSEL BİRLEŞTİRME VE GRUPLAMA (RELATIONAL JOIN & AGGREGATION)
# -----------------------------------------------------------------------------
# Hüküm (decree_id) başına birden fazla alıcı (receiver) ve konum (location) düşebildiği için
# alıcıları hüküm bazında virgülle birleştirilmiş metin haline getiriyoruz:
rec_summary = (
    df_rec.groupby("decree_id")["receiver_title"]
    .apply(lambda titles: ", ".join(titles.dropna().unique()))
    .reset_index()
    .rename(columns={"receiver_title": "all_receivers"})
)

# Konum tablosunu davacı ve alıcı verileriyle birleştiriyoruz (Master GIS Table):
df_gis = df_loc.merge(df_pet, on="decree_id", how="left").merge(
    rec_summary, on="decree_id", how="left"
)

# Coordinates temizliği (Geçersiz lat/long değerlerini filtreleme)
df_gis = df_gis.dropna(subset=["lat", "long"])

# -----------------------------------------------------------------------------
# 3. İSTATİSTİKSEL ÖZETLER VE ANALİZ (STATISTICAL SUMMARIES)
# -----------------------------------------------------------------------------
print("\n--- EN ÇOK HÜKÜM ÇIKAN İLLER (Top 10 Locations) ---")
print(df_gis["location_name"].value_counts().head(10))

print("\n--- ŞİKÂYET KONULARININ DAĞILIMI (Complaint Subjects) ---")
print(df_pet["complaint_subject"].value_counts())

print("\n--- DAVACI CİNSİYET VE TOPLULUK DAĞILIMI (Gender Breakdown) ---")
print(df_pet["petitioner_gender"].value_counts())

# -----------------------------------------------------------------------------
# 4. ARCGIS PRO / QGIS İÇİN DIŞA AKTARIM (EXPORT FOR GIS & SQLITE)
# -----------------------------------------------------------------------------
# a) CSV Olarak Dışa Aktarma (ArcGIS Pro "XY Table to Point" aracı için)
df_gis.to_csv("ottoman_decrees_gis_master.csv", index=False, encoding="utf-8-sig")

# b) SQLite Veritabanı Olarak Kaydetme (İlişkisel Veritabanı Yapısı)
import sqlite3

with sqlite3.connect("ottoman_decrees_hgis.db") as conn:
    df_pet.to_sql("petitoners_table", conn, if_exists="replace", index=False)
    df_loc.to_sql("locations_table", conn, if_exists="replace", index=False)
    df_rec.to_sql("receiver_table", conn, if_exists="replace", index=False)
    df_gis.to_sql("gis_master_view", conn, if_exists="replace", index=False)

print(
    "\nİşlem tamamlandı! 'ottoman_decrees_gis_master.csv' ve 'ottoman_decrees_hgis.db' oluşturuldu."
)


### 1. Üretilen Görsel Analizler (Studio Panelinizde Açıldı)


### 2. Bu Grafikleri Python'da Üreten Tam Kod (VS Code / Jupyter Uyumlu)

import os
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import seaborn as sns

# 1. VERİLERİN YÜKLENMESİ
loc = pd.read_csv("locations_table - Sheet1 (4).csv")
pet = pd.read_csv("petitoners_table - Sheet1 (1).csv")
rec = pd.read_csv("receiver_table - Sheet1 (2).csv")

# Davacı Cinsiyet/Topluluk Standartlaştırması
pet["petitioner_gender"] = (
    pet["petitioner_gender"].replace({"woman": "female"}).fillna("male")
)

# Şikâyet Konularının Kanonik Kategorilere Ayrılması
def standardize_complaint(c):
  if pd.isna(c):
    return "Other"
  c_str = str(c).strip().lower()
  if any(
      k in c_str
      for k in ["extortion", "oppression", "harassment", "imprisonment"]
  ):
    return "Extortion & Misconduct"
  elif any(k in c_str for k in ["debt", "nonpayment", "loan", "mahr"]):
    return "Debt & Financial Disputes"
  elif any(
      k in c_str
      for k in [
          "property",
          "land",
          "encroachment",
          "sale",
          "real estate",
          "water",
      ]
  ):
    return "Property & Land Disputes"
  elif any(k in c_str for k in ["appointment", "mutasallim"]):
    return "Official Appointments"
  elif any(
      k in c_str for k in ["tax", "revenue", "fee", "customs", "desolation"]
  ):
    return "Taxation & Fiscal Revenues"
  elif any(k in c_str for k in ["resettlement", "runaway", "jurisdictional"]):
    return "Resettlement & Demographics"
  else:
    return "Other Civil Matters"

pet["std_complaint"] = pet["complaint_subject"].apply(standardize_complaint)

# Konum İsimlerinin Bölgesel Gruplanması
def standardize_location(l):
  if pd.isna(l):
    return "Other"
  l_str = str(l).strip()
  if l_str in ["Syria", "Haleb"]:
    return "Syria / Halep"
  if l_str in [
      "Greece",
      "Macedonia",
      "Serbia",
      "Hungary",
      "Bosnia and Herzegovina",
      "Rumeli Eyaleti",
  ]:
    return "Balkan Provinces"
  if l_str in ["Istanbul", "Mahrusa (İstanbul)", "Çekmece"]:
    return "Istanbul & Environs"
  return l_str

loc["std_location"] = loc["location_name"].apply(standardize_location)
merged = loc.merge(pet, on="decree_id", how="left")

# -----------------------------------------------------------------------------
# GÖRSEL 1: ŞİKÂYET - BÖLGE MATRİS ISI HARİTASI
# -----------------------------------------------------------------------------
plt.figure(figsize=(11, 7))
ct = pd.crosstab(merged["std_complaint"], merged["std_location"])
top_locations = ct.sum(axis=0).sort_values(ascending=False).head(10).index
ct_filtered = ct.loc[:, top_locations]
ct_filtered = ct_filtered.loc[
    ct_filtered.sum(axis=1).sort_values(ascending=False).index
]

sns.heatmap(
    ct_filtered,
    annot=True,
    fmt="d",
    cmap="Blues",
    cbar=True,
    linewidths=1,
    linecolor="white",
    annot_kws={"weight": "bold", "size": 11},
)
plt.title(
    "Extortion and Debt Disputes Dominated Western Anatolia and Syria in 1649",
    fontsize=13,
    fontweight="bold",
    pad=15,
)
plt.xlabel("Provinces / Regions", fontsize=11, fontweight="bold")
plt.ylabel("Complaint Classification", fontsize=11, fontweight="bold")
plt.xticks(rotation=35, ha="right")
plt.tight_layout()
plt.savefig("ottoman_complaint_location_matrix.png", dpi=300)
plt.close()

# -----------------------------------------------------------------------------
# GÖRSEL 2: HUKUKİ VE SOSYAL İNFOGRAFİK PANELİ
# -----------------------------------------------------------------------------
fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# Subplot A: Şikayet Dağılımı
comp_counts = pet["std_complaint"].value_counts()
sns.barplot(
    x=comp_counts.values,
    y=comp_counts.index,
    hue=comp_counts.index,
    legend=False,
    palette="Blues_r",
    ax=axes[0, 0],
)
axes[0, 0].set_title(
    "A. Complaint Subject Breakdown", fontsize=12, fontweight="bold", loc="left"
)
for c in axes[0, 0].containers:
    axes[0, 0].bar_label(c, fmt="%d", padding=4, fontweight="bold")

# Subplot B: İdari Alıcılar
rec_counts = (
    rec["receiver_title"]
    .replace({"Molla/Kadi": "Kadi", "Sanjakbegh / Pasha": "Pasha"})
    .value_counts()
    .head(6)
)
sns.barplot(
    x=rec_counts.values,
    y=rec_counts.index,
    hue=rec_counts.index,
    legend=False,
    palette="Oranges_r",
    ax=axes[0, 1],
)
axes[0, 1].set_title(
    "B. Imperial Directive Recipients (Receivers)",
    fontsize=12,
    fontweight="bold",
    loc="left",
)
for c in axes[0, 1].containers:
    axes[0, 1].bar_label(c, fmt="%d", padding=4, fontweight="bold")

# Subplot C: Cinsiyet/Demografi Pasta Grafiği
gender_counts = pet["petitioner_gender"].value_counts()
axes[1, 0].pie(
    [
        gender_counts.get("male", 0),
        gender_counts.get("group", 0),
        gender_counts.get("female", 0),
    ],
    labels=[
        f"Male ({gender_counts.get('male', 0)})",
        f"Group ({gender_counts.get('group', 0)})",
        f"Female ({gender_counts.get('female', 0)})",
    ],
    autopct="%1.1f%%",
    colors=["#0072b2", "#e69f00", "#009e73"],
    startangle=140,
    explode=(0.03, 0.03, 0.03),
    textprops={"fontweight": "bold", "fontsize": 10},
)
axes[1, 0].set_title(
    "C. Petitioner Demographic Profile",
    fontsize=12,
    fontweight="bold",
    loc="left",
)

# Subplot D: Bölgesel Yoğunluk
loc_counts = loc["std_location"].value_counts().head(8)
sns.barplot(
    x=loc_counts.values,
    y=loc_counts.index,
    hue=loc_counts.index,
    legend=False,
    palette="Greens_r",
    ax=axes[1, 1],
)
axes[1, 1].set_title(
    "D. Top Geographic Concentrations",
    fontsize=12,
    fontweight="bold",
    loc="left",
)
for c in axes[1, 1].containers:
    axes[1, 1].bar_label(c, fmt="%d", padding=4, fontweight="bold")

plt.suptitle(
    "1059 (1649 CE) Ottoman Imperial Petitioning & Judicial Administration"
    " Overview",
    fontsize=14,
    fontweight="bold",
)
plt.tight_layout()
plt.savefig("ottoman_legal_social_infographic.png", dpi=300)
plt.close()

# -----------------------------------------------------------------------------
# GÖRSEL 3: MEKÂNSAL YOĞUNLUK COĞRAFİ ISI HARİTASI
# -----------------------------------------------------------------------------
plt.figure(figsize=(13, 7))
valid_loc = loc.dropna(subset=["lat", "long"]).copy()

sns.kdeplot(
    data=valid_loc,
    x="long",
    y="lat",
    cmap="YlOrRd",
    fill=True,
    thresh=0.05,
    alpha=0.5,
    levels=10,
)
plt.scatter(
    valid_loc["long"],
    valid_loc["lat"],
    color="#0072b2",
    s=70,
    edgecolors="black",
    linewidth=0.8,
    zorder=5,
)

key_cities = {
    "Istanbul": (28.9784, 41.0082),
    "Bursa": (29.0610, 40.1885),
    "Edirne": (26.5561, 41.6775),
    "Aydın": (27.8416, 37.8450),
    "Halep": (37.1343, 36.2021),
    "Kars": (43.0975, 40.6013),
    "Diyarbakır": (40.2306, 37.9144),
    "Szeged (Segedin)": (20.1482, 46.2530),
}
for city, (lng, lat) in key_cities.items():
  plt.scatter(
      lng, lat, color="#d55e00", s=120, edgecolors="white", linewidth=1.5, zorder=6
  )
  plt.annotate(
      city,
      (lng, lat),
      xytext=(5, 5),
      textcoords="offset points",
      fontsize=10,
      fontweight="bold",
      bbox=dict(
          boxstyle="round,pad=0.2",
          facecolor="white",
          alpha=0.85,
          edgecolor="none",
      ),
  )

plt.xlim(15, 46)
plt.ylim(34, 48)
plt.title(
    "Spatial Density Heatmap of Ottoman Imperial Decrees Across Rumeli,"
    " Anatolia & Levant (1649)",
    fontsize=13,
    fontweight="bold",
)
plt.xlabel("Longitude (°E)", fontweight="bold")
plt.ylabel("Latitude (°N)", fontweight="bold")
plt.tight_layout()
plt.savefig("ottoman_spatial_density_heatmap.png", dpi=300)
plt.close()

print("Tüm infografikler ve ısı haritaları başarıyla üretildi!")

