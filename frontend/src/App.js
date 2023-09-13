import './App.css';
import TheNavbar from './components/TheNavbar';
import logo from './images/emblem.png';
import React from 'react';
import Content from './components/Content';
import Teams from './components/Teams';
import Nations from './components/Nations/Nations'
import PlayersList from './components/PlayersList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClubPage from '../src/components/Clubs/ClubPage';
import NationsPage from '../src/components/Nations/NationsPage';

function App() {
  return (
    <Router>
      <TheNavbar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/players" element={<PlayersList />} />
        <Route path="/nations" element={<Nations />} />
        <Route path="/nations/:clubname" element={<NationsPage />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:clubname" element={<ClubPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;

