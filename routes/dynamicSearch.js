const express = require('express');
const auth = require('../middlewares/auth');
const routes = express.Router();

const controller = require('../controller/dynamicSearch');
const { route } = require('./registration');

routes.get('/form',auth, controller.searchquery);
routes.post('/userdata',auth,controller.getquerydata);

module.exports = routes;
