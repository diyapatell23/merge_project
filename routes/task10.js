const express = require('express');

const routes = express.Router();

const controller = require('../controller/task10Controller');

routes.get('/posts', controller.posts);
routes.get('/postdetails', controller.postdetails);
routes.get('/comments', controller.comments);

module.exports = routes;