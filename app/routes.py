import time
from flask import render_template, jsonify, request, redirect, url_for
from app import app
import json
from serpapi import GoogleSearch
import json



city = "Jabalpur"
params = {
  "engine": "google_hotels",
  "q": f"top hotels in {city}",
  "check_in_date": "2024-09-07",
  "check_out_date": "2024-09-08",
  "adults": "1",
  "currency": "INR",
  "gl": "us",
  "hl": "en",
  "api_key": "94d60742b92907667abcf9ebb2682c70c3c89bd7f974054e1e3a614b5d40dbd9"
}

search = GoogleSearch(params)
results = search.get_dict()
# file_path = '/home/linuxer/Programs/Python/Flask/serapi/'
with open(f'/home/linuxer/Programs/Python/Flask/Travel and Tourism/Hotel-SIH/app/jabalpur.json', 'r') as f:
    hoteldata = json.load(f)



@app.route('/search', methods=['POST'])
def search():
    data = request.get_json()
    query = data.get('query')
    return jsonify(f'{hoteldata}')

