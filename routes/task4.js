const express = require('express');
const auth = require('../middlewares/auth');
const routes = express.Router();

const controller = require('../controller/task4Controller');

routes.get('/showspecificuser/:page',auth, controller.showusers);
routes.get('/sort/:field/:page',auth, controller.sortfield);
routes.get('/sort/:field/aesc/:page',auth, controller.sortfieldaesc);
routes.get('/sort/:field/desc/:page',auth, controller.sortfielddesc);

module.exports = routes;
