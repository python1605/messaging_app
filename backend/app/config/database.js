const mongoose = require('mongoose');
const uri = 'mongodb://127.0.0.1:27017/messagin_app';
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Mongo Successfully connected to the database');
  })
  .catch((err) => {
    console.error('Could not connect to the database.', err);
    process.exit();
  });
