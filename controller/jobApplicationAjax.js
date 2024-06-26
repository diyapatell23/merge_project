
const connection = require('../config/config');
const { result } = require('./resultGrid');


const screen= (req,res)=>{
    res.render('./jobApplicationAjax/screen');
}

const form = (req, res) => {
    try {
        res.render('./jobApplicationAjax/form', { user: [{}], user2: [{}, {}, {}], user3: [{}, {}], user4: [{}, {}, {}], user5: [{}, {}, {}], user6: [{}], user7: [{}], id: false });
    } catch (err) {
        console.log(err);
    }
}


const basicdetail = (req, res) => {
    try {
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

        const query = `INSERT INTO basic_detail( Fname, Lname, Designation,Email, Phone_No,Address_1, Address_2,State, City,Gender,Zip_code,DoB) VALUES("${fname}","${lname}", "${designation}","${email}", "${contact}","${address1}","${address2}","${state}","${city}","${gender}", "${zipcode}", "${date}")`;
        connection.query(query, function (err, data1) {
            let id;
            if (err) {
                console.log(err);
            }
            else {
                id = data1.insertId;
            }
            res.json({
                id: id,
                message: "data added successfully"
            });
        })
    } catch (err) {
        console.log(err);
    }
}

const educationdetail = (req, res) => {
    try {
        let id = req.params.userid;
        let data2 = req.body;
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
            })
        }
    } catch (err) {
        console.log(err);
    }
}

const workexperience = (req, res) => {
    try {
        let id = req.params.userid;
        let data3 = req.body;
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
            })
        }
    } catch (err) {
        console.log(err);
    }
}

const languages = (req, res) => {
    try {
        let id = req.params.userid;
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
                })
            }
        }
    } catch (err) {
        console.log(err);
    }
}

const technologies = (req, res) => {
    try {
        let id = req.params.userid;
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
                })
            }
            if (type[i] === "mysql") {
                const query = `INSERT INTO technologies_known(id , tech_name ,tech_level) VALUES("${id}", "${type[i]}", "${mtype}")`;
                connection.query(query, function (err, result4) {
                    if (err) {
                        console.log(err);
                    }
                })
            }
            if (type[i] === "larave") {
                const query = `INSERT INTO technologies_known(id , tech_name ,tech_level) VALUES("${id}", "${type[i]}", "${ltype}")`;
                connection.query(query, function (err, result4) {
                    if (err) {
                        console.log(err);
                    }
                })
            }
            if (type[i] === "oracle") {
                const query = `INSERT INTO technologies_known(id , tech_name ,tech_level) VALUES("${id}", "${type[i]}", "${otype}")`;
                connection.query(query, function (err, result4) {
                    if (err) {
                        console.log(err);
                    }
                })
            }
        }
    } catch (err) {
        console.log(err);
    }
}

const reference = (req, res) => {
    try {
        let id = req.params.userid;
        let reference_name = req.body.reference_name;
        let reference_contact = req.body.reference_contact;
        let relation = req.body.reference_relation;
        const query = `INSERT INTO reference_contact(id,person_name, person_contactNo, person_relation) VALUES("${id}","${reference_name}", "${reference_contact}", "${relation}")`;
        connection.query(query, function (err, result5) {
            if (err) {
                console.log(err);
            }
        })
    } catch (err) {
        console.log(err);
    }
}

const preferances = (req, res) => {
    try {
        let id = req.params.userid;
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
        })
    } catch (err) {
        console.log(err);
    }
}

const insertform = (req, res) => {
    res.send("data inserted successfully");
}

const showusers = (req,res)=>{
    try {
        var query = `SELECT Eid FROM basic_detail`;
        connection.query(query, function (err, result){
            if (err) {
                console.log(err);
            }
            res.render("./jobApplicationAjax/showusers", {user:result});
        })
    } catch (err) {
        console.log(err)
    }
}

