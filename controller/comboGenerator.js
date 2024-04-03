const connection = require('../config/config');

const combofrom = (req,res)=>{
    try{
        res.render('./comboGenerator/data',{user:false, fields:false, data:false});
    }catch(err){
        console.log(err);
    }
}

const combodata = (req,res)=>{
    try{
    let data = req.body.name;
    data = data.replaceAll('"',"");
    data = data.trim();

    connection.query(`SELECT * FROM select_master JOIN option_master1 ON select_master.Id=option_master1.Id WHERE Select_name="${data}"`, (err,results, fields)=>{
        if(err){
            console.log(err);
        }
        if(results.length===0) {
            res.send("Error")
        }
        res.render('./comboGenerator/data', {user:results, fields:fields, data:data})
    })
    }catch(err){
        console.log(err);
    }
}

module.exports= {combodata,combofrom};