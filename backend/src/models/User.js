const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

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

User.methods.encryptPass = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

User.methods.validatePass = function (password) {
    return bcrypto.compare(password, this.password);
}

module.exports = mongoose.model('User', User);