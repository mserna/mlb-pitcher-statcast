import React, { Component } from 'react';

function createData(name, team, velocity, type) {
    return { name, team, velocity, type };
}

class PitchingServices extends Component {

    fastest4SeamPitchers = (data) => {

        if (!data) {
            let noData = [createData("N/A", "N/A","N/A", 0)];
            return noData;
        }
        let _rows = [];
        
        for (const entry of data) {
            // Check if player throws 4 seam
            if (entry.four_seam_speed) {
                let playerid = entry.player_id;
                let playername = entry.player_name_last_first;
                let team = entry.team_abbrev;
                let speed = entry.four_seam_speed;

                // Convert 4-seam to number type
                let velocity = speed;
           
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
        
        for (const entry of data) {

            // Check if player throws 4 seam
            if (entry[pitch + '_spin']) {
                let playerid = entry.player_id;
                let playername = entry.player_name_last_first.replace(/['"]+/g, '', '');
                let team = entry.team_abbrev;
                let spin = entry.four_seam_spin;

                // Convert spinrate to number
                let spinrate = spin;
           
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
        
        for (const entry of data) {

            if (entry.player_name_last_first) {
                let playerid = entry.player_id;
                let playername = entry.player_name_last_first;
                let team = entry.team_abbrev;
                let pitches = entry.num_pitches;

                // Convert spinrate to number
                let numberofpitches = pitches;

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
        
        for (const entry of data) {

            // Checks if pitcher has pitch
            if (entry[`${pitch}_${metric}`]) {
                // Add to to total
                total_metric += entry[`${pitch}_${metric}`];
                let tot_num_pitch_per_player = entry.num_pitches * entry[`${pitch}_pct`];
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

    getLeaguePitchCount = (data) => {
        if (!data) {
            return;
        }

        let pitch_total = 0;
        let counter = 0;

        for (const entry of data) {
            
            if(entry.num_pitches) {
                pitch_total += entry.num_pitches;
                counter += 1;
            }
        }

        return pitch_total / counter;
    }

    getLeaguePlateAppearance = (data) => {
        if (!data) {
            return;
        }

        let plate_total = 0;
        let counter = 0;

        for (const entry of data) {
            if(entry.plate_appearances) {
                plate_total += +entry.plate_appearances;
                counter += 1;
            }
        }
        
        return plate_total / counter;
    }

    getPitchPCT = (player_data) => {
        if (!player_data) {
            return;
        }

        let pitch_arr = ["four_seam_pct", "curve_pct", "cutter_pct", "change_up_pct", "slider_pct", "splitter_pct", "sinker_pct"]
        let res = {}
        for (const entry of pitch_arr) {
            // Calculate pitch %
            if (entry in player_data) {
                let pitch_pct = player_data[entry] * player_data.num_pitches;
                res[entry] = pitch_pct;
            }
        }

        return res;
    }

    // Nice to haves - can look into getting these values from another datasource
    mostWins = () => {}
    mostKs = () => {}
    mostLosses = () => {}
    highestERA = () => {}
}

export { PitchingServices };