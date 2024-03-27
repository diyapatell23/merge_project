
const connection = require('../config/config');
const md5 = require('md5');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');


const registration = (req,res)=>{
    res.render('./registration/form', { user: [{}] });
}

const login = (req,res)=>{
    console.log(req.body);
    let data = req.body;
    let name = req.body.name;
    console.log("namee", name);
    let email = req.body.email;
    let password = req.body.password;
    let newpassword = password + val;
    let finalpassword = md5(newpassword);
    var val = Math.floor(1000 + Math.random() * 9000);
    var token = crypto.randomBytes(12).toString('hex');
    let query2 = `SELECT username, email FROM users WHERE username ="${name}" AND email="${email}"`;
    
    connection.query(query2, function (err, result) {
        console.log("resulttt", result)
        if (result.length !== 0) {
            res.render('./registration/form', {user: result });
        }
        else {
            let query = `INSERT INTO users(username ,email ,password,e_password, salt, activationcode ,activationstatus) VALUES("${name}", "${email}" ,"${password}","${finalpassword}", "${val}", "${token}", 0)`
            connection.query(query, function (err, result) {
                if (err) {
                    console.log(err);
                }
                else {
                    res.render('./registration/activation', { userid: result.insertId, activationkey: token });
                }
            })
        }
    })
}

const activation = (req,res)=>{
    let query = `SELECT * FROM users WHERE id=${req.params.userid} AND activationcode="${req.params.activationkey}"`;
    connection.query(query, function (err, result) {
        if (result.length == 0) {
            res.end("invalid user");
        }
        else {
            if (result[0].activationstatus == 1) {
                res.send("your account is already activated");
            }
            else {
                let query2 = `UPDATE users SET activationstatus=1 WHERE activationstatus=0`;
                connection.query(query2, function (err, result) {
                    res.send("<p>activation successfully</p><a href='/loginform'>Login Form</a>");
                });
            }
        }
    })
}

const loginform = (req,res)=>{
    res.render('./registration/loginform', { user: [{}] });
}

const finallogin = (req,res)=>{
    let data = req.body;
    console.log("data", data)
    let name = req.body.name;
    let password = req.body.password;
    var token = crypto.randomBytes(12).toString('hex');
    const payload = {email:name};
    const jwtToken = jwt.sign(payload,token, {expiresIn:'1h'});
    console.log("jwttoken", jwtToken)
    let query = `SELECT username , password ,activationstatus FROM users WHERE username="${name}" AND password="${password}" AND activationstatus=1`
    connection.query(query, function (err, result) {
        console.log("rsult", result)
        if (err) {
            console.log(err);
        }
        else if (result.length > 0){
            // res.cookie("jwtToken", jwtToken).send("login succesfully");
            res.cookie("jwtToken",jwtToken);
            res.render('./registration/main');
        }
        else {
            res.send("invalid username or password");
        }
    })
}

const getforgotpassword = (req,res)=>{
    res.render('./registration/forgotpassword');
}

const setforgotpassword = (req,res)=>{
    let name = req.body.name;
    let query = `SELECT * FROM users WHERE username="${name}" OR email="${name}"`
    connection.query(query, function(err, result){
        if(err){
            console.log(err);
        }
        if(result.length >0){  
            res.send(`<p>User Validated Successfully</p><a href='/setpassword/${result[0].id}'>Click here</a>`)
        }else{
            res.send('invalid username or email')
        }
    })
}

const getpassword = (req, res)=>{
    let id = req.params.id;
    res.render('./registration/setpassword', {id:id});
}

const setpassword = (req,res) =>{
    let data = req.body;
    let password = req.body.password;
    let id = req.params.id;
    let repeatpassword = req.body.repassword;
    let salt = Math.floor(1000 + Math.random() * 9000);
    let newpassword = password + salt;
    let finallpassword = md5(newpassword);
    var activationkey = crypto.randomBytes(12).toString('hex');
    let query = `UPDATE users SET password="${password}", e_password= "${finallpassword}", salt="${salt}", activationcode="${activationkey}" WHERE id="${id}"`;
    connection.query(query, function(err, result){
        if(err){
            console.log(err);
        }
        if(password === "" && repeatpassword === ""){
            res.send("please enter password");
        }
        else if(repeatpassword === ""){
            res.send("please enter password")
        }
        else if(password != repeatpassword){
            res.send("enter valid password");
        }
        else{
            res.send('success');
        }
    })
}

module.exports = {registration, login, activation, loginform, finallogin, getforgotpassword, setforgotpassword, getpassword, setpassword};