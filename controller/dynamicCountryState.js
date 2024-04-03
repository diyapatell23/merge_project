const connection = require('../config/config');

const getdata = (req, res) => {
    try {
        let query = `SELECT DISTINCT country FROM country_state_city`;
        connection.query(query, function (err, result) {
            if (err) {
                console.log(err);
            }
            res.render('./dynamicCountryState/data', { country: result });
        })
    } catch (err) {
        console.log(err);
    }
}

const showstate = (req, res) => {
    try {
        let country = req.params.name;
        let query2 = `select DISTINCT state from country_state_city WHERE country="${country}"`;
        connection.query(query2, function (err, result2) {
            if (err) {
                console.log(err);
            }
            else {
                res.json({ states: result2 });
            }
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = { showstate, getdata };