const express = require('express');
const auth = require('../middlewares/auth');
const routes = express.Router();

const controller = require('../controller/delimiterSearch');

routes.get('/form',auth, controller.searchbydelimiter);
routes.post('/userdata',auth,controller.getdelimitersearchdata);

module.exports = routes;