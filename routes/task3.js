const express = require('express');
const auth = require('../middlewares/auth');
const routes = express.Router();

const controller = require('../controller/task3Controller');

routes.get('/showtask3',auth, controller.showtask3);

module.exports = routes;
