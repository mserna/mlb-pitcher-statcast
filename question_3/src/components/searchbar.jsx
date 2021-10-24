import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { top100Films } from '../models/dummyData';
import { PlayerServices } from '../services/playerServices';



export default function SearchBar() {

  const [playerList, setPlayerList] = useState(null);
  let players_data = localStorage.getItem("json_data");

  useEffect(() => {
    let playerServices = new PlayerServices();
    let _list = playerServices.getPlayerList(players_data);
    setPlayerList(_list);
  }, [players_data]);

  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        id="player-list"
        options={playerList ? playerList.map(option => option.player_name) : []}
        renderInput={(params) => <TextField {...params} label="Player Name" />}
      />
    </div>
  );
}