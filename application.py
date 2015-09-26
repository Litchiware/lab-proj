from flask import Flask, render_template, jsonify
from random import random
from time import time

app = Flask(__name__)

@app.route('/')
def index():

    return render_template('index.html')

@app.route('/signals')
def display_signals():

    return render_template('signals.html')

@app.route('/data')
def send_data():

    x = time()
    y = random()
    return jsonify({"x": x, "y": y})

if __name__ == '__main__':
    app.run()
