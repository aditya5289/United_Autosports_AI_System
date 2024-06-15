import random

from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route('/tyreinfo/', methods=['GET', 'POST'])
def home():  # put application's code here
    if request.method == 'GET':
        tyre_data = {
            "tyre_wear0": random.randint(1, 100),
            "tyre_wear1": random.randint(1, 100),
            "tyre_wear2": random.randint(1, 100),
            "tyre_wear3": random.randint(1, 100),
            "tyre_damage0": random.randint(1, 100),
            "tyre_damage1": random.randint(1, 100),
            "tyre_damage2": random.randint(1, 100),
            "tyre_damage3": random.randint(1, 100),
            "tyre_pressure0": random.randint(20, 40),
            "tyre_pressure1": random.randint(20, 40),
            "tyre_pressure2": random.randint(20, 40),
            "tyre_pressure3": random.randint(20, 40)
        }
        return jsonify({'tyre_data': tyre_data})
    else:
        data = "POST?"
        return jsonify({'data': data})


if __name__ == '__main__':
    app.run()
