const express = require('express');

const routes = express.Router();

const controller = require('../controller/task2Controller');

routes.get('/showtask2', controller.show);

module.exports = routes;