const getformdata = (req, res) => {
    try {
        var userId = req.params.id;
        var query = `SELECT * FROM basic_detail WHERE Eid="${userId}"`;
        connection.query(query, function (err, result) {
            if (err) {
                console.log(err);
            }
            connection.query(`SELECT * FROM educational_detail WHERE id="${userId}"`, function (err, result2) {
                if (err) {
                    console.log(err);
                }
                connection.query(`SELECT * FROM work_experience WHERE id = "${userId}"`, function (err, result3) {
                    if (err) {
                        console.log(err);
                    }
                    connection.query(`SELECT * FROM languages WHERE id = "${userId}"`, function (err, result4) {
                        if (err) {
                            console.log(err);
                        }
                        connection.query(`SELECT * FROM technologies_known WHERE id= "${userId}"`, function (err, result5) {
                            if (err) {
                                console.log(err);
                            }
                            connection.query(`SELECT * FROM reference_contact WHERE id="${userId}"`, function (err, result6) {
                                if (err) {
                                    console.log(err);
                                }
                                connection.query(`SELECT * FROM preferences WHERE id="${userId}"`, function (err, result7) {
                                    if (err) {
                                        console.log(err);
                                    }
                                    else {
                                        return res.render('./jobApplicationAjax/form', { user: result, user2: result2, user3: result3, user4: result4, user5: result5, user6: result6, user7: result7, id: userId });
                                    }
                                })
                            })
                        })
                    })
                })
            })
        })
    } catch (err) {
        console.log(err);
    }
}

const updatebasicdetail = (req, res) => {
    try {
        var id = req.body.id;
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
        var query = `UPDATE basic_detail SET Fname ="${fname}", Lname="${lname}", Designation="${designation}", Email="${email}", Phone_No= "${contact}", Address_1="${address1}", Address_2="${address2}", State="${state}",City="${city}",Gender="${gender}", Zip_code="${zipcode}" , DoB="${date}" WHERE Eid = "${id}"`;
        connection.query(query, function (err, result10) {
            if (err) {
                console.log(err);
            }
        })
    } catch (err) {
        console.log(err);
    }
}

const updateeducationdetail = (req, res) => {
    try {
        let id = req.body.id;
        let edu_id = req.body.edu_id;
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
            const query2 = `UPDATE educational_detail SET board_name= "${educational_detail[i]}" , year ="${year[i]}", percentage="${percentage[i]}" WHERE id="${id}" AND edu_id="${edu_id[i]}"`;
            connection.query(query2, function (err, result1) {
                if (err) {
                    console.log(err);
                }
            })
        }
    } catch (err) {
        console.log(err);
    }
}

const updatework_experience = (req, res) => {
    try {
        let id = req.body.id;
        let work_id = req.body.work_id;
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
            const query2 = `UPDATE work_experience SET company1_Name= "${company[i]}" , company1_Designation ="${designation[i]}", company1_Joiningdate="${from[i]}",company1_Leavingdate="${to[i]}" WHERE id="${id}" AND work_id="${work_id[i]}"`;
            connection.query(query2, function (err, result1) {
                if (err) {
                    console.log(err);
                }
            })
        }
    } catch (err) {
        console.log(err);
    }
}

