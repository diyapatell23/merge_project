const express = require('express');
const routes= require('./routes/registration');
const task1routes = require('./routes/task1');
const task2routes = require('./routes/task2');
const task3routes = require('./routes/task3');
const task4routes = require('./routes/task4');
const task5routes = require('./routes/task5');
const task6routes = require('./routes/task6');
const task7routes =  require('./routes/task7');
const task8routes = require('./routes/task8');
const task9routes = require('./routes/task9');
const task10routes = require('./routes/task10');
const task11routes = require('./routes/task11');
const task12routes = require('./routes/task12');
const task13routes= require('./routes/task13');

const app = express();
const port = 8004;
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

app.listen(port, ()=>{
    console.log("server is listening on port" + port);
})