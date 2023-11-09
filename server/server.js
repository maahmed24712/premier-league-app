const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Players = require('./models/Teams');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const connect = process.env.MONGODB_URI;

app.use(bodyParser.json());
app.use(express.json());

const allowedOrigins = ['http://localhost:3000', 'https://premier-league-app-backend.onrender.com'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

mongoose.connect(connect, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.get('/final', async (req, res) => {
  try {
    const teams = await Players.find();
    res.json(teams);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.get('/api/players/country/:nation', async (req, res) => {
  try {
    const { nation } = req.params;
    const players = await Players.aggregate([
      { $unwind: "$players" },
      { $match: { "players.country": nation } }
    ]);
    res.json(players);
  } catch (err) {
    console.error('Error fetching players:', err);
    res.status(500).json({ message: 'Error fetching players' });
  }
});
app.get('/api/players/club/:clubName', async (req, res) => {
  try {
    const { clubName } = req.params;
    const players = await Players.aggregate([
      { $unwind: "$players" },
      { $match: { name: clubName } },
      { $project: { "players.name": 1, "players.country": 1, "players.position": 1, "players.GA.goals": 1, "players.GA.assists": 1, "players.aerialsWon": 1, "players.matchRating": 1, _id: 0 } }
    ]);
    res.json(players);
  } catch (err) {
    console.error('Error fetching players:', err);
    res.status(500).json({ message: 'Error fetching players' });
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

