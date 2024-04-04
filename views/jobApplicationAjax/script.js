var currentTab = 0;
let userid ;
showTab(currentTab);
var nextbutton = document.getElementById('nextbutton');
function showTab(n) {
    var tab = document.getElementsByClassName('tab');
    tab[n].style.display = "block";
    if (n == 0) {
        document.getElementById('prevbutton').style.display = "none";
    }
    else {
        document.getElementById('prevbutton').style.display = "inline";
    }
    if (n == (tab.length - 1)) {
        document.getElementById('nextbutton').innerHTML = "Submit";
    }
    else {
        document.getElementById('nextbutton').innerHTML = "Next";
    }
}

function fun(n) {
    if (currentTab == 0) {
        updatebasic_detail();
    }
    if (currentTab == 1) {
        updateeducation_detail();
    }
    if(currentTab == 2){
        updatework_experience();
    }
    if (currentTab == 3) {
        update_languages();
    }
    if (currentTab == 4) {
        updatetechnology();
    }
    if (currentTab == 5) {
        update_reference();
    }
    if (currentTab == 6) {
        update_preferences();
        console.log("preferencesss")
    }
    var tab = document.getElementsByClassName("tab");
    if (n == 1) {
        tab[currentTab].style.display = "none";
        currentTab = currentTab + n;
    }
    if (n == -1) {
        tab[currentTab].style.display = "none";
        currentTab = currentTab - 1;
    }
    if (currentTab >= tab.length) {
        document.getElementById('form').submit();
        return false;
    }
    showTab(currentTab);

}

async function nextprev(n) {
    if (currentTab == 0) {
        if (!validateform()) {
            return;
        }
        console.log(currentTab)

        fetchbasic_detail();
        console.log("djfhdn")
    }

    else if (currentTab == 1) {
        if (!education_validation()) {
            return;
        }
        fetcheducation_detail();
    }

    else if (currentTab == 2) {
        if (!workexperience_validation()) {
            return;
        }
        fetchwork_experience();
    }

    else if (currentTab == 3) {
        fetch_languages();
    }

    else if (currentTab == 4) {
        if (!technology_validation()) {
            return;
        }
        technology();
    }

    else if (currentTab == 5) {
        if (!reference_validation()) {
            return;
        }
        fetch_reference();
    }

    else if (currentTab == 6) {
        if (!preferences_validation()) {
            return;
        }
        fetch_preferences();
    }

    var tab = document.getElementsByClassName("tab");
    if (n == 1) {
        tab[currentTab].style.display = "none";
        currentTab = currentTab + n;
    }
    if (n == -1) {
        tab[currentTab].style.display = "none";
        currentTab = currentTab - 1;
    }
    if (currentTab >= tab.length) {
        document.getElementById('form').submit();
        return false;
    }
    showTab(currentTab);
}


async function fetchbasic_detail() {
    let finalgender = [];
    let gender = document.getElementsByClassName('radio_check');
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            finalgender.push(gender[i].value);
        }
    }
    let basicdetails = {};
    basicdetails.fname = document.getElementById('fname').value;
    basicdetails.lname = document.getElementById('lname').value;
    basicdetails.designation = document.getElementById('designation').value;
    basicdetails.address1 = document.getElementById('address1').value;
    basicdetails.contact = document.getElementById('contact_no').value;
    basicdetails.zipcode = document.getElementById('zipcode').value;
    basicdetails.address2 = document.getElementById('address2').value;
    basicdetails.email = document.getElementById('email').value;
    basicdetails.city = document.getElementById('city').value;
    basicdetails.state = document.getElementById('state').value;
    basicdetails.date = document.getElementById('date').value;
    basicdetails.gender = finalgender;
    let url = `http://localhost:8004/task12/basicdetail`;
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(basicdetails),
    })
        .then(async(response) => {
            let data = await response.json()
            console.log("iddd",data.id)
            userid = data.id;
        })

}

