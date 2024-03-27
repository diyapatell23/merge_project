const express = require('express');
const routes= require('./routes/registration');
const task1routes = require('./routes/task1');
const task2routes = require('./routes/task2');
const task3routes = require('./routes/task3');
const task4routes = require('./routes/task4');
const task5routes = require('./routes/task5');
const task6routes = require('./routes/task6');
const app = express();
const port = 8001;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));


app.use('/',routes);
app.use('/', task1routes);
app.use('/', task2routes);
app.use('/',task3routes);
app.use('/', task4routes);
app.use('/', task5routes);
app.use('/', task6routes);

app.listen(port, ()=>{
    console.log("server is listening on port" + port);
})