import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Axios from 'axios';
import '../../css files/ClubPage.css';

function NationPage() {
  const location = useLocation();
  const [players, setPlayers] = useState([]);
  const nationName = decodeURIComponent(location.pathname.split('/').pop());

  useEffect(() => {
    const apiUrl = `http://127.0.0.1:5000/api/players/country/${nationName}`;

    const fetchData = async () => {
      try {
        const response = await Axios.get(apiUrl);
        setPlayers(response.data);
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };

    fetchData();
  }, [nationName]);

  return (
    <div className="club-page">
      <h1 style={{ textAlign: 'center' }}>{nationName}</h1>

      <table className="player-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Team</th>
            <th>Position</th>
            <th>Goals</th>
            <th>Assists</th>
            <th>Arials Won</th>
            <th>Match Rating</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            <tr key={player.name}>
              <td>{player.name}</td>
              <td>{player.team}</td>
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

export default NationPage;