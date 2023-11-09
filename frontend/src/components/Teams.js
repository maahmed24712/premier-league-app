import React from 'react';
import ClubGrid from './Clubs/ClubGrid';
import { premierLeagueClubs } from './Clubs/ClubData';

function Teams() {
  return (
    <div className="teams-page">
      <h2 style={{textAlign:'center'}}>Premier League Clubs</h2>
      <ClubGrid clubs={premierLeagueClubs} />
    </div>
  );
}

export default Teams;
