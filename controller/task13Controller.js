const connection = require('../config/config');

const combofrom = (req,res)=>{
    res.render('./task13/data',{user:false, fields:false, data:false});
}

const combodata = (req,res)=>{
    let data = req.body.name;
    
    data = data.replaceAll('"',"");
    data = data.trim();

    connection.query(`SELECT * FROM select_master JOIN option_master1 ON select_master.Id=option_master1.Id WHERE Select_name="${data}"`, (err,results, fields)=>{
        if(err){
            console.log(err);
        }
        console.log(results);
        if(results.length===0) {
            res.send("Error")
        }
        res.render('./task13/data', {user:results, fields:fields, data:data})
    })
}

module.exports= {combodata,combofrom};