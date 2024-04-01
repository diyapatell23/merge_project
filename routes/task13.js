const express = require('express');
const app = express();
const auth = require('../middlewares/auth');
const routes = express.Router();

const controller = require('../controller/task13Controller');

routes.get('/form',auth, controller.combofrom);
routes.post('/data',auth, controller.combodata);

module.exports = routes;