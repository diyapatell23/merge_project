const express = require('express');
const auth = require('../middlewares/auth');
const routes = express.Router();

const controller = require('../controller/task8Controller');
const { route } = require('./registration');

routes.get('/form',auth, controller.searchbydelimiter);
routes.post('/userdata',auth,controller.getdelimitersearchdata);

module.exports = routes;