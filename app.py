from pathlib import Path

from flask import Flask, send_file


PROJECT_DIR = Path(__file__).resolve().parent
JSON_FILE = PROJECT_DIR / "data" / "processed" / "dashboard_data.json"
HTML_FILE = PROJECT_DIR / "index.html"

app = Flask(__name__)


@app.get("/")
def home():
    return send_file(HTML_FILE)


@app.get("/dashboard_data.json")
@app.get("/data/processed/dashboard_data.json")
@app.get("/api/data")
def dashboard_data():
    return send_file(JSON_FILE, mimetype="application/json")


if __name__ == "__main__":
    app.run(debug=True)