async function updatebasic_detail() {
    let finalgender = [];
    let gender = document.getElementsByClassName('radio_check');
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            finalgender.push(gender[i].value);
        }
    }
    let basicdetails = {};
    basicdetails.id = document.getElementById('basicid').value;
    basicdetails.fname = document.getElementById('fname').value;
    basicdetails.lname = document.getElementById('lname').value;
    basicdetails.designation = document.getElementById('designation').value;
    basicdetails.address1 = document.getElementById('address1').value;
    basicdetails.contact = document.getElementById('contact_no').value;
    basicdetails.zipcode = document.getElementById('zipcode').value;
    basicdetails.address2 = document.getElementById('address2').value;
    basicdetails.email = document.getElementById('email').value;
    basicdetails.city = document.getElementById('city').value;
    basicdetails.state = document.getElementById('state').value;
    basicdetails.date = document.getElementById('date').value;
    basicdetails.gender = finalgender;
    let url = `http://localhost:8004/task12/updatebasicdetail/:id`;
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(basicdetails),
    })
        .then(response => response.json)
}


async function fetcheducation_detail() {
    let educationdetails = {};
    educationdetails.education_detail1 = document.getElementById('education_detail1').value;
    educationdetails.education_detail2 = document.getElementById('education_detail2').value;
    educationdetails.education_detail3 = document.getElementById('education_detail3').value;
    educationdetails.year1 = document.getElementById('year1').value;
    educationdetails.year2 = document.getElementById('year2').value;
    educationdetails.year3 = document.getElementById('year3').value;
    educationdetails.percentage1 = document.getElementById('percentage1').value;
    educationdetails.percentage2 = document.getElementById('percentage2').value;
    educationdetails.percentage3 = document.getElementById('percentage3').value;
    let url = `http://localhost:8004/task12/educationaldetail/${userid}`;
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(educationdetails),
    })
        .then(response => response.json);
}

async function updateeducation_detail() {
    let educationdetails = {};
    let edu_id = [];
    educationdetails.id = document.getElementById('educationid').value;
    let edu_id1 = document.getElementById('edu_id1').value;
    let edu_id2 = document.getElementById('edu_id2').value;
    let edu_id3 = document.getElementById('edu_id3').value;
    edu_id.push(edu_id1, edu_id2, edu_id3);
    educationdetails.edu_id = edu_id;
    educationdetails.education_detail1 = document.getElementById('education_detail1').value;
    educationdetails.education_detail2 = document.getElementById('education_detail2').value;
    educationdetails.education_detail3 = document.getElementById('education_detail3').value;
    educationdetails.year1 = document.getElementById('year1').value;
    educationdetails.year2 = document.getElementById('year2').value;
    educationdetails.year3 = document.getElementById('year3').value;
    educationdetails.percentage1 = document.getElementById('percentage1').value;
    educationdetails.percentage2 = document.getElementById('percentage2').value;
    educationdetails.percentage3 = document.getElementById('percentage3').value;
    console.log("educationdetails", educationdetails)
    let url = `http://localhost:8004/task12/updateeducationdetail/:id`;
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(educationdetails),
    })
        .then(response => response.json);
}

async function fetchwork_experience() {
    let workexperience = {};
    workexperience.company1 = document.getElementById('company1').value;
    workexperience.company2 = document.getElementById('company2').value;
    workexperience.designation1 = document.getElementById('designation1').value;
    workexperience.designation2 = document.getElementById('designation2').value;
    workexperience.from1 = document.getElementById('from1').value;
    workexperience.from2 = document.getElementById('from2').value;
    workexperience.to1 = document.getElementById('to1').value;
    workexperience.to2 = document.getElementById('to2').value;

    let url = `http://localhost:8004/task12/work_experience/${userid}`;
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(workexperience),
    })
        .then(response => response.json);
}

