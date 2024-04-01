const express = require('express');
const auth = require('../middlewares/auth');
const routes = express.Router();

const controller = require('../controller/task9Controller');

routes.get('/time',auth, controller.time);

module.exports = routes;