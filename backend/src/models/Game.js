const mongoose = require('mongoose');
const { Schema } = mongoose;

const Game = new Schema({
  name: String,
  multiplayer: Boolean,
  music: String,
  rating: Number,
  timesPlayed: Number,
  image: String,
  id: Number,
});

module.exports = mongoose.model('Game', Game);