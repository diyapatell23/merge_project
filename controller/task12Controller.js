
const connection = require('../config/config');

const form = (req,res)=>{
    res.render('./task12/form', { user: [{}], user2: [{}, {}, {}], user3: [{}, {}], user4: [{}, {}, {}], user5: [{}, {}, {}], user6: [{}], user7: [{}], id: false });
}

const basicdetail = (req,res)=>{
    let data = req.body;
    console.log("dataaa",data);
    let fname = req.body.fname;
    let lname = req.body.lname;
    let designation = req.body.designation;
    let address1 = req.body.address1;
    let contact = req.body.contact;
    let address2 = req.body.address2;
    let email = req.body.email;
    let city = req.body.city;
    let gender = req.body.gender;
    let state = req.body.state;
    let zipcode = req.body.zipcode;
    let date = req.body.date;
    console.log(contact);
    console.log(gender);
    console.log(fname);
    const query = `INSERT INTO basic_detail( Fname, Lname, Designation,Email, Phone_No,Address_1, Address_2,State, City,Gender,Zip_code,DoB) VALUES("${fname}","${lname}", "${designation}","${email}", "${contact}","${address1}","${address2}","${state}","${city}","${gender}", "${zipcode}", "${date}")`;
    connection.query(query, function (err, data1) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(data1);
            console.log("iddddd", data1.insertId);
            let id = data1.insertId;
            // call(id);
            return callback(null,result.insertId);
        }
    })
    res.send("data added successfully");
}
 function call(id){
    const educationdetail = (req,res)=>{
        let data2 = req.body;
        console.log(data2);
        let education_detail1 = req.body.education_detail1;
        let education_detail2 = req.body.education_detail2;
        let education_detail3 = req.body.education_detail3;
        let year1 = req.body.year1;
        let year2 = req.body.year2;
        let year3 = req.body.year3;
        let percentage1 = req.body.percentage1;
        let percentage2 = req.body.percentage2;
        let percentage3 = req.body.percentage3;
        let educational_detail = [];
        educational_detail.push(education_detail1, education_detail2, education_detail3)
        let year = [];
        year.push(year1, year2, year3);
        let percentage = [];
        percentage.push(percentage1, percentage2, percentage3);
        for (let i = 0; i < educational_detail.length; i++) {
            const query2 = `INSERT INTO educational_detail(id,board_name , year, percentage) VALUES("${id}","${educational_detail[i]}", "${year[i]}","${percentage[i]}")`;
            connection.query(query2, function (err, result1) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(result1);
                }
            })
        }
        res.send("data added successfully");
    }

    const workexperience = (req,res)=>{
        let data3 = req.body;
        console.log(data3);
        let company1 = req.body.company1;
        let company2 = req.body.company2;
        let designation1 = req.body.designation1;
        let designation2 = req.body.designation2;
        let from1 = req.body.from1;
        let from2 = req.body.from2;
        let to1 = req.body.to1;
        let to2 = req.body.to2;
        let company = [];
        company.push(company1, company2);
        let designation = [];
        designation.push(designation1, designation2);
        let from = [];
        from.push(from1, from2);
        let to = [];
        to.push(to1, to2);
        for (let i = 0; i < company.length; i++) {
            const query2 = `INSERT INTO work_experience(id,company1_Name, company1_Designation, company1_Joiningdate,company1_Leavingdate) VALUES("${id}","${company[i]}", "${designation[i]}", "${from[i]}", "${to[i]}")`;
            connection.query(query2, function (err, result2) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(result2);
                }
            })
        }
    }

    const languages = (req,res)=>{
        let data4 = req.body;
        console.log(data4);
        let language = req.body.language;
        let htype = req.body.htype;
        let etype = req.body.etype;
        let gtype = req.body.gtype;
        for (let i = 0; i < language.length; i++) {
            if (language[i] === "hindi") {
                let read = null;
                let write = null;
                let speak = null;
                htype.forEach((element) => {
                    if (element == "read") {
                        read = "yes";
                    }
                    if (element == "write") {
                        write = "yes";
                    }
                    if (element == "speak") {
                        speak = "yes";
                    }
                })
                const query4 = `INSERT INTO languages(id ,language, L_read , L_write, L_speak) VALUES("${id}","${language[i]}", "${read}" , "${write}" , "${speak}")`;
                connection.query(query4, function (err, result3) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result3);
                    }
                })
            }
            if (language[i] === "english") {
                let read = null;
                let write = null;
                let speak = null;
                etype.forEach((element) => {
                    if (element == "read") {
                        read = "yes";
                    }
                    if (element == "write") {
                        write = "yes";
                    }
                    if (element == "speak") {
                        speak = "yes";
                    }
                })
                const query4 = `INSERT INTO languages(id ,language, L_read , L_write, L_speak) VALUES("${id}","${language[i]}", "${read}" , "${write}" , "${speak}")`;
                connection.query(query4, function (err, result3) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result3);
                    }
                })
            }
            if (language[i] === "gujarati") {
                let read = null;
                let write = null;
                let speak = null;
                gtype.forEach((element) => {
                    if (element == "read") {
                        read = "yes";
                    }
                    if (element == "write") {
                        write = "yes";
                    }
                    if (element == "speak") {
                        speak = "yes";
                    }
                })
                const query4 = `INSERT INTO languages(id ,language, L_read , L_write, L_speak) VALUES("${id}","${language[i]}", "${read}" , "${write}" , "${speak}")`;
                connection.query(query4, function (err, result3) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result3);
                    }
                })
            }
        }
    }

    const technologies = (req,res)=>{
        let data5 = req.body;
        console.log(data5);
        let ptype = req.body.ptype;
        let ltype = req.body.ltype;
        let mtype = req.body.mtype;
        let otype = req.body.otype;
        let type = req.body.types;

        for (let i = 0; i < type.length; i++) {
            if (type[i] === "php") {
                const query = `INSERT INTO technologies_known(id , tech_name ,tech_level) VALUES("${id}", "${type[i]}", "${ptype}")`;
                connection.query(query, function (err, result4) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result4);
                    }
                })
            }
            if (type[i] === "mysql") {
                const query = `INSERT INTO technologies_known(id , tech_name ,tech_level) VALUES("${id}", "${type[i]}", "${mtype}")`;
                connection.query(query, function (err, result4) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result4);
                    }
                })
            }
            if (type[i] === "larave") {
                const query = `INSERT INTO technologies_known(id , tech_name ,tech_level) VALUES("${id}", "${type[i]}", "${ltype}")`;
                connection.query(query, function (err, result4) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result4);
                    }
                })
            }
            if (type[i] === "oracle") {
                const query = `INSERT INTO technologies_known(id , tech_name ,tech_level) VALUES("${id}", "${type[i]}", "${otype}")`;
                connection.query(query, function (err, result4) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result4);
                    }
                })
            }
        }
    }

    const reference = (req,res)=>{
        var data6 = req.body;
        console.log(data6);
        let reference_name = req.body.reference_name;
        let reference_contact = req.body.reference_contact;
        let relation = req.body.reference_relation;
        const query = `INSERT INTO reference_contact(id,person_name, person_contactNo, person_relation) VALUES("${id}","${reference_name}", "${reference_contact}", "${relation}")`;
        connection.query(query, function (err, result5) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(result5);
            }
        })
    }

    const preferances = (req,res)=>{
        let data7 = req.body;
        console.log(data7);
        let preferedLocation = req.body.preferedlocation;
        let noticeperiod = req.body.noticeperiod;
        let expectedCTC = req.body.Expected_CTC;
        let currentCTC = req.body.Current_CTC;
        let Department = req.body.dept;
        let query = `INSERT INTO preferences(id , Prefered_location,Notice_period,Expected_CTC,Current_CTC,Department) VALUES("${id}", "${preferedLocation}", "${noticeperiod}" , "${expectedCTC}" , "${currentCTC}", "${Department}")`;
        connection.query(query, function (err, result6) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(result6);

            }
        })
        res.send("data added succesfully");
    }

}
module.exports = {form, basicdetail, educationdetail, workexperience, technologies , reference, preferances, languages};