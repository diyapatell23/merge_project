const express = require('express');

const routes = express.Router();

const controller = require('../controller/task6Controller');

routes.get('/result/:page', controller.result);
routes.get('/search', controller.searchbyid);
routes.get('/search2',controller.searchbyname);
routes.get('/userdetail/:id/:name', controller.userdetail);


module.exports = routes;