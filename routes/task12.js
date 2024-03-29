const express = require('express');

const routes = express.Router();

const controller = require('../controller/task12Controller');
const { route } = require('./task12');

routes.get('/form', controller.form);
routes.post('/basicdetail', controller.basicdetail);
routes.post('/educationaldetail/:userid', controller.educationdetail);
routes.post('/work_experience/:userid', controller.workexperience);
routes.post('/languages/:userid', controller.languages);
routes.post('/technologies/:userid', controller.technologies);
routes.post('/reference/:userid', controller.reference);
routes.post('/preferences/:userid', controller.preferances);
routes.get('/form/:id', controller.getformdata);
routes.post('/insertform', controller.insertform);
routes.post('/updatebasicdetail/:id', controller.updatebasicdetail);
routes.post('/updateeducationdetail/:id', controller.updateeducationdetail);
routes.post('/updatelanguages/:id', controller.updatelanguages);
routes.post('/technologiesupdate/:id', controller.updatetechnologies);
routes.post('/referencesupdate/:id', controller.referencesupdate);
routes.post('/preferencesupdate:id', controller.preferencesupdate);
routes.post('/updateform', controller.updateform);




module.exports = routes;