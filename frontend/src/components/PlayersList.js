import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import '../css files/PlayerList.css';

function AllPlayersPage() {
  const [players, setPlayers] = useState([]);
  const [searchPlayer, setSearchPlayer] = useState('');

  useEffect(() => {
    // Fetch all players from your API
    Axios.get(`http://127.0.0.1:5000/api/players`)
      .then((response) => {
        setPlayers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching player data:', error);
      });
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
          {players
            .filter((player) =>
              searchPlayer.toLowerCase() !== '' &&
              player.name.toLowerCase().includes(searchPlayer.toLowerCase())
            )
            .map((player) => (
              <tr key={player._id}>
                <td>{player.name}</td>
                <td>{player.country}</td>
                <td>{player.position}</td>
                <td>{player.goals}</td>
                <td>{player.assists}</td>
                <td>{player.aerialsWon}</td>
                <td>{player.matchRating}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllPlayersPage;

  );
}

export default AllPlayersPage;
