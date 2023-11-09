import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Axios from 'axios';
import '../../css files/ClubPage.css';

function NationPage() {
  const location = useLocation();
  const [teams, setTeams] = useState([]);
  const nationName = decodeURIComponent(location.pathname.split('/').pop());
  console.log('Nation Name:', nationName);

  useEffect(() => {
    const apiUrl = `https://premier-league-app-backend.onrender.com/${nationName}`;
    console.log('API URL:', apiUrl);
  
    const fetchData = async () => {
      try {
        console.log(apiUrl); // Log the API URL for debugging
        const response = await Axios.get(apiUrl);
        console.log(response.data);
        setTeams(response.data);
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
            <th>Country</th>
            <th>Position</th>
            <th>Goals</th>
            <th>Assists</th>
            <th>Arials Won</th>
            <th>Match Rating</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((player) => (
            <tr key={player}>
              {console.log(player)}
              <td>{player.players.name}</td>
              <td>{player.players.country}</td>
              <td>{player.players.position}</td>
              <td>{player.players.GA.goals}</td>
              <td>{player.players.GA.assists}</td>
              <td>{player.players.aerialsWon}</td>
              <td>{player.players.matchRating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NationPage;
