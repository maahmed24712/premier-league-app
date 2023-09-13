import React, { useState } from 'react';
import '../App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faFlag,
  faSearch,
  faHouse,
  faShirt,
  faFutbol
} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';


function TheNavbar() {
  const [searchResults, setSearchResults] = useState([]);

  return (
<div className="navbar">
  <div className="Logo-icon">
    <h1>Premier Zone</h1>
  </div>
  <div className="search">
    <div className="evenly">
      <Link to="/">
        <button className="icon-button">
          <FontAwesomeIcon icon={faHouse} className="icon-size" />
          <span className="button-text">Home</span>
        </button>
      </Link>
      <Link to="/teams">
        <button className="icon-button">
          <FontAwesomeIcon icon={faShirt} className="icon-size" />
          <span className="button-text">Teams</span>
        </button>
      </Link>
      <Link to="/players">
        <button className="icon-button">
          <FontAwesomeIcon icon={faUsers} className="icon-size" />
          <span className="button-text">Players</span>
        </button>
      </Link>
      <Link to="/nations">
        <button className="icon-button">
          <FontAwesomeIcon icon={faFlag} className="icon-size" />
          <span className="button-text">Nations</span>
        </button>
      </Link>
    </div>
  </div>
</div>
  );
}

export default TheNavbar;
