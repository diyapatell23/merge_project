const express = require('express');
const auth = require('../middlewares/auth');
const routes = express.Router();

const controller = require('../controller/resultGrid');

routes.get('/result/:page',auth, controller.result);
routes.get('/search',auth, controller.searchbyid);
routes.get('/search2',auth,controller.searchbyname);
routes.get('/userdetail/:id/:name',auth, controller.userdetail);


module.exports = routes;