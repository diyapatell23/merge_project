const connection = require('../config/config');

const result = (req, res) => {
    try {
        let page = Number(req.params.page);
        let recordsperpage = 5;
        let start = page * recordsperpage - recordsperpage;
        connection.query(`SELECT student_master.student_id, student_master.Name, student_master.Email, student_master.ContactNo ,SUM(result.theory_exam_marks) as p_theory, SUM(result.practical_exam_marks) as p_practical FROM student_master 
    JOIN result ON student_master.student_id = result.student_id
     WHERE result.exam_id = '1'
     GROUP BY student_master.student_id , student_master.Name
     LIMIT ${recordsperpage} OFFSET ${start}`, (err, result1, fields) => {
            if (err) {
                console.log(err);
            }

            connection.query(`SELECT student_master.student_id, student_master.Name ,SUM(result.theory_exam_marks) as t_theory, SUM(result.practical_exam_marks) as t_practical FROM student_master 
        JOIN result ON student_master.student_id = result.student_id
         WHERE result.exam_id = '2'
         GROUP BY student_master.student_id , student_master.Name`, (err, result2) => {
                if (err) {
                    console.log(err);
                }

                connection.query(`SELECT student_master.student_id, student_master.Name ,SUM(result.theory_exam_marks) as f_theory, SUM(result.practical_exam_marks) as f_practical 
            FROM student_master 
            JOIN result ON student_master.student_id = result.student_id
            WHERE result.exam_id = '3'
            GROUP BY student_master.student_id , student_master.Name`, (err, result3) => {
                    if (err) {
                        console.log(err);
                    }
                    res.render('./resultGrid/student_result', { user1: result1, user2: result2, user3: result3, fields: fields, pageno: page })
                })
            });

        });
    } catch (err) {
        console.log(err);
    }
}

const searchbyid = (req, res) => {
    try {
        id = req.query.id;
        id = id.trim();
        console.log(id)
        if (id !== "" && id < 11) {
            connection.query(`SELECT student_master.student_id, student_master.Name, student_master.Email, student_master.ContactNo ,SUM(result.theory_exam_marks) as p_theory, SUM(result.practical_exam_marks) as p_practical FROM student_master JOIN result ON student_master.student_id = result.student_id WHERE result.exam_id = '1' AND student_master.student_id=${id} GROUP BY student_master.student_id , student_master.Name`, (err, result1) => {
                if (err) {
                    console.log(err);
                }
                connection.query(`SELECT student_master.student_id, student_master.Name ,SUM(result.theory_exam_marks) as t_theory, SUM(result.practical_exam_marks) as t_practical FROM student_master JOIN result ON student_master.student_id = result.student_id WHERE result.exam_id = '2'  AND student_master.student_id=${id} GROUP BY student_master.student_id , student_master.Name`, (err, result2) => {
                    if (err) {
                        console.log(err);
                    }

                    connection.query(`SELECT student_master.student_id, student_master.Name ,SUM(result.theory_exam_marks) as f_theory, SUM(result.practical_exam_marks) as f_practical FROM student_master JOIN result ON student_master.student_id = result.student_id WHERE result.exam_id = '3' AND student_master.student_id=${id} GROUP BY student_master.student_id , student_master.Name`, (err, result3) => {
                        if (err) {
                            console.log(err);
                        }
                        connection.query(`SELECT * FROM student_master WHERE student_id = ${id}`, (err, results, fields) => {
                            if (err) {
                                console.log(err);
                            }
                            res.render('./resultGrid/student_result', { user1: result1, user2: result2, user3: result3, user: results, fields: fields, pageno: false })
                        })
                    })
                });
            });
        }
        else {
            res.send("invalid user")
        }
    } catch (err) {
        console.log(err);
    }
}

