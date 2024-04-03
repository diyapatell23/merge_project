const express = require('express');
const coookieParser = require('cookie-parser');
const routes= require('./routes/registration');
const task1routes = require('./routes/dynamicTable');
const task2routes = require('./routes/kukuCube');
const task3routes = require('./routes/ticTacToe');
const task4routes = require('./routes/paginationSorting');
const task5routes = require('./routes/filterMonth');
const task6routes = require('./routes/resultGrid');
const task7routes =  require('./routes/dynamicSearch');
const task8routes = require('./routes/delimiterSearch');
const task9routes = require('./routes/timezoneConverter');
const task10routes = require('./routes/fetchApi');
const task11routes = require('./routes/jobApplication');
const task12routes = require('./routes/task12');
const task13routes= require('./routes/comboGenerator');
const task14routes= require('./routes/dynamicCountryState');

const app = express();
const port = 8004;
app.use(coookieParser());
app.use(express.json());
app.use(express.static(__dirname + "/views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));

app.use('/main',routes);
app.use('/task1', task1routes);
app.use('/task2', task2routes);
app.use('/task3',task3routes);
app.use('/task4', task4routes);
app.use('/task5', task5routes);
app.use('/task6', task6routes);
app.use('/task7',task7routes);
app.use('/task8',task8routes);
app.use('/task9',task9routes);
app.use('/task10', task10routes);
app.use('/task11', task11routes);
app.use('/task12',task12routes);
app.use('/task13', task13routes);
app.use('/task14',task14routes)

app.listen(port, ()=>{
    console.log("server is listening on port" + port);
})