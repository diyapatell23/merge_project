const express = require('express');

const routes = express.Router();

const controller = require('../controller/task5Controller');

routes.get('/:page', controller.monthfilter);

module.exports = routes;