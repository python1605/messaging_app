const express = require('express');

const router = express.Router();
const userController = require('../controller/user.controller.');

const { authenticate } = require('../middleware/authentication');

// Login admin
router.route('/login').post(userController.login);

// add admin
router.route('/register').post(userController.register);

// is user already exists
router.route('/isExist').get(userController.isUserNameAlreadyExists);
module.exports = router;
