const express = require('express');
const auth = require('../middlewares/auth');
const routes = express.Router();

const controller = require('../controller/ticTacToe');

routes.get('/showtask3',auth, controller.showtask3);

module.exports = routes;
