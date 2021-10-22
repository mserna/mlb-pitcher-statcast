import React, { Component } from 'react';

function createData(name, team, velocity, type) {
    return { name, team, velocity, type };
}

var pitchers = [];
var similarPitchers = [];

class PitchingServices extends Component {

    top10HardestPitchesThrown = (data) => {
        if (!data) {
            let noData = [createData("N/A","N/A", 0, "N/A")];
            return noData;
        }

        let _rows = [];
        let _data = JSON.parse(data);
        
        for (const entry of _data.entries()) {
            let item = entry[1];
            let playername = item.pitcher_first_name + ' ' + item.pitcher_last_name;
            let team = item.pitcher_team;
            
            // Convert string to number type
            let pitchreleasevelocity = +item.pitch_release_velocity;
            let pitchtype = item.pitch_type;
           
            _rows.push({
                playername,
                team,
                pitchreleasevelocity,
                pitchtype
            })
        }

        pitchers = _rows;
        return _rows.sort((a, b) => (a.pitchreleasevelocity < b.pitchreleasevelocity) ? 1 : -1);
    }

    averageFourSeamFastball = () => {
        let giants = this.avergeFourSeamFastballForGiants();
        let rockies = this.averageFourSeamFastballForRockies();
        return [giants, rockies];
    }

    avergeFourSeamFastballForGiants = () => {
        if (pitchers.length === 0) {
            return []; 
        }

        var fourseamPitches = []
        var sum = 0

        for (const pitcher of pitchers.entries()) {
            var element = pitcher[1]
            if (element.team === "SF") {
                fourseamPitches.push(element.pitchreleasevelocity);
                var pitchvelocity = +element.pitchreleasevelocity;
                sum += pitchvelocity;
            }
        }
        var rockiesaveragevelocity = "-";
        var giantsaveragevelocity = sum / fourseamPitches.length;
        console.log("avg: ", giantsaveragevelocity);
        return { giantsaveragevelocity, rockiesaveragevelocity };
    }

    averageFourSeamFastballForRockies = (data) => {
        if (pitchers.length === 0) {
            return []; 
        }

        var fourseamPitches = []
        var sum = 0

        for (const pitcher of pitchers.entries()) {
            var element = pitcher[1]
            if (element.team === "COL") {
                fourseamPitches.push(element.pitchreleasevelocity);
                var pitchvelocity = +element.pitchreleasevelocity;
                sum += pitchvelocity;
            }
        }
        var giantsaveragevelocity = "-";
        var rockiesaveragevelocity = sum / fourseamPitches.length;
        console.log("avg: ", rockiesaveragevelocity);
        return { rockiesaveragevelocity, giantsaveragevelocity };
    }

    listAllPitchesSameVelocity = (data) => {
        if (!data) {
            let noData = [createData("N/A","N/A", 0, "N/A", "N/A", 0, 0, 0)];
            return noData;
        }

        let _rows = [];
        let _data = JSON.parse(data);
        
        for (const entry of _data.entries()) {
            let item = entry[1];
            let playername = item.pitcher_first_name + ' ' + item.pitcher_last_name;
            let team = item.pitcher_team;
            
            // Convert string to number type
            let pitchreleasevelocity = +item.pitch_release_velocity;
            let pitchtype = item.pitch_type;
            let inning = item.inning;
            let balls = item.balls;
            let strikes = item.strikes;
            let outs = item.outs;
           
            if (_rows.some(el => el.pitchreleasevelocity === pitchreleasevelocity)) {
                console.log("Found similar pitches");
                let similarPitch = _rows.filter(el => el.pitchreleasevelocity === pitchreleasevelocity);
                console.log("similar pitch: ", similarPitch[0]);
                // If two pitches have same velocity put into another array
                // Space complexity will hinder using this technique
                // let previousRecord = _rows[similarPitch];
                // console.log("prev:", previousRecord);
                if (!similarPitchers.includes(similarPitch[0])) {
                    similarPitchers.push(similarPitch[0]);
                }
            }
            _rows.push({
                playername,
                team,
                pitchreleasevelocity,
                pitchtype,
                inning,
                balls,
                strikes,
                outs
            });
        }

        // console.log("list: ", similarPitchers.len);
        return similarPitchers.sort((a, b) => (a.pitchreleasevelocity < b.pitchreleasevelocity) ? 1 : -1);
    }
}

export { PitchingServices };