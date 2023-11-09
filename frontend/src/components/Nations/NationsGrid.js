import React, { useState } from 'react';
import '../../css files/ClubGrid.css'
import { Link } from 'react-router-dom';

function NationsGrid({ nations }) {
  
    return (
    <div className="club-grid">
      {nations.map((nation) => (
        <div key={nation.id} className="club-card">
        <Link to={`/nations/${nation.name}`}>
        <button className='grid-button'>
            <img src={nation.logo} alt={nation.name} />
          </button>
        </Link>
        <h3>{nation.name}</h3>
        </div>    
      ))}
    </div>
  );
}

export default NationsGrid;