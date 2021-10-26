from flask import Flask, request
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS
from pitcher_blueprint import PitcherBlueprint
import requests, json

# Init Flask
app = Flask(__name__)
CORS(app)
api = Api(app)

# Registers the pitcher blueprint to make multiple calls to said service
pitcher_blueprint = PitcherBlueprint()
app.register_blueprint(pitcher_blueprint)

app.run(host="0.0.0.0", port=5000, debug=True)
