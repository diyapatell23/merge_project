const connection = require('../config/config');

const searchquery = (req, res) => {
    console.log("seaarchqueryy")
    if (req.body.page == '') {
        res.redirect('?page=1')
    }
    res.render('./task7/student_data_search', { fields: false, user: false, query: false, pageno: false, totalpage: false });
}

const getquerydata = (req, res) => {
    console.log("getdataa");
    var page = Number(req.query.page);
    var recordsperpage = 10;
    var start = page * recordsperpage - recordsperpage;
    let limit = ` LIMIT ${recordsperpage} OFFSET ${start}`;
    let query_name = req.body.query;
    let f_query = `${query_name} ${limit}`;
    let final_query;

    if (query_name.includes("LIMIT")) {
        final_query = query_name
    }
    else {
        final_query = f_query
    }
    connection.query(`${final_query}`, (err, results, fields) => {
        if (err) {
            console.log(err);
            res.send('invalid query');
        }

        connection.query(`${query_name}`, (err, results2, fields) => {
            if (err) {
                console.log(err)
            }
            let length = results2.length;
            let totalpage = length / recordsperpage;

            res.render('./task7/student_data_search', { fields: fields, user: results, user2: results2, query: query_name, pageno: page, totalpage: totalpage })
        })
    })
}

module.exports = {searchquery, getquerydata};