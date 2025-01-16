const mongoose = require('../database/connectMONGO');

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
