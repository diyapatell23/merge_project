const connection = require('../config/config');

const searchquery = (req, res) =>{
    try{
        res.render('./dynamicSearch/student_data_search', { fields: false, user: false, query: false, pageno: false, totalpage: false });
    }catch(err){
        console.log(err);
    }
}

const getquerydata = (req, res) =>{
    try{
    let page = Number(req.query.page);
    let recordsperpage = 10;
    let start = page * recordsperpage - recordsperpage;
    let limit = ` LIMIT ${recordsperpage} OFFSET ${start}`;
    let query_name = req.body.query;
    let f_query = `${query_name} ${limit}`;
    let final_query;

    if (query_name.includes("LIMIT")){
        final_query = query_name
    }
    else {
        final_query = f_query
    }
    connection.query(`${final_query}`, (err, results) => {
        if (err) {
            console.log(err);
            res.send('invalid query');
        }
        connection.query(`${query_name}`, (err, results2, fields) =>{
            if (err) {
                console.log(err)
            }
            let length = results2.length;
            let totalpage = length / recordsperpage;
            res.render('./dynamicSearch/student_data_search', { fields: fields, user: results, user2: results2, query: query_name, pageno: page, totalpage: totalpage })
        })
    })
    }catch(err){
        console.log(err);
    }
}

module.exports = {searchquery, getquerydata};