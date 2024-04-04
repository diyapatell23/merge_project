const express = require('express');
const coookieParser = require('cookie-parser');
const routes= require('./routes/mainRoutes');

const app = express();
const port = 8004;
app.use(coookieParser());
app.use(express.json());
app.use(express.static(__dirname + "/views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use('/',routes);

app.listen(port, ()=>{
    console.log("server is listening on port" + port);
})