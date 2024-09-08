from flask import Flask, render_template, jsonify, request, redirect, url_for
from app import app
import json
from serpapi import GoogleSearch
import os

@app.route('/search', methods=['POST'])
def search():
    data = request.get_json()
    query = data.get('query')

    params = {
        "engine": "google_hotels",
        "q": f"{query}",
        "check_in_date": "2024-09-18",
        "check_out_date": "2024-09-28",
        "adults": "1",
        "currency": "INR",
        "gl": "us",
        "hl": "en",
        "api_key": "94d60742b92907667abcf9ebb2682c70c3c89bd7f974054e1e3a614b5d40dbd9"  # Use your actual API key here
    }

    search = GoogleSearch(params)
    results = search.get_dict()
    return jsonify(results)
