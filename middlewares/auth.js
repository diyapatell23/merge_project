const express = require('express');
const jwt = require('jsonwebtoken');
const connection = require('../config/config');
const { result } = require('../controller/resultGrid');
require('dotenv').config();
const auth = (req,res, next)=>{
    if(req.cookies.jwtToken){
        var token = req.cookies.jwtToken;
    
        jwt.verify(token,process.env.JWT_SECRET_KEY,(err,decoded)=>{
            if(err){
                res.redirect('/main/loginform');
            }
            let query = `SELECT username FROM users  WHERE username="${decoded.name}"`;
            connection.query(query,(err, result)=>{
                if(err){
                    console.log("auth error",err);
                }
                else{
                    if(result.length >0){
                        next();
                    }
                    else{
                        res.send("user is not found");
                    }
                }
            })
        });
    }
    else{
        // res.redirect('/main/loginform');
        res.send("Unauthorized User please login...  <br><a href='/main/loginform'>Login Form</a>")
    }
    
}
module.exports = auth;