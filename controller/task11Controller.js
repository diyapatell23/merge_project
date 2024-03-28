const connection = require('../config/config');


const form = (req,res)=>{
    res.render('./task11/formmain', { user: [{}], user2: [{}, {}, {}], user3: [{}, {}], user4: [{}, {}, {}], user5: [{}, {}, {}], user6: [{}], user7: [{}] });
}

const adduser = (req,res)=>{
    let data = req.body;
    console.log("dataaaaa",data);
    let fname = req.body.fname;
    let lname = req.body.lname;
    let designation = req.body.designation;
    let address1 = req.body.address1;
    let contact = req.body.contact_no;
    let address2 = req.body.address2;
    let email = req.body.email;
    let city = req.body.City;
    let gender = req.body.gender;
    let state = req.body.state;
    let zipcode = req.body.zipcode;
    let date = req.body.date;
    let educational_detail = req.body.education_detail;
    let year = req.body.year;
    let percentage = req.body.percentage;
    let company = req.body.company1;
    let c_designation = req.body.designation1;
    let joining_date = req.body.from1;
    let leave_date = req.body.to1;
    let language = req.body.language;
    let htype = req.body.htype;
    let etype = req.body.etype;
    let gtype = req.body.gtype;
    let type = req.body.type;
    let ptype = req.body.ptype;
    let mtype = req.body.mtype;
    let otype = req.body.otype;
    let ltype = req.body.ltype;
    let reference_name = req.body.name1;
    let reference_contact = req.body.contact1;
    let relation = req.body.relation1;
    let preferedLocation = req.body.preferedlocation;
    let noticeperiod = req.body.noticeperiod;
    let expectedCTC = req.body.Expected_CTC;
    let currentCTC = req.body.Current_CTC;
    let Department = req.body.dept;
    const errors = validateform(data);

    if (errors.length === 0) {
        res.send("data added succesfully");
    }
    else {
        res.json({ errors });
    }

    const query = `INSERT INTO basic_detail( Fname, Lname, Designation,Email, Phone_No,Address_1, Address_2,State, City,Gender,Zip_code,DoB) VALUES("${fname}","${lname}", "${designation}","${email}", "${contact}","${address1}","${address2}","${state}","${city}","${gender}", "${zipcode}", "${date}")`;

    connection.query(query, function (err, data) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(data);
            console.log("iddddd", data.insertId);
            let id = data.insertId
            call(id);
        }
    })

    function call(id) {

        //education_detail insert

        if (typeof educational_detail === "string") {
            const query2 = `INSERT INTO educational_detail(id,board_name , year, percentage) VALUES("${id}","${educational_detail}", "${year}","${percentage}")`;
            connection.query(query2, function (err, result) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(result);
                }
            })
        }
        else {
            for (let i = 0; i < educational_detail.length; i++) {
                let arr = [];
                arr.push(educational_detail, year, percentage)
                const query2 = `INSERT INTO educational_detail(id,board_name , year, percentage) VALUES("${id}","${arr[0][i]}", "${arr[1][i]}","${arr[2][i]}")`;
                connection.query(query2, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result);
                    }
                })
            }

        }

        //work experience insert

        if (typeof company === "string") {
            const query3 = `INSERT INTO work_experience(id,company1_Name, company1_Designation, company1_Joiningdate,company1_Leavingdate) VALUES("${id}","${company}", "${c_designation}", "${joining_date}", "${leave_date}")`;
            connection.query(query3, function (err, result2) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(result2);
                }
            })
        }

        else {
            for (let i = 0; i < company.length; i++) {
                let arr = [];
                arr.push(company, c_designation, joining_date, leave_date);
                const query3 = `INSERT INTO work_experience(id,company1_Name, company1_Designation, company1_Joiningdate,company1_Leavingdate) VALUES("${id}","${arr[0][i]}", "${arr[1][i]}", "${arr[2][i]}", "${arr[3][i]}")`;
                connection.query(query3, function (err, result2) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result2);
                    }
                })
            }
        }

        //language insert

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

        //technologies insert
        for (let i = 0; i < type.length; i++) {
            if (type[i] === "php") {
                const query = `INSERT INTO technologies_known(id , tech_name ,tech_level) VALUES("${id}", "${type[i]}", "${ptype}")`;
                connection.query(query, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result);
                    }
                })
            }
            if (type[i] === "mysql") {
                const query = `INSERT INTO technologies_known(id , tech_name ,tech_level) VALUES("${id}", "${type[i]}", "${mtype}")`;
                connection.query(query, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result);
                    }
                })
            }
            if (type[i] === "larave") {
                const query = `INSERT INTO technologies_known(id , tech_name ,tech_level) VALUES("${id}", "${type[i]}", "${ltype}")`;
                connection.query(query, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result);
                    }
                })
            }
            if (type[i] === "oracle") {
                const query = `INSERT INTO technologies_known(id , tech_name ,tech_level) VALUES("${id}", "${type[i]}", "${otype}")`;
                connection.query(query, function (err, result) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result);
                    }
                })
            }
        }

        //reference contact insert
        if (typeof reference_name === "string") {
            const query = `INSERT INTO reference_contact(id,person_name, person_contactNo, person_relation) VALUES("${id}","${reference_name}", "${reference_contact}", "${relation}")`;
            connection.query(query, function (err, result2) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(result2);
                }
            })
        }
        else {
            for (let i = 0; i < reference_name.length; i++) {
                let arr = [];
                arr.push(reference_name, reference_contact, relation);
                const query = `INSERT INTO reference_contact(id,person_name, person_contactNo, person_relation) VALUES("${id}","${arr[0][i]}", "${arr[1][i]}", "${arr[2][i]}")`;
                connection.query(query, function (err, result2) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result2);
                    }
                })
            }
        }

        //preferences insert 
        let query = `INSERT INTO preferences(id , Prefered_location,Notice_period,Expected_CTC,Current_CTC,Department) VALUES("${id}", "${preferedLocation}", "${noticeperiod}" , "${expectedCTC}" , "${currentCTC}", "${Department}")`;
        connection.query(query, function (err, result) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(result);

            }
        })
    }
}

