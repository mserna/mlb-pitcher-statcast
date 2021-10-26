from flask import Flask, Blueprint, request
from pitcher_manager import PitcherManager

class PitcherBlueprint(Blueprint):
    def __init__(self):
        super().__init__(__class__.__name__, __name__)
        self.pitcher_manager = PitcherManager()
        self._add_routes()

    def _add_routes(self):
        self.add_url_rule('/pitchers', 'Get all pitchers from CSV',
                          self.pitcher_manager.get_all_pitchers,
                          methods=['GET'])
        self.add_url_rule('/pitchers/details', 'Get pitcher by player_id',
                          self.pitcher_manager.get_pitcher_by_id,
                          methods=['GET'])