const searchbyname = (req, res) => {
    try {
        operator = req.query.operator;
        Sname = req.query.name;
        email = req.query.email;
        number = req.query.number;

        if (operator == "and") {
            if (Sname !== "" && email !== "" && number !== "") {
                connection.query(`SELECT student_master.student_id, student_master.Name, student_master.Email, student_master.ContactNo ,SUM(result.theory_exam_marks) as p_theory, SUM(result.practical_exam_marks) as p_practical FROM student_master JOIN result ON student_master.student_id = result.student_id WHERE result.exam_id = '1' AND student_master.Name="${Sname}" AND student_master.Email="${email}" AND student_master.ContactNo="${number}" GROUP BY student_master.student_id , student_master.Name`, (err, result1) => {
                    if (err) {
                        console.log(err);
                    }
                    connection.query(`SELECT student_master.student_id, student_master.Name ,SUM(result.theory_exam_marks) as t_theory, SUM(result.practical_exam_marks) as t_practical FROM student_master JOIN result ON student_master.student_id = result.student_id WHERE result.exam_id = '2'  AND student_master.Name="${Sname}" AND student_master.Email="${email}" AND student_master.ContactNo="${number}" GROUP BY student_master.student_id , student_master.Name`, (err, result2) => {
                        if (err) {
                            console.log(err);
                        }

                        connection.query(`SELECT student_master.student_id, student_master.Name ,SUM(result.theory_exam_marks) as f_theory, SUM(result.practical_exam_marks) as f_practical FROM student_master JOIN result ON student_master.student_id = result.student_id WHERE result.exam_id = '3' AND student_master.Name="${Sname}" AND student_master.Email="${email}" AND student_master.ContactNo="${number}" GROUP BY student_master.student_id , student_master.Name`, (err, result3) => {
                            if (err) {
                                console.log(err);
                            }
                            connection.query(`SELECT * FROM student_master WHERE Name = "${Sname}" AND Email="${email}" AND ContactNo="${number}"`, (err, results, fields) => {
                                if (err) {
                                    console.log(err);
                                }

                                res.render('./resultGrid/student_result', { user1: result1, user2: result2, user3: result3, user: results, fields: fields, pageno: false })
                            })
                        })
                    });

                });
            }
            else{
                res.send("please enter all details")
            }
        }
        else {
            connection.query(`SELECT student_master.student_id, student_master.Name, student_master.Email, student_master.ContactNo ,SUM(result.theory_exam_marks) as p_theory, SUM(result.practical_exam_marks) as p_practical FROM student_master JOIN result ON student_master.student_id = result.student_id WHERE result.exam_id = '1' AND (student_master.Name="${Sname}" OR student_master.Email="${email}" OR student_master.ContactNo="${number}") GROUP BY student_master.student_id , student_master.Name`, (err, result1) => {
                if (err) {
                    console.log(err);
                }
                connection.query(`SELECT student_master.student_id, student_master.Name ,SUM(result.theory_exam_marks) as t_theory, SUM(result.practical_exam_marks) as t_practical FROM student_master JOIN result ON student_master.student_id = result.student_id WHERE result.exam_id = '2'  AND (student_master.Name="${Sname}" OR student_master.Email="${email}" OR student_master.ContactNo="${number}") GROUP BY student_master.student_id , student_master.Name`, (err, result2) => {
                    if (err) {
                        console.log(err);
                    }

                    connection.query(`SELECT student_master.student_id, student_master.Name ,SUM(result.theory_exam_marks) as f_theory, SUM(result.practical_exam_marks) as f_practical FROM student_master JOIN result ON student_master.student_id = result.student_id WHERE result.exam_id = '3' AND (student_master.Name="${Sname}" OR student_master.Email="${email}" OR student_master.ContactNo="${number}") GROUP BY student_master.student_id , student_master.Name`, (err, result3) => {
                        if (err) {
                            console.log(err);
                        }
                        connection.query(`SELECT * FROM student_master WHERE Name = "${Sname}" OR Email="${email}" OR ContactNo="${number}"`, (err, results, fields) => {
                            if (err) {
                                console.log(err);
                            }

                            res.render('./resultGrid/student_result', { user1: result1, user2: result2, user3: result3, user: results, fields: fields, pageno: false })
                        })
                    })
                });

            });
        }
    } catch (err) {
        console.log(err);
    }
}

const userdetail = (req, res) => {
    try {
        let id = req.params.id;
        let name = req.params.name;
        connection.query(`SELECT student_id, Name FROM student_master
        WHERE student_id = ${id}`, (err, result1) => {
            if (err) {
                console.log(err);
            }

            connection.query(`SELECT subject_name ,student_id, exam_id , theory_exam_marks , practical_exam_marks,
         subject_master.subject_id,result.subject_id 
         FROM subject_master JOIN result
          ON subject_master.subject_id = result.subject_id WHERE result.student_id = ${id} 
          AND exam_id= 1`, (err, result2) => {
                if (err) {
                    console.log(err);
                }

                connection.query(`SELECT subject_name ,student_id, exam_id , theory_exam_marks , practical_exam_marks,
         subject_master.subject_id,result.subject_id 
         FROM subject_master JOIN result
          ON subject_master.subject_id = result.subject_id WHERE result.student_id = ${id} 
          AND exam_id= 2`, (err, result4) => {
                    if (err) {
                        console.log(err);
                    }

                    connection.query(`SELECT subject_name ,student_id, exam_id , theory_exam_marks , practical_exam_marks,
         subject_master.subject_id,result.subject_id 
         FROM subject_master JOIN result
          ON subject_master.subject_id = result.subject_id WHERE result.student_id = ${id} 
          AND exam_id= 3`, (err, result5) => {
                        if (err) {
                            console.log(err);
                        }

                        connection.query(`SELECT student_master.student_id , student_master.Name , attendence.student_id, COUNT(attendence.attendence)/91 *100 as percentage FROM student_master JOIN attendence ON student_master.student_id = attendence.student_id WHERE attendence.attendence='p' AND student_master.student_id = ${id} `, (err, result3) => {
                            if (err) {
                                console.log(err);
                            }
                            res.render('./resultGrid/show_user', { ans1: result1, ans2: result2, name: name, ans3: result3, ans4: result4, ans5: result5 });
                        })
                    })
                })
            })
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = { result, searchbyid, searchbyname, userdetail };