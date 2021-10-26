import pandas as pd
import json

class CSVParser():

    def __init__(self):
        # load csv file into pandas dataframe
        file_loc = "./data/devtest.csv"
        csv_file = pd.read_csv(file_loc, encoding = 'ISO-8859-1', sep=",")
        self.player_data = json.loads(csv_file.to_json(orient = "records"))

    def get_all(self):
        return self.player_data

    def get_pitcher_by_id(self, _id):
        if self.player_data and _id:
            for entry in self.player_data:
                if entry["player_id"] == int(_id):
                    return entry
        else:
            return "No player data"
