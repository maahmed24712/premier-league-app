const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: String,
  country: String,
  position: String,
  GA: {
    goals: Number,
    assists: Number,
  },
  matchRating: Number,
  aerialsWon: Number,
});

const teamSchema = new mongoose.Schema({
  _id: String, // You may need to adjust the data type of _id based on your actual data
  name: String,
  players: [playerSchema], // Embed the player schema as an array
});

const teamsSchema = new mongoose.Schema({
  teams: [teamSchema], // Embed the team schema as an array
});

module.exports = mongoose.model('Teams', teamsSchema);
