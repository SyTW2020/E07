const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

const User = new Schema({
  nickname: String,
  email: String,
  password: String,
  name: String,
  photo: String,
  birthday: String,
  description: String
});

User.methods.encryptPass = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

User.methods.validatePass = function (password) {
  return bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('User', User);