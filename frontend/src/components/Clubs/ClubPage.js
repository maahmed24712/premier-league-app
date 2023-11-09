import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import Axios from 'axios';
import '../../css files/ClubPage.css'

function ClubPage() {
  const location = useLocation(); // Access the location object
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const clubName = decodeURIComponent(location.pathname.split('/').pop());
    console.log('Club Name:', clubName);
    const apiUrl = `https://premier-league-app-backend.onrender.com/${clubName}`;
    console.log('API URL:', apiUrl);

    const fetchData = async () => {
      try {
        const response = await Axios.get(apiUrl);
        setTeams(response.data);
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };
    fetchData();
  }, [location.pathname]);

  return (
    <div className="club-page">
      <h1 style={{ textAlign: 'center' }}>{decodeURIComponent(location.pathname.split('/').pop())}</h1>

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
export default ClubPage;

