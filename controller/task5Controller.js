const connection = require('../config/config');

const monthfilter = (req,res)=>{
    console.log("insideee")
    var totalpage = 2;
    var page = Number(req.params.page);
    var totalrecords = 10;
    var recordsperpage = 5;
    var start = page * recordsperpage - recordsperpage;

    if(req.query.month == undefined){
        month = "december-2023"
    }else{
        month = req.query.month;
    }

    let newmonth;
    console.log(month)
    if(month == "december-2023"){
        newmonth = 12;
    }
    if(month == "january-2024"){
        newmonth = 1;
    }
    if(month == "february-2024"){
        newmonth = 2;
    }

    connection.query(`SELECT student_master.student_id , student_master.Name , COUNT(attendence.attendence) as att , COUNT(attendence.attendence)/31 *100 as percentage FROM student_master JOIN attendence ON student_master.student_id = attendence.student_id WHERE attendence.attendence='p' AND month(attendence.date)= ${newmonth} GROUP BY student_master.student_id, student_master.Name LIMIT ${recordsperpage} OFFSET ${start}`, (err,results)=>{
            if(err){
                console.log(err);
            }
            res.render('./task5/student_data' , {user:results, month:month, pageno:page})
        })
}

module.exports= {monthfilter};