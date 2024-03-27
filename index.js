const express = require('express');
const routes= require('./routes/registration');
const task1routes = require('./routes/task1');
const task2routes = require('./routes/task2');
const task3routes = require('./routes/task3');
const app = express();
const port = 8001;

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));


app.use('/',routes);
app.use('/', task1routes);
app.use('/', task2routes);
app.use('/',task3routes)

app.listen(port, ()=>{
    console.log("server is listening on port" + port);
})