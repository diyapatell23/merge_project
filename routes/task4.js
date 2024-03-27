const express = require('express');

const routes = express.Router();

const controller = require('../controller/task4Controller');

routes.get('/showspecificuser/:page', controller.showusers);
routes.get('/sort/:field/:page', controller.sortfield);
routes.get('/sort/:field/aesc/:page', controller.sortfieldaesc);
routes.get('/sort/:field/desc/:page', controller.sortfielddesc);

module.exports = routes;
