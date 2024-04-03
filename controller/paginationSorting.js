const connection = require('../config/config');

const showusers = (req, res) => {
    try {
        let totalpage = 10;
        let page = Number(req.params.page);
        let totalrecords = 100;
        let recordsperpage = 10;
        let start = page * recordsperpage - recordsperpage;
        connection.query(`SELECT * FROM  pagination LIMIT ${recordsperpage} OFFSET ${start}`, (err, results) => {
            if (err) {
                console.log(err);
            }
            res.render('./paginationSorting/student_data', { user: results, pageno: page });
        })
    } catch (err) {
        console.log(err);
    }
}

const sortfield = (req, res) => {
    try{
    let field = req.params.field;
    let page = Number(req.params.page);
    let totalrecords = 100;
    let recordsperpage = 10;
    let start = page * recordsperpage - recordsperpage;
    connection.query(`SELECT * FROM  pagination ORDER BY ${field} LIMIT ${recordsperpage} OFFSET ${start}`, (err, results) => {
        if (err) {
            console.log(err);
        }
        res.render('./paginationSorting/student_data', { user: results, pageno: page, fieldname: field });
    })
    }catch(err){
        console.log(err);
    }
}

const sortfieldaesc = (req, res) => {
    try{
    let field = req.params.field;
    let page = Number(req.params.page);
    let totalrecords = 100;
    let recordsperpage = 10;
    let start = page * recordsperpage - recordsperpage;
    connection.query(`SELECT * FROM  pagination ORDER BY ${field} LIMIT ${recordsperpage} OFFSET ${start}`, (err, results) => {
        if (err) {
            console.log(err);
        }
        res.render('./paginationSorting/student_data', { user: results, pageno: page, fieldname: field });
    })
    }catch(err){
        console.log(err);
    }
}

const sortfielddesc = (req, res) => {
    let field = req.params.field;
    let page = Number(req.params.page);
    let totalrecords = 100;
    let recordsperpage = 10;
    let start = page * recordsperpage - recordsperpage;
    connection.query(`SELECT * FROM  pagination ORDER BY  ${field} DESC LIMIT ${recordsperpage} OFFSET ${start}`, (err, results) => {
        if (err) {
            console.log(err);
        }
        res.render('./paginationSorting/student_data', { user: results, pageno: page, fieldname: field });
    })
}

module.exports = { showusers, sortfield, sortfieldaesc, sortfielddesc };

