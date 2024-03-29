const connection = require('../config/config');


const getdata = (req,res)=>{
    let query = `SELECT DISTINCT country FROM country_state_city`;
    connection.query(query, function(err, result){
        if(err){
            console.log(err);
        }
        res.render('./task14/data',{country:result});        
    })
}

const showstate = (req,res)=>{
    console.log("hello")
    let country = req.params.name;
    console.log("country", country);
            let query2 = `select DISTINCT state from country_state_city WHERE country="${country}"`;
            console.log(query2)
            connection.query(query2, function(err, result2){
                if(err){
                    console.log(err);
                }
                else{
                    console.log(result2)
                    res.json({states:result2});
                }
            })
}

module.exports = {showstate, getdata};