const express = require('express');
const auth = require('../middlewares/auth');
const router = express.Router();
const controller = require('../controller/dynamicTable');

router.get('/show', auth,controller.show);

module.exports = router;