import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import Axios from 'axios';
import '../../css files/ClubPage.css'

function ClubPage() {
  // Using useLocation to get the pathname
  const location = useLocation(); // Access the location object

  // Create a state variable to hold the player data and initialize it as an empty array.
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Extracting the clubName from the pathname and URL-encoding it
    const clubName = decodeURIComponent(location.pathname.split('/').pop());
    console.log('Club Name:', clubName);

    // Define the URL for the API request, including the encoded clubName
    const apiUrl = `https://premier-league-app-backend.onrender.com/api/teams?club=${clubName}`;
    console.log('API URL:', apiUrl);

    // Create an asynchronous function to fetch data
    const fetchData = async () => {
      try {
        const response = await Axios.get(apiUrl);
        // Set the player data in the state when the response is received
        setPlayers(response.data);
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };

    // Call the asynchronous function to fetch data
    fetchData();
  }, [location.pathname]); // Include location.pathname as a dependency

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
          {players.map((player) => (
            <tr key={player._id}>
              <td>{player.name}</td>
              <td>{player.country}</td>
              <td>{player.position}</td>
              <td>{player.GA.goals}</td>
              <td>{player.GA.assists}</td>
              <td>{player.aerialsWon}</td>
              <td>{player.matchRating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClubPage;

