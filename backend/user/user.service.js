const db = require('../database/connectMYSQL');
const User = require('../schema/users.schema');

const addMysql = async (userData) => {
  return await db('users').insert(userData);
};

const addMongo = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

module.exports = {
  addMysql,
  addMongo,
};