const updatelanguages = (req, res) => {
    try {
        let id = req.body.id;
        let language = req.body.language;
        let htype = req.body.htype;
        let etype = req.body.etype;
        let gtype = req.body.gtype;

        let query = `SELECT language FROM languages WHERE id="${id}"`;
        connection.query(query, function (err, result) {
            if (err) {
                console.log(err);
            }
            let languages = []
            result.forEach((element) => {
                languages.push(element.language)
            })
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
                    let query5;
                    if (languages.includes("hindi")) {
                        query5 = `UPDATE languages SET language="${language[i]}" , L_read="${read}", L_write="${write}" , L_speak="${speak}" WHERE id=${id} AND language="${language[i]}"`;
                    }
                    else {
                        query5 = `INSERT INTO languages(id ,language, L_read , L_write, L_speak) VALUES("${id}","${language[i]}", "${read}" , "${write}" , "${speak}")`;
                    }

                    connection.query(query5, function (err, result3) {
                        if (err) {
                            console.log(err);
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
                    let query4;
                    if (languages.includes("english")) {
                        query4 = `UPDATE languages SET language="${language[i]}" , L_read="${read}", L_write="${write}" , L_speak="${speak}" WHERE id=${id} AND language="${language[i]}"`;
                    }
                    else {
                        query4 = `INSERT INTO languages(id ,language, L_read , L_write, L_speak) VALUES("${id}","${language[i]}", "${read}" , "${write}" , "${speak}")`;
                    }
                    connection.query(query4, function (err, result3) {
                        if (err) {
                            console.log(err);
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
                    let query4;
                    if (languages.includes("gujarati")) {
                        query4 = `UPDATE languages SET language="${language[i]}" , L_read="${read}", L_write="${write}" , L_speak="${speak}" WHERE id=${id} AND language="${language[i]}"`;
                    }
                    else {
                        query4 = `INSERT INTO languages(id ,language, L_read , L_write, L_speak) VALUES("${id}","${language[i]}", "${read}" , "${write}" , "${speak}")`;
                    }
                    connection.query(query4, function (err, result3) {
                        if (err) {
                            console.log(err);
                        }
                    })
                }
            }
        })
    } catch (err) {
        console.log(err);
    }
}

const updatetechnologies = (req, res) => {
    try {
        let ptype = req.body.ptype;
        let id = req.body.id;
        let ltype = req.body.ltype;
        let mtype = req.body.mtype;
        let otype = req.body.otype;
        let type = req.body.types;

        let newquery = `SELECT tech_name FROM technologies_known WHERE id="${id}"`;
        connection.query(newquery, function (err, result) {
            if (err) {
                console.log(err);
            }
            let tech = [];
            result.forEach((element) => {
                tech.push(element.tech_name);
            })
            for (let i = 0; i < type.length; i++) {
                if (type[i] === "php") {
                    let query;
                    if (tech.includes("php")) {
                        query = `UPDATE technologies_known SET tech_name="${type[i]}" ,tech_level="${ptype}" WHERE id=${id} AND tech_name="${type[i]}"`
                    }
                    else {
                        query = `INSERT INTO technologies_known(id , tech_name ,tech_level) VALUES("${id}", "${type[i]}", "${ptype}")`;

                    }
                    connection.query(query, function (err, result) {
                        if (err) {
                            console.log(err);
                        }
                    })
                }
                if (type[i] === "mysql") {
                    let query;
                    if (tech.includes("mysql")) {
                        query = `UPDATE technologies_known SET tech_name="${type[i]}", tech_level="${mtype}" WHERE id=${id} AND tech_name="${type[i]}"`
                    }
                    else {
                        query = `INSERT INTO technologies_known(id , tech_name ,tech_level) VALUES("${id}", "${type[i]}", "${mtype}")`;

                    }
                    connection.query(query, function (err, result) {
                        if (err) {
                            console.log(err);
                        }
                    })
                }
                if (type[i] === "larave") {
                    let query;
                    if (tech.includes("larave")) {
                        query = `UPDATE technologies_known SET tech_name="${type[i]}", tech_level="${ltype}" WHERE id=${id} AND tech_name="${type[i]}"`
                    }
                    else {
                        query = `INSERT INTO technologies_known(id , tech_name ,tech_level) VALUES("${id}", "${type[i]}", "${ltype}")`;
                    }
                    connection.query(query, function (err, result) {
                        if (err) {
                            console.log(err);
                        }
                    })
                }
                if (type[i] === "oracle") {
                    let query;
                    if (tech.includes("oracle")) {
                        query = `UPDATE technologies_known SET tech_name="${type[i]}", tech_level="${otype}" WHERE id=${id} AND tech_name="${type[i]}"`
                    }
                    else {
                        query = `INSERT INTO technologies_known(id , tech_name ,tech_level) VALUES("${id}", "${type[i]}", "${otype}")`;
                    }
                    connection.query(query, function (err, result) {
                        if (err) {
                            console.log(err);
                        }
                    })
                }
            }
        })
    } catch (err) {
        console.log(err);
    }
}

const referencesupdate = (req, res) => {
    try {
        let reference_name = req.body.reference_name;
        let reference_contact = req.body.reference_contact;
        let relation = req.body.reference_relation;
        let id = req.body.id;
        let query11 = `UPDATE reference_contact SET person_name="${reference_name}", person_contactNo ="${reference_contact}" , person_relation="${relation}" WHERE id="${id}"`;
        connection.query(query11, function (err, result2) {
            if (err) {
                console.log(err);
            }
        })
    } catch (err) {
        console.log(err);
    }
}

const preferencesupdate = (req, res) => {
    try {
        let preferedLocation = req.body.preferedlocation;
        let noticeperiod = req.body.noticeperiod;
        let expectedCTC = req.body.Expected_CTC;
        let currentCTC = req.body.Current_CTC;
        let Department = req.body.dept;
        let id = req.body.id;
        const query6 = `UPDATE preferences SET prefered_location="${preferedLocation}" ,Notice_period="${noticeperiod}", Expected_CTC="${expectedCTC}",Current_CTC="${currentCTC}",Department="${Department}" WHERE id="${id}"`;
        connection.query(query6, function (err, result) {
            if (err) {
                console.log(err);
            }
        })
    } catch (err) {
        console.log(err);
    }
}

const updateform = (req, res) => {
    res.send("data updated");
}

module.exports = { form, basicdetail, educationdetail, workexperience, technologies, reference, preferances, languages, getformdata, insertform, updatebasicdetail, updateeducationdetail, updatelanguages, updatetechnologies, updateform, referencesupdate, preferencesupdate, updatework_experience , showusers, screen};