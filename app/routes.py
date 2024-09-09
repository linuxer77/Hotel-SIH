import os
import json
import requests
from groq import Groq
from flask import Flask, render_template, jsonify, request, redirect, url_for
from app import app
from serpapi import GoogleSearch

@app.route('/search', methods=['POST'])
def search():
    data = request.get_json()
    query = data.get('query')
    client = Groq()

    def detect_language():
        client = Groq()
        content_for_language = f"Tell me what language is this: {query} and answer in two-letter language code. (e.g., en for English, es for Spanish, or fr for French, don't give any other text just give tell me language and without any inverted commas."

        completion_language = client.chat.completions.create(
            model="llama3-groq-70b-8192-tool-use-preview",
            messages=[
                {
                    "role": "system",
                    "content": "best free hotel apis\n"
                },
                {
                    "role": "user",
                    "content": f"{content_for_language}"
                }
            ],
            temperature=0.5,
            max_tokens=1024,
            top_p=0.65,
            stream=True,
            stop=None,
        )

        detected_language = ""
        for text in completion_language:
            detected_language += text.choices[0].delta.content or ""
        
        return detected_language


        
    def translated_q():
        client = Groq()
        content = "You're an intelligent language translation model, you have to translate any give input into english and my current prompt is "

        completion = client.chat.completions.create(
            model="llama3-groq-70b-8192-tool-use-preview",
            messages=[
                {
                    "role": "system",
                    "content": "best free hotel apis\n"
                },
                {
                    "role": "user",
                    "content": f"{content} + '{query}' + and don't give any other response apart from translating the message, also don't add any "" or anything else in the output "
                }
            ],
            temperature=0.5,
            max_tokens=1024,
            top_p=0.65,
            stream=True,
            stop=None,
        )

        translated_query = ''
        for chunk in completion:
            translated_query += chunk.choices[0].delta.content or ""

        return (translated_query)

    params = {
        "engine": "google_hotels",
        "q": f"{translated_q()}",
        "check_in_date": "2024-09-18",
        "check_out_date": "2024-09-28",
        "adults": "1",
        "currency": "INR",
        "gl": "us",
        "hl": f"{detect_language()}",
        "api_key": "94d60742b92907667abcf9ebb2682c70c3c89bd7f974054e1e3a614b5d40dbd9" 
    }

    search = GoogleSearch(params)
    results = search.get_dict()
    return jsonify(results)

