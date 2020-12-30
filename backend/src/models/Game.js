const mongoose = require('mongoose');
const { Schema } = mongoose;

const Game = new Schema({
  name: String,
  multiplayer: Boolean,
  music: String,
  rating: Number,
  image: String
});

module.exports = mongoose.model('Game', Game);