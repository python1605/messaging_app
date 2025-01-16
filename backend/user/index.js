const express = require('express');
const { add } = require('./user.controller');
const app = express();

app.post('/add', add);

module.exports = app;
