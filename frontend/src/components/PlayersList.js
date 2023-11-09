import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../css files/PlayerList.css';

function AllPlayersPage() {
  const [players, setPlayers] = useState([]);
  const [searchPlayer, setSearchPlayer] = useState('');

  useEffect(() => {
    Axios.get('https://premier-league-app-backend.onrender.com/final')
      .then(response => {
        setPlayers(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='container'>
      <h1>All Players</h1>
      <input
        type='text'
        placeholder='Search'
        value={searchPlayer}
        onChange={(e) => setSearchPlayer(e.target.value)}
      />
      <table className='player-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Position</th>
            <th>Goals</th>
            <th>Assists</th>
            <th>Arials Won</th>
            <th>Match Rating</th>
          </tr>
        </thead>
        <tbody>
  {players.map((team, index) => (
    <React.Fragment key={index}>
      {team.players
        .filter(player =>
          player.name.toLowerCase().includes(searchPlayer.toLowerCase())
        )
        .map((player, idx) => (
          <tr key={idx}>
            <td>{player.name}</td>
            <td>{player.country}</td>
            <td>{player.position}</td>
            <td>{player.GA.goals}</td>
            <td>{player.GA.assists}</td>
            <td>{player.aerialsWon}</td>
            <td>{player.matchRating}</td>
          </tr>
        ))}
    </React.Fragment>
  ))}
</tbody>
      </table>
    </div>
  );
}

export default AllPlayersPage;


