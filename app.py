from pathlib import Path

from flask import Flask, send_file


DATA_DIR = Path(__file__).resolve().parent
HTML_FILE = DATA_DIR / "Ottoman_HGIS_Web_Explorer_Python.html"
JSON_FILE = DATA_DIR / "dashboard_data.json"

app = Flask(__name__)


@app.get("/")
def home():
    return send_file(HTML_FILE)


@app.get("/dashboard_data.json")
@app.get("/api/data")
def dashboard_data():
    return send_file(JSON_FILE, mimetype="application/json")


if __name__ == "__main__":
    app.run(debug=True)
