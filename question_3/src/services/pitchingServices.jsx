import React, { Component } from 'react';

function createData(name, team, velocity, type) {
    return { name, team, velocity, type };
}

var pitchers = [];

class PitchingServices extends Component {

    // TODO - Issue with numbers not displaying - fix later
    fastest4SeamPitchers = (data) => {

        if (!data) {
            let noData = [createData("N/A","N/A", 0)];
            return noData;
        }

        let _rows = [];
        let _data = JSON.parse(data);
        
        for (const entry of _data.entries()) {
            let item = entry[1];

            // Check if player throws 4 seam
            if (item.four_seam_speed) {
                let playerid = item.player_id;
                let playername = item.player_name_last_first.replace(/['"]+/g, '', '');
                let team = item.team_abbrev;
                let speed = item.four_seam_speed;

                // Convert 4-seam to number type
                let doubleFourSeam = +speed;
           
                _rows.push({
                    playerid,
                    playername,
                    team,
                    doubleFourSeam
                })
            }
        }

        return _rows.sort((a, b) => (a.doubleFourSeam < b.doubleFourSeam) ? 1 : -1);
    }

    highestSpinRate = (data, pitch) => {
        if (!data) {
            let noData = [createData("N/A","N/A", 0)];
            return noData;
        }

        let _rows = [];
        let _data = JSON.parse(data);
        
        for (const entry of _data.entries()) {
            let item = entry[1];

            // Check if player throws 4 seam
            if (item[pitch + '_spin']) {
                let playerid = item.player_id;
                let playername = item.player_name_last_first.replace(/['"]+/g, '', '');
                let team = item.team_abbrev;
                let spinrate = item.four_seam_spin;

                // Convert spinrate to number
                let numSpinRate = +spinrate;
           
                _rows.push({
                    playerid,
                    playername,
                    team,
                    numSpinRate
                })
            }
        }

        return _rows.sort((a, b) => (a.numSpinRate < b.numSpinRate) ? 1 : -1);
    }

    mostPitchesThrown = (data) => {
        if (!data) {
            let noData = [createData("N/A","N/A", 0)];
            return noData;
        }

        let _rows = [];
        let _data = JSON.parse(data);
        
        for (const entry of _data.entries()) {
            let item = entry[1];

            if (item.player_name_last_first) {
                let playerid = item.player_id;
                let playername = item.player_name_last_first.replace(/['"]+/g, '', '');
                let team = item.team_abbrev;
                let pitches = item.num_pitches;

                // Convert spinrate to number
                let numpitches = +pitches;

                _rows.push({
                    playerid,
                    playername,
                    team,
                    numpitches
                })
            }
        }
        
        return _rows.sort((a, b) => (a.numpitches < b.numpitches) ? 1 : -1);
    }

    // Nice to haves - can look into getting these values from another datasource
    mostWins = () => {}
    mostKs = () => {}
    mostLosses = () => {}
    highestERA = () => {}
}

export { PitchingServices };