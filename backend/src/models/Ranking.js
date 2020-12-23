const mongoose = require('mongoose');
const { Schema } = mongoose;

const Ranking = new Schema({
  nickname: String,
  game: String,
  score: Number,
  date: Date,
  id: Number
});

module.exports = mongoose.model('Ranking', Ranking);