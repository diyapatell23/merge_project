const coookie_parser = require('cookie-parser');
const express = require('express');
const app = express();
app.use(coookie_parser());
const jwt = require('jsonwebtoken');


const show = (req,res)=>{
    var cookie = req.headers.cookie;
    console.log("cookie",cookie);
    if(!cookie){
        res.send("not accessable")
    }
    else{
       
       res.render('./task1/js_task1');
   }
}



module.exports = {show};