const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost:27017/express_mongo';

mongoose.connect(MONGO_URI);

console.log('Connected mongoDB')

module.exports = mongoose;
