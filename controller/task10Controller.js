const express = require('express')
const app = express();

const posts = (req,res)=>{
    // res.sendFile('alluser.html', { root: app.get('./views/task10') })
    res.render('./task10/alluser');
}

const postdetails = (req,res)=>{
    // res.sendFile('showuser.html',{root: app.get('views')})
    res.render('./task10/showuser')
}

const comments = (req,res)=>{
    // res.sendFile('showcomments.html',{root: app.get('views')})
    res.render('./task10/showcomments')
}

module.exports ={posts, postdetails, comments};