async function updatework_experience(){
    let workexperience={};
    let work_id = [];
    workexperience.id = document.getElementById('workid').value;
    let work_id1 = document.getElementById('work_id1').value;
    let work_id2 = document.getElementById('work_id2').value;
    work_id.push(work_id1, work_id2);
    workexperience.work_id = work_id;
    workexperience.company1 = document.getElementById('company1').value;
    workexperience.company2 = document.getElementById('company2').value;
    workexperience.designation1 = document.getElementById('designation1').value;
    workexperience.designation2 = document.getElementById('designation2').value;
    workexperience.from1 = document.getElementById('from1').value;
    workexperience.from2 = document.getElementById('from2').value;
    workexperience.to1 = document.getElementById('to1').value;
    workexperience.to2 = document.getElementById('to2').value;

    let url = `http://localhost:8004/task12/updatework_experience/${userid}`;
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(workexperience),
    })
        .then(response => response.json);
}

async function fetch_languages() {
    let language = document.getElementsByClassName('language[]');
    let htype = document.getElementsByName('htype[]');
    let etype = document.getElementsByName('etype[]');
    let gtype = document.getElementsByName('gtype[]');
    let finallanguage = [];
    let finalhtype = [];
    let finalgtype = [];
    let finaletype = [];

    for (let i = 0; i < language.length; i++) {
        if (language[i].checked) {
            finallanguage.push(language[i].value);
        }
    }
    for (let i = 0; i < htype.length; i++) {
        if (htype[i].checked) {
            finalhtype.push(htype[i].value);
        }
    }

    for (let i = 0; i < etype.length; i++) {
        if (etype[i].checked) {
            finaletype.push(etype[i].value);
        }
    }

    for (let i = 0; i < gtype.length; i++) {
        if (gtype[i].checked) {
            finalgtype.push(gtype[i].value);
        }
    }

    let languages = {};
    languages.language = finallanguage;
    languages.htype = finalhtype;
    languages.etype = finaletype;
    languages.gtype = finalgtype;

    let url = `http://localhost:8004/task12/languages/${userid}`;
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(languages),
    })
        .then(response => response.json);
}

async function update_languages() {
    let language = document.getElementsByClassName('language[]');
    let htype = document.getElementsByName('htype[]');
    let etype = document.getElementsByName('etype[]');
    let gtype = document.getElementsByName('gtype[]');
    let finallanguage = [];
    let finalhtype = [];
    let finalgtype = [];
    let finaletype = [];

    for (let i = 0; i < language.length; i++) {
        if (language[i].checked) {
            finallanguage.push(language[i].value);
        }
    }
    for (let i = 0; i < htype.length; i++) {
        if (htype[i].checked) {
            finalhtype.push(htype[i].value);
        }
    }

    for (let i = 0; i < etype.length; i++) {
        if (etype[i].checked) {
            finaletype.push(etype[i].value);
        }
    }

    for (let i = 0; i < gtype.length; i++) {
        if (gtype[i].checked) {
            finalgtype.push(gtype[i].value);
        }
    }

    let languages = {};
    languages.id = document.getElementById('language_id').value;
    languages.language = finallanguage;
    languages.htype = finalhtype;
    languages.etype = finaletype;
    languages.gtype = finalgtype;

    let url = `http://localhost:8004/task12/updatelanguages/:id`;
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(languages),
    })
        .then(response => response.json);
}



async function technology() {
    let types = document.getElementsByName('type[]');
    let ptype = document.getElementsByName('ptype[]');
    let mtype = document.getElementsByName('mtype[]');
    let ltype = document.getElementsByName('ltype[]');
    let otype = document.getElementsByName('otype[]');
    let finaltypes = [];
    let finalptype = [];
    let finalmtype = [];
    let finalotype = [];
    let finalltype = [];

    for (let i = 0; i < types.length; i++) {
        if (types[i].checked) {
            finaltypes.push(types[i].value);
        }
    }

    for (let i = 0; i < ptype.length; i++) {
        if (ptype[i].checked) {
            finalptype.push(ptype[i].value);
        }
    }
    for (let i = 0; i < ltype.length; i++) {
        if (ltype[i].checked) {
            finalltype.push(ltype[i].value);
        }
    }
    for (let i = 0; i < otype.length; i++) {
        if (otype[i].checked) {
            finalotype.push(otype[i].value);
        }
    }
    for (let i = 0; i < mtype.length; i++) {
        if (mtype[i].checked) {
            finalmtype.push(mtype[i].value);
        }
    }
    let technologies = {};
    technologies.types = finaltypes;
    technologies.ptype = finalptype;
    technologies.ltype = finalltype;
    technologies.mtype = finalmtype;
    technologies.otype = finalotype;
    let url = `http://localhost:8004/task12/technologies/${userid}`;
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(technologies),
    })
        .then(response => response.json);

}

