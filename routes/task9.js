const express = require('express');

const routes = express.Router();

const controller = require('../controller/task9Controller');

routes.get('/time', controller.time);

module.exports = routes;