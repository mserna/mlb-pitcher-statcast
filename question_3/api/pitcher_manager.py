from flask import jsonify, request, jsonify
from csv_parser import CSVParser
import json

class PitcherManager(object):

    def __init__(self):
        self.csv_parser = CSVParser()
    
    def get_all_pitchers(self):
        pitchers = self.csv_parser.get_all()
        return jsonify(pitchers)


    def get_pitcher_by_id(self):
        pitcher_id = request.args.get("id")
        pitcher = self.csv_parser.get_pitcher_by_id(pitcher_id)
        return jsonify(pitcher)