const connection = require('../config/config');
const md5 = require('md5');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const registration = (req, res) => {
    try {
        res.render('./registration/registration', { user: [{}] });
    } catch (err) {
        console.log(err);
    }
}

const login = (req, res) => {
    try {
        let name = req.body.name;
        let email = req.body.email;
        let password = req.body.password;
        let newpassword = password + salt;
        let finalpassword = md5(newpassword);
        var salt = Math.floor(1000 + Math.random() * 9000);
        var token = crypto.randomBytes(12).toString('hex');
        let query = `SELECT username, email FROM users WHERE username ="${name}" AND email="${email}"`;

        connection.query(query, function (err, result) {
            if (result.length !== 0) {
                res.render('./registration/registration', { user: result });
            }
            else {
                let query2 = `INSERT INTO users(username ,email ,password,e_password, salt, activationcode ,activationstatus) VALUES("${name}", "${email}" ,"${password}","${finalpassword}", "${salt}", "${token}", 0)`
                connection.query(query2, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        res.render('./registration/activation', { userid: result.insertId, activationkey: token });
                    }
                })
            }
        })
    } catch (err) {
        console.log(err);
    }
}

const activation = (req, res) => {
    try {
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
                        res.send("<p>activation successfully</p><a href='/main/loginform'>Login Form</a>");
                    });
                }
            }
        })
    } catch (err) {
        console.log(err);
    }
}

const loginform = (req, res) => {
    try {
        res.render('./registration/loginform', {user: [{}] });
    } catch (err) {
        console.log(err);
    }
}

const finallogin = (req, res) => {
    try {
        let name = req.body.name;
        let password = req.body.password;
        const payload = { name: name };
        const jwtToken = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
        let query = `SELECT username , password ,activationstatus FROM users WHERE username="${name}" AND password="${password}" AND activationstatus=1`
        connection.query(query, function (err, result) {
            if (err) {
                console.log(err);
            }
            else if (result.length > 0) {
                res.cookie("jwtToken", jwtToken);
                res.redirect('/main/tasks');
            }
            else if(name == "" || password == ""){
                res.send("please enter username and password")
            }
            else {
                res.send("invalid username or password");
            }
        })
    } catch (err) {
        console.log(err);
    }
}

const dashboard = (req, res) => {
    try {
        res.render('./registration/dashboard')
    } catch (err) {
        console.log(err);
    }
}

const getforgotpassword = (req, res) => {
    try {
        res.render('./registration/forgotpassword');
    } catch (err) {
        console.log(err);
    }
}

const setforgotpassword = (req, res) => {
    try {
        let name = req.body.name;
        let query = `SELECT * FROM users WHERE username="${name}" OR email="${name}"`
        connection.query(query, function (err, result) {
            if (err) {
                console.log(err);
            }
            if (result.length > 0) {
                res.send(`<p>User Validated Successfully</p><a href='/main/setpassword/${result[0].id}'>Click here</a>`)
            } else {
                res.send('invalid username or email')
            }
        })
    } catch (err) {
        console.log(err);
    }
}

const getpassword = (req, res) => {
    try {
        let id = req.params.id;
        res.render('./registration/setpassword', { id: id });
    } catch (err) {
        console.log(err);
    }
}

const setpassword = (req, res) => {
    try {
        let password = req.body.password;
        let id = req.params.id;
        let repeatpassword = req.body.repassword;
        let salt = Math.floor(1000 + Math.random() * 9000);
        let newpassword = password + salt;
        let finallpassword = md5(newpassword);
        var activationkey = crypto.randomBytes(12).toString('hex');
        let query = `UPDATE users SET password="${password}", e_password= "${finallpassword}", salt="${salt}", activationcode="${activationkey}" WHERE id="${id}"`;
        connection.query(query, function (err, result) {
            if (err) {
                console.log(err);
            }
            if (password === "" && repeatpassword === "") {
                res.send("please enter password");
            }
            else if (repeatpassword === "") {
                res.send("please enter password")
            }
            else if (password != repeatpassword) {
                res.send("enter valid password");
            }
            else {
                res.send('success');
            }
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = { registration, login, activation, loginform, finallogin, getforgotpassword, setforgotpassword, getpassword, setpassword, dashboard };