const express = require('express');

const routes = express.Router();

const controller = require('../controller/task8Controller');
const { route } = require('./registration');

routes.get('/form', controller.searchbydelimiter);
routes.post('/userdata',controller.getdelimitersearchdata);

module.exports = routes;