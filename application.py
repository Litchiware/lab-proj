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

@app.route('/state')
def send_state():

    x = time()
    y = random()
    upper_bound = 1
    lower_bound = 0
    return jsonify({
        "x": x,
        "y": y,
        "upper_bound": upper_bound,
        "lower_bound": lower_bound
    })

if __name__ == '__main__':
    app.run()
