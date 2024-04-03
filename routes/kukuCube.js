const express = require('express');
const auth = require('../middlewares/auth');
const routes = express.Router();

const controller = require('../controller/kukuCube');

routes.get('/showtask2',auth, controller.show);

module.exports = routes;

