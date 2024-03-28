const express = require('express');
const app = express();

const routes = express.Router();

const controller = require('../controller/task13Controller');

routes.get('/form', controller.combofrom);
routes.post('/data', controller.combodata);

module.exports = routes;