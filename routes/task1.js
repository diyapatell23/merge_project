const express = require('express');

const router = express.Router();
const controller = require('../controller/task1Controller');

router.get('/show',controller.show);

module.exports = router;