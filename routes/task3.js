const express = require('express');

const routes = express.Router();

const controller = require('../controller/task3Controller');

routes.get('/showtask3', controller.showtask3);

module.exports = routes;