const getuser = (req,res)=>{
    var userId = req.params.id;
    var query = `SELECT * FROM basic_detail WHERE Eid="${userId}"`;
    connection.query(query, function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("reuslt", result);
        }
        connection.query(`SELECT * FROM educational_detail WHERE id="${userId}"`, function (err, result2) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("result2", result2);
            }
            connection.query(`SELECT * FROM work_experience WHERE id = "${userId}"`, function (err, result3) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("result3", result3);
                }
                connection.query(`SELECT * FROM languages WHERE id = "${userId}"`, function (err, result4) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log("result4", result4);
                    }
                    connection.query(`SELECT * FROM technologies_known WHERE id= "${userId}"`, function (err, result5) {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            console.log("result5", result5);
                        }
                        connection.query(`SELECT * FROM reference_contact WHERE id="${userId}"`, function (err, result6) {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                console.log("result6", result6);
                            }
                            connection.query(`SELECT * FROM preferences WHERE id="${userId}"`, function (err, result7) {
                                if (err) {
                                    console.log(err);
                                }
                                else {
                                    console.log("result7", result7);
                                    res.render('./task11/formmain', { user: result, user2: result2, user3: result3, user4: result4, user5: result5, user6: result6, user7: result7, id: userId });
                                }
                            })
                        })
                    })
                })
            })
        })
    })
}

