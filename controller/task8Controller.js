const connection = require('../config/config');

const searchbydelimiter = (req,res)=>{
    // let data = req.body.query;
    // console.log(data);
    res.render('./task8/student_data', { user: false, fields: false, query: []})
}

const getdelimitersearchdata = (req,res)=>{
    let data = req.body.query;

    let f_index = findindex('_', data);

    let fname = findstring(f_index, data, "firstname");

    let l_index = findindex('^', data);

    let l_name = findstring(l_index, data, "lastname");

    let email_index = findindex('$', data);

    let email_name = findstring(email_index, data, "email");


    let age_index = findindex('}', data);

    let age = findstring(age_index, data, "Age");

    let contactNo_index = findindex('{', data);

    let contactNo = findstring(contactNo_index, data, "ContactNo");

    let city_index = findindex(':', data);

    let city = findstring(city_index, data, "City");

    const query = `SELECT * FROM delimiter_search WHERE ${fname} AND ${l_name} AND ${email_name} AND ${age} AND ${contactNo} AND  ${city}`;

    connection.query(query, (err, results, fields) => {
        if (err) {
            console.log(err);
        }
        res.render('./task8/student_data', { user: results, fields: fields, query: data });
    })
}

function findindex(operator, data) {
    let index = [];
    let result;
    for (let i = 0; i < data.length; i++) {
        if (data[i] == operator) {
            index.push(i);
        }
    }
    return index;
}

function findstring(index, data, field) {
    let arr = [];
    for (let i = 0; i < index.length; i++) {
        let str = "";
        for (let j = index[i] + 1; j < data.length; j++) {
            if (data[j] == '_') {
                break;
            }
            else if (data[j] == '^') {
                break;
            }
            else if (data[j] == '$') {
                break;
            }
            else if (data[j] == '{') {
                break;
            }
            else if (data[j] == '}') {
                break;
            }
            else if (data[j] == ':') {
                break;
            }
            else {
                str += data[j];
            }
        }
        arr.push(str);
    }

    let query = '(';
     query+= `${field} LIKE '${arr[0]}'`;
    for (let i = 1; i < arr.length; i++) {
        query += ` OR ${field} LIKE '${arr[i]}'`
    }
    query+= ')';
    return query;
}

module.exports = {searchbydelimiter, getdelimitersearchdata};