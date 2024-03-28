const express = require('express')
const app = express();

const posts = (req,res)=>{
    res.render('./task10/alluser');
}

const postdetails = (req,res)=>{
    res.render('./task10/showuser');
}

const comments = (req,res)=>{
    res.render('./task10/showcomments');
}

module.exports ={posts, postdetails, comments};