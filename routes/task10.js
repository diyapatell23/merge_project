const express = require('express');
const auth = require('../middlewares/auth');
const routes = express.Router();

const controller = require('../controller/task10Controller');

routes.get('/posts',auth, controller.posts);
routes.get('/postdetails',auth, controller.postdetails);
routes.get('/comments',auth, controller.comments);

module.exports = routes;