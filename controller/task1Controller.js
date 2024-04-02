const coookie_parser = require('cookie-parser');
const express = require('express');
const app = express();


const show = (req,res)=>{
       res.render('./task1/js_task1');
   
}



module.exports = {show};