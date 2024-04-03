const express = require('express');
const routes = express.Router();
const auth = require('../middlewares/auth');
const controller = require('../controller/dynamicCountryState');

routes.post('/show/:name',auth, controller.showstate);
routes.get('/show',auth, controller.getdata);

module.exports = routes;