const express = require('express');
const auth = require('../middlewares/auth');
const routes = express.Router();

const controller = require('../controller/filterMonth');

routes.get('/:page',auth, controller.monthfilter);

module.exports = routes;