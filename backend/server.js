const express = require('express');
const app = express();
const router = require('./routes');
const db = require('./database/connectMYSQL');
const mongoose = require('./database/connectMONGO');

app.use(express.json());
app.use('/api', router);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

module.exports = app;
