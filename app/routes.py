import time
from flask import render_template, jsonify, request, redirect, url_for
from app import app

@app.route('/search', methods=['POST'])
def search():
    data = request.get_json()
    query = data.get('query', '')
    return jsonify({"query": query})


