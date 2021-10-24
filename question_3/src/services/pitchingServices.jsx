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
                let velocity = +speed;
           
                _rows.push({
                    playerid,
                    playername,
                    team,
                    velocity
                })
            }
        }

        return _rows.sort((a, b) => (a.velocity < b.velocity) ? 1 : -1);
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
                let spin = item.four_seam_spin;

                // Convert spinrate to number
                let spinrate = +spin;
           
                _rows.push({
                    playerid,
                    playername,
                    team,
                    spinrate
                })
            }
        }

        return _rows.sort((a, b) => (a.spinrate < b.spinrate) ? 1 : -1);
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
                let numberofpitches = +pitches;

                _rows.push({
                    playerid,
                    playername,
                    team,
                    numberofpitches
                })
            }
        }
        
        return _rows.sort((a, b) => (a.numberofpitches < b.numberofpitches) ? 1 : -1);
    }

    getLeaguePitchAverage = (data, pitch, metric) => {
        if (!data) {
            return;
        }

        let pitch_total = 0;
        let total_metric = 0;
        let counter = 0;
        let _data = JSON.parse(data);
        
        for (const entry of _data.entries()) {
            let item = entry[1];

            // Checks if pitcher has pitch
            if (item[`${pitch}_${metric}`]) {
                // Add to to total
                total_metric += +item[`${pitch}_${metric}`];
                let tot_num_pitch_per_player = +item.num_pitches * +item[`${pitch}_pct`];
                pitch_total += tot_num_pitch_per_player
                counter += 1;
            }
        }

        let avg = total_metric / counter;
        let avg2 = pitch_total / counter;

        return [
            avg, avg2
        ];
    }

    // Nice to haves - can look into getting these values from another datasource
    mostWins = () => {}
    mostKs = () => {}
    mostLosses = () => {}
    highestERA = () => {}
}

export { PitchingServices };