const connection = require('../config/config');

const searchbydelimiter = (req,res)=>{
    let data = req.body.query;
    res.render('./task8/student_data', { user: false, fields: false, query: data })
}

const getdelimitersearchdata = (req,res)=>{
    let data = req.body.query;

    let f_index = findindex('_', data);
    console.log("findex", f_index);

    let fname = findstring(f_index, data, "firstname");
    console.log(fname);
    console.log(typeof fname);

    let l_index = findindex('^', data);
    console.log("lindex", l_index);

    let l_name = findstring(l_index, data, "lastname");
    console.log(l_name);

    let email_index = findindex('$', data);
    // console.log(email_index);

    let email_name = findstring(email_index, data, "email");
    console.log(email_name);;


    let age_index = findindex('}', data);

    let age = findstring(age_index, data, "Age");
    console.log(age);

    let contactNo_index = findindex('{', data);

    let contactNo = findstring(contactNo_index, data, "ContactNo");
    console.log(contactNo);

    let city_index = findindex(':', data);

    let city = findstring(city_index, data, "City");
    console.log(city);

    const query = `SELECT * FROM delimiter_search WHERE ${fname} AND ${l_name} AND ${email_name} AND ${age} AND ${contactNo} AND  ${city}`;
    console.log("queryy",query);

    connection.query(query, (err, results, fields) => {
        console.log("fieldsss", fields)
        if (err) {
            console.log(err);
        }
        console.log(results);
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