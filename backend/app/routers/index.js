const express = require('express');

const user = require('./userRoutes');

const router = express.Router();

router.use('/users', user);

module.exports = router;
