import React, { useState } from 'react';
import '../../css files/ClubGrid.css'
import { Link } from 'react-router-dom';

function ClubGrid({ clubs }) {
  
    return (
    <div className="club-grid">
      {clubs.map((club) => (
        <div key={club.id} className="club-card">
        <Link to={`/teams/${club.name}`}>
        <button className='grid-button'>
            <img src={club.logo} alt={club.name} />
          </button>
        </Link>
        <h3>{club.name}</h3>
        </div>    
      ))}
    </div>
  );
}

export default ClubGrid;
