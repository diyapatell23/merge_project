const express = require('express');
const router = express.Router();

const routes= require('./registration');
const task1routes = require('./dynamicTable');
const task2routes = require('./kukuCube');
const task3routes = require('./ticTacToe');
const task4routes = require('./paginationSorting');
const task5routes = require('./filterMonth');
const task6routes = require('./resultGrid');
const task7routes =  require('./dynamicSearch');
const task8routes = require('./delimiterSearch');
const task9routes = require('./timezoneConverter');
const task10routes = require('./fetchApi');
const task11routes = require('./jobApplication');
const task12routes = require('./jobApplicationAjax');
const task13routes= require('./comboGenerator');
const task14routes= require('./dynamicCountryState');

router.use('/main',routes);
router.use('/task1', task1routes);
router.use('/task2', task2routes);
router.use('/task3',task3routes);
router.use('/task4', task4routes);
router.use('/task5', task5routes);
router.use('/task6', task6routes);
router.use('/task7',task7routes);
router.use('/task8',task8routes);
router.use('/task9',task9routes);
router.use('/task10', task10routes);
router.use('/task11', task11routes);
router.use('/task12',task12routes);
router.use('/task13', task13routes);
router.use('/task14',task14routes)

module.exports = router;


