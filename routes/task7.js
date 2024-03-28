const express = require('express');

const routes = express.Router();

const controller = require('../controller/task7Controller');
const { route } = require('./registration');

routes.get('/form', controller.searchquery);
routes.post('/userdata',controller.getquerydata);

module.exports = routes;
