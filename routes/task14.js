const express = require('express');
const routes = express.Router();

const controller = require('../controller/task14Controller');

routes.post('/show/:name', controller.showstate);
routes.get('/show', controller.getdata);

module.exports = routes;