const updateuser = (req,res)=>{
    var id = req.params.id;
    let fname = req.body.fname;
    let lname = req.body.lname;
    let designation = req.body.designation;
    let address1 = req.body.address1;
    let contact = req.body.contact_no;
    let address2 = req.body.address2;
    let email = req.body.email;
    let city = req.body.City;
    let gender = req.body.gender;
    let state = req.body.state;
    let zipcode = req.body.zipcode;
    let date = req.body.date;
    let educational_detail = req.body.education_detail;
    let year = req.body.year;
    let percentage = req.body.percentage;
    let htype = req.body.htype;
    let etype = req.body.etype;
    let gtype = req.body.gtype;
    let language = req.body.language;
    let reference_name = req.body.name1;
    let reference_contact = req.body.contact1;
    let relation = req.body.relation1;
    let preferedLocation = req.body.preferedlocation;
    let noticeperiod = req.body.noticeperiod;
    let expectedCTC = req.body.Expected_CTC;
    let currentCTC = req.body.Current_CTC;
    let Department = req.body.dept;
    let edu_id = req.body.edu_id;
    let type = req.body.type;
    let ptype = req.body.ptype;
    let mtype = req.body.mtype;
    let otype = req.body.otype;
    let ltype = req.body.ltype;

    var query = `UPDATE basic_detail SET Fname ="${fname}", Lname="${lname}", Designation="${designation}", Email="${email}", Phone_No= "${contact}", Address_1="${address1}", Address_2="${address2}", State="${state}",City="${city}",Gender="${gender}", Zip_code="${zipcode}" , DoB="${date}" WHERE Eid = "${id}"`;
    connection.query(query, function (err, result10) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result10);
            res.send('data updated');
            

            //educational detail
            for (let i = 0; i < educational_detail.length; i++) {
                let arr = [];
                arr.push(educational_detail, year, percentage)
                const query = `SELECT board_name FROM educational_detail`;
                const query2 = `UPDATE educational_detail SET board_name= "${arr[0][i]}" , year ="${arr[1][i]}", percentage="${arr[2][i]}" WHERE id="${id}" AND edu_id="${edu_id[i]}"`;
                console.log("eduicatiwrjfgmvf", edu_id);
                connection.query(query2, function (err, result2) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result2);
                    }
                })
            }
            
            //language update 
            let query = `SELECT language FROM languages WHERE id="${id}"`;
            connection.query(query, function (err, result) {
                if (err) {
                    console.log(err);
                }
                let languages = []
                result.forEach((element) => {
                    languages.push(element.language)
                })
                console.log(languages)
                for (let i = 0; i < language.length; i++){
                    if (language[i] === "hindi") {
                        console.log("inside hindi")
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
                        let query5;
                        if (languages.includes("hindi")) {
                            query5 = `UPDATE languages SET language="${language[i]}" , L_read="${read}", L_write="${write}" , L_speak="${speak}" WHERE id=${id} AND language="${language[i]}"`;
                        }
                        else {
                            query5 = `INSERT INTO languages(id ,language, L_read , L_write, L_speak) VALUES("${id}","${language[i]}", "${read}" , "${write}" , "${speak}")`;
                        }

                        connection.query(query5, function (err, result3) {
                            console.log("result33333333333333", result3)
                            if (err) {
                                console.log(err);
                            }
                            else {
                                console.log("result hindi")
                            }
                        })
                    }
                    if (language[i] === "english") {
                        console.log("inside english")
                        let read = null;
                        let write = null;
                        let speak = null;
                        etype.forEach((element) => {
                            console.log("hellooooooooo", element)
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
                        let query4;
                        if (languages.includes("english")) {
                            query4 = `UPDATE languages SET language="${language[i]}" , L_read="${read}", L_write="${write}" , L_speak="${speak}" WHERE id=${id} AND language="${language[i]}"`;
                        }
                        else {
                            query4 = `INSERT INTO languages(id ,language, L_read , L_write, L_speak) VALUES("${id}","${language[i]}", "${read}" , "${write}" , "${speak}")`;
                        }
                        console.log(query4)
                        connection.query(query4, function (err, result3) {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                console.log("result english")

                            }
                        })
                    }
                    if (language[i] === "gujarati") {
                        console.log("inside gujarati")

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
                        let query4;
                        if (languages.includes("gujarati")) {
                            query4 = `UPDATE languages SET language="${language[i]}" , L_read="${read}", L_write="${write}" , L_speak="${speak}" WHERE id=${id} AND language="${language[i]}"`;
                            console.log("query55555", query4)
                        }
                        else {
                            query4 = `INSERT INTO languages(id ,language, L_read , L_write, L_speak) VALUES("${id}","${language[i]}", "${read}" , "${write}" , "${speak}")`;
                        }


                        connection.query(query4, function (err, result3) {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                console.log("result gujarati")

                            }
                        })
                    }
                }
            })

            //techonlogies update 
            let newquery = `SELECT tech_name FROM technologies_known WHERE id="${id}"`;
            connection.query(newquery, function(err, result){
                console.log('newqueryyy', result);
                if(err){
                    console.log(err);
                }
                let tech =[];
                result.forEach((element) => {
                    tech.push(element.tech_name);
                })
                for (let i = 0; i < type.length; i++) {
                    if (type[i] === "php") {
                        let query;
                        if (tech.includes("php")) {
                            query =`UPDATE technologies_known SET tech_name="${type[i]}" ,tech_level="${ptype}" WHERE id=${id}`
                        }
                        else{
                             query = `INSERT INTO technologies_known(id , tech_name ,tech_level) VALUES("${id}", "${type[i]}", "${ptype}")`;
                            
                        }
                        connection.query(query, function (err, result) {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                console.log(result);
                            }
                        })
                    }
                    if (type[i] === "mysql")
                    {
                        let query;
                        if (tech.includes("mysql")) {
                            query =`UPDATE technologies_known SET tech_name="${type[i]}", tech_level="${mtype}" WHERE id=${id}`
                        }
                        else{
                             query = `INSERT INTO technologies_known(id , tech_name ,tech_level) VALUES("${id}", "${type[i]}", "${mtype}")`;
                            
                        }
                        connection.query(query, function (err, result) {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                console.log(result);
                            }
                        })
                    }
                    if (type[i] === "larave") {
                        let query;
                        if (tech.includes("larave")) {
                            query =`UPDATE technologies_known SET tech_name="${type[i]}", tech_level="${ltype}" WHERE id=${id}`
                        }
                        else{
                             query = `INSERT INTO technologies_known(id , tech_name ,tech_level) VALUES("${id}", "${type[i]}", "${ltype}")`;   
                        }
                        connection.query(query, function (err, result) {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                console.log(result);
                            }
                        })
                    }
                    if (type[i] === "oracle") {
                        let query;
                        if (tech.includes("oracle")) {
                            query =`UPDATE technologies_known SET tech_name="${type[i]}", tech_level="${otype}" WHERE id=${id}`
                        }
                        else{
                             query = `INSERT INTO technologies_known(id , tech_name ,tech_level) VALUES("${id}", "${type[i]}", "${otype}")`;
                        }
                        console.log("techqueryyyy", query)
                        connection.query(query, function (err, result) {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                console.log(result);
                            }
                        })
                    }
                }
            })


            // reference contact
                let query11 = `UPDATE reference_contact SET person_name="${reference_name}", person_contactNo ="${reference_contact}" , person_relation="${relation}" WHERE id="${id}"`;
                connection.query(query11, function (err, result2) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(result2);
                    }
                })

            //preferances
                const query6= `UPDATE preferences SET prefered_location="${preferedLocation}" ,Notice_period="${noticeperiod}", Expected_CTC="${expectedCTC}",Current_CTC="${currentCTC}",Department="${Department}" WHERE id="${id}"`;
                connection.query(query6, function(err, result){
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log(result);
                    }
                })
        }
    })
}

function validateform(data) {
    let errors = [];

    if (data.fname == "") {
        errors.push("please enter firstname");
    }
    if (data.fname.length > 20) {
        errors.push("please enter valid name");
    }
    return errors;
}

module.exports = {form, adduser, getuser, updateuser};