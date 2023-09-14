const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Teams = require('./models/Teams');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // Invoke the cors middleware
app.use(bodyParser.json());

<<<<<<< HEAD
mongoose.connect(process.env.MONGODB_URI, {
=======
mongoose.connect('mongodb://127.0.0.1:27017/PremierLeaguePlayers', {
>>>>>>> 65ab716c45965cd5b23d33b9368a40131861aba8
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get('/api/teams', async (req, res) => {
  try {
    const { club } = req.query;
    console.log(club);

    const foundTeams = await Teams.find({ "teams.name": club });
    console.log(foundTeams)

    if (foundTeams.length === 0) {
      return res.status(404).json({ error: 'Team not found' });
    }

    const players = foundTeams[0].teams.find((team) => team.name === club).players;

    res.json(players);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.get('/api/players', async (req, res) => {
  try {
    const allPlayers = await Teams.aggregate([
      { $unwind: "$teams" },
      { $unwind: "$teams.players" },
      {
        $project: {
          _id: 0,
          name: "$teams.players.name",
          country: "$teams.players.country",
          position: "$teams.players.position",
          goals: "$teams.players.GA.goals",
          assists: "$teams.players.GA.assists",
          matchRating: "$teams.players.matchRating",
          aerialsWon: "$teams.players.aerialsWon"
        }
      }
    ]);

    res.json(allPlayers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/players/country/:country', async (req, res) => {
  const { country } = req.params;

  try {
    const playersByCountry = await Teams.aggregate([
      { $unwind: "$teams" },
      { $unwind: "$teams.players" },
      {
        $match: {
          "teams.players.country": country,
        },
      },
      {
        $project: {
          _id: 0,
          name: "$teams.players.name",
          country: "$teams.players.country",
          team: "$teams.name",
          position: "$teams.players.position",
          goals: "$teams.players.GA.goals",
          assists: "$teams.players.GA.assists",
          matchRating: "$teams.players.matchRating",
          aerialsWon: "$teams.players.aerialsWon",
        },
      },
    ]);

    res.json(playersByCountry);
  } catch (error) {
    console.error('Error fetching players by country:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

