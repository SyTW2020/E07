const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new Schema({
    nickname: String,
    email: String,
    password: String,
    name: String,
    photo: String,
    birthDate: Date,
    description: String,
    id: Number
});

module.exports = mongoose.model('User', User);