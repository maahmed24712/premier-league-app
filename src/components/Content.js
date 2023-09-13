// Content.js
import logo from '../images/emblem.png'
import React from 'react';
import { Link } from 'react-router-dom';

function Content() {
  return (
    <div className="content">
        <br></br>
        <br></br>
        <br></br>
      <img src={logo} style={{width:'300px', height:'180px'}}></img>
      <h1>Welcome to Premier Zone</h1>
      <p>Your home for premier league stats and more</p>
      <Link to="./teams">
        <button>GET STARTED</button>
      </Link>
    </div>
  );
}

export default Content;
