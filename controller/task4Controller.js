const connection = require('../config/config');

const showusers = (req,res)=>{
    var totalpage = 10;
    var page = Number(req.params.page);
    var totalrecords = 100;
    var recordsperpage = 10;
    
    var start = page * recordsperpage - recordsperpage;
    connection.query(`SELECT * FROM  pagination LIMIT ${recordsperpage} OFFSET ${start}`, (err,results)=>{
        if(err){
            console.log(err);
        }
        res.render('./task4/student_data',{user:results, pageno:page});
    })
}

const sortfield = (req,res)=>{
    var field = req.params.field;
    var page = Number(req.params.page);
    var totalrecords = 100;
    var recordsperpage = 10;
    var start = page * recordsperpage - recordsperpage;
   connection.query(`SELECT * FROM  pagination ORDER BY ${field} LIMIT ${recordsperpage} OFFSET ${start}` , (err, results)=>{
    if(err){
        console.log(err);
    }
    res.render('./task4/student_data', {user:results,  pageno:page, fieldname:field});
   })
}

const sortfieldaesc = (req, res)=>{
    var field = req.params.field;
    var page = Number(req.params.page);
    var totalrecords = 100;
    var recordsperpage = 10;
    var start = page * recordsperpage - recordsperpage;
   connection.query(`SELECT * FROM  pagination ORDER BY ${field} LIMIT ${recordsperpage} OFFSET ${start}` , (err, results)=>{
    if(err){
        console.log(err);
    }
    res.render('./task4/student_data', {user:results,  pageno:page, fieldname:field});
   })
}

const sortfielddesc = (req,res)=>{
    var field = req.params.field;
    var page = Number(req.params.page);
    var totalrecords = 100;
    var recordsperpage = 10;
    var start = page * recordsperpage - recordsperpage;
   connection.query(`SELECT * FROM  pagination ORDER BY  ${field} DESC LIMIT ${recordsperpage} OFFSET ${start}` , (err, results)=>{
    if(err){
        console.log(err);
    }
    res.render('./task4/student_data', {user:results,  pageno:page, fieldname:field});
   })
}

module.exports = {showusers, sortfield , sortfieldaesc, sortfielddesc};

