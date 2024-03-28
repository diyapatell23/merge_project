const express = require('express');

const routes = express.Router();

const controller = require('../controller/task11Controller');

routes.get('/form', controller.form);
routes.post('/adduser', controller.adduser);
routes.get('/form/:id', controller.getuser);
routes.post('/updateuser/:id', controller.updateuser);

module.exports = routes;