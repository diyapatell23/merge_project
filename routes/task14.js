const express = require('express');
const routes = express.Router();
const auth = require('../middlewares/auth');
const controller = require('../controller/task14Controller');

routes.post('/show/:name',auth, controller.showstate);
routes.get('/show',auth, controller.getdata);

module.exports = routes;