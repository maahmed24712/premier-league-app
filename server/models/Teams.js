const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: String,
  country: String,
  position: String,
  GA: {
    goals: Number,
    assists: Number
  },
  matchRating: Number,
  aerialsWon: Number
});

const teamSchema = new mongoose.Schema({
  name: String,
  players: [playerSchema]
});

const Team = mongoose.model('players', teamSchema);

module.exports = Team;