async function updatetechnology() {
    let types = document.getElementsByName('type[]');
    let ptype = document.getElementsByName('ptype[]');
    let mtype = document.getElementsByName('mtype[]');
    let ltype = document.getElementsByName('ltype[]');
    let otype = document.getElementsByName('otype[]');
    let finaltypes = [];
    let finalptype = [];
    let finalmtype = [];
    let finalotype = [];
    let finalltype = [];

    for (let i = 0; i < types.length; i++) {
        if (types[i].checked) {
            finaltypes.push(types[i].value);
        }
    }

    for (let i = 0; i < ptype.length; i++) {
        if (ptype[i].checked) {
            finalptype.push(ptype[i].value);
        }
    }
    for (let i = 0; i < ltype.length; i++) {
        if (ltype[i].checked) {
            finalltype.push(ltype[i].value);
        }
    }
    for (let i = 0; i < otype.length; i++) {
        if (otype[i].checked) {
            finalotype.push(otype[i].value);
        }
    }
    for (let i = 0; i < mtype.length; i++) {
        if (mtype[i].checked) {
            finalmtype.push(mtype[i].value);
        }
    }
    let technologies = {};
    technologies.id = document.getElementById('technology_id').value;
    technologies.types = finaltypes;
    technologies.ptype = finalptype;
    technologies.ltype = finalltype;
    technologies.mtype = finalmtype;
    technologies.otype = finalotype;
    let url = `http://localhost:8004/task12/technologiesupdate/:id`;
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(technologies),
    })
        .then(response => response.json);

}

async function fetch_reference() {
    let reference = {};
    reference.reference_name = document.getElementById('reference_name').value;
    reference.reference_contact = document.getElementById('reference_contact').value;
    reference.reference_relation = document.getElementById('reference_relation').value;

    let url = `http://localhost:8004/task12/reference/${userid}`;
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reference),
    })
        .then(response => response.json);
}

async function update_reference() {
    let reference = {};
    reference.id = document.getElementById('reference_id').value;
    reference.reference_name = document.getElementById('reference_name').value;
    reference.reference_contact = document.getElementById('reference_contact').value;
    reference.reference_relation = document.getElementById('reference_relation').value;

    let url = `http://localhost:8004/task12/referencesupdate/:id`;
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reference),
    })
        .then(response => response.json);
}

async function fetch_preferences() {
    let preferences = {};
    preferences.preferedlocation = document.getElementById('preferedlocation').value;
    preferences.noticeperiod = document.getElementById('noticeperiod').value;
    preferences.Expected_CTC = document.getElementById('Expected_CTC').value;
    preferences.Current_CTC = document.getElementById('Current_CTC').value;
    preferences.dept = document.getElementById('dept').value;
    let url = `http://localhost:8004/task12/preferences/${userid}`;
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(preferences),
    })
        .then(response => response.json);
}

async function update_preferences() {
    let preferences = {};
    preferences.id = document.getElementById('preference_id').value;
    preferences.preferedlocation = document.getElementById('preferedlocation').value;
    preferences.noticeperiod = document.getElementById('noticeperiod').value;
    preferences.Expected_CTC = document.getElementById('Expected_CTC').value;
    preferences.Current_CTC = document.getElementById('Current_CTC').value;
    preferences.dept = document.getElementById('dept').value;
    let url = `http://localhost:8004/task12/preferencesupdate:id`;
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(preferences),
    })
        .then(response => response.json);
}


