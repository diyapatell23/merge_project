const express = require('express');
const auth = require('../middlewares/auth');
const router = express.Router();
const controller = require('../controller/loginformController');

router.get('/registration',controller.registration);
router.post('/login',controller.login);
router.get('/activationlink/:userid/:activationkey', controller.activation);
router.get('/loginform',controller.loginform);
router.post('/tasks', controller.finallogin);
router.get('/tasks',auth,controller.dashboard);
router.get('/forgotpassword',controller.getforgotpassword);
router.post('/forgotpassword', controller.setforgotpassword);
router.get('/setpassword/:id', controller.getpassword);
router.post('/:id', controller.setpassword);

module.exports = router;