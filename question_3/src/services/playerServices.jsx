import React, { Component } from 'react';

class PlayerServices extends Component {

    getPlayerById = (data, id) => {
        
        if (!data) {
            return;
        }

        let player = data.find((item) => {
            let player_id = item.player_id.replace(/\r\n|\n|\r/gm, "");
            if (player_id === id) {
                return item;
            }
        });

        return player;
    }

    getPlayerList = (data) => {
        if (!data) {
            return;
        }

        let player_list = [];
        for (const entry of data) {
            let result = {};

            if (entry && entry.player_name_last_first) {
                let player_name = entry.player_name_last_first;
                result["player_name"] = player_name;
                let player_id = entry.player_id;
                result["player_id"] = player_id;
                player_list.push(result);
            }
        }

        return player_list;
    }
}

export { PlayerServices };