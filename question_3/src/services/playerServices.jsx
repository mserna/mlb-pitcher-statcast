import React, { Component } from 'react';

class PlayerServices extends Component {

    getPlayerById = (data, id) => {
        
        if (!data) {
            return;
        }

        let _data = JSON.parse(data);
        let player = _data.find((item) => {
            let player_id = item.player_id.replace(/\r\n|\n|\r/gm, "");
            if (player_id === id) {
                return item;
            }
        });

        return player;
    }
}

export { PlayerServices };