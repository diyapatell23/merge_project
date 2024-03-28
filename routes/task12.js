const express = require('express');

const routes = express.Router();

const controller = require('../controller/task12Controller');
const { route } = require('./task12');

routes.get('/form', controller.form);
routes.post('/basicdetail', controller.basicdetail);
routes.post('/educationaldetail', controller.educationdetail);
routes.post('/work_experience', controller.workexperience);
routes.post('/languages', controller.languages);
routes.post('/technologies', controller.technologies);
routes.post('/reference', controller.reference);
routes.post('/preferences', controller.preferances);



module.exports = routes;