const express = require('express');
const auth = require('../middlewares/auth');
const routes = express.Router();

const controller = require('../controller/jobApplication');

routes.get('/screen', auth, controller.screen);
routes.get('/form',auth, controller.form);
routes.get('/showusers', auth, controller.showusers);
routes.post('/adduser',auth, controller.adduser);
routes.get('/form/:id',auth, controller.getuser);
routes.post('/updateuser/:id',auth, controller.updateuser);

module.exports = routes;