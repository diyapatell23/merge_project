const express = require('express');
const auth = require('../middlewares/auth');
const routes = express.Router();

const controller = require('../controller/jobApplicationAjax');
const { route } = require('./jobApplicationAjax');

routes.get('/form',auth, controller.form);
routes.post('/basicdetail',auth, controller.basicdetail);
routes.post('/educationaldetail/:userid',auth, controller.educationdetail);
routes.post('/work_experience/:userid',auth, controller.workexperience);
routes.post('/languages/:userid',auth, controller.languages);
routes.post('/technologies/:userid',auth, controller.technologies);
routes.post('/reference/:userid',auth, controller.reference);
routes.post('/preferences/:userid',auth, controller.preferances);
routes.get('/form/:id',auth, controller.getformdata);
routes.post('/insertform',auth, controller.insertform);
routes.post('/updatebasicdetail/:id',auth, controller.updatebasicdetail);
routes.post('/updateeducationdetail/:id', auth,controller.updateeducationdetail);
routes.post('/updatelanguages/:id',auth, controller.updatelanguages);
routes.post('/technologiesupdate/:id',auth, controller.updatetechnologies);
routes.post('/referencesupdate/:id',auth, controller.referencesupdate);
routes.post('/preferencesupdate:id',auth, controller.preferencesupdate);
routes.post('/updateform',auth, controller.updateform);




module.exports = routes;