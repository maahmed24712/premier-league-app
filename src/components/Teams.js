import React from 'react';
import ClubGrid from './Clubs/ClubGrid';
import { premierLeagueClubs } from './Clubs/ClubData'; // Import the club data

function Teams() {
  return (
    <div className="teams-page">
      <h2 style={{textAlign:'center'}}>Premier League Clubs</h2>
      <ClubGrid clubs={premierLeagueClubs} /> {/* Pass the club data */}
    </div>
  );
}

export default Teams;
