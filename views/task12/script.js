
var currentTab = 0;
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

    if(n == (tab.length - 1)) {
      
            document.getElementById('nextbutton').innerHTML = "Submit";
        
    }
    else {
        document.getElementById('nextbutton').innerHTML = "Next";
    }
}

function fun(n){
    if(currentTab == 0){
        updatebasic_detail();
    }
    if(currentTab == 1){
        updateeducation_detail();
    }
    if(currentTab == 3){
        update_languages();
    }
    if(currentTab == 4){
        updatetechnology();
    }
    if(currentTab == 5){
        update_reference();
    }
    if(currentTab == 6){
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
    console.log(currentTab)
    if (currentTab == 0) {
        if (!validateform()) {
            return;
        }
        console.log(currentTab)

        fetchbasic_detail();
        console.log("djfhdn")
    }

    else if (currentTab == 1) {
        console.log("hellooo")
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

function validateform() {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var regName = /^[A-z]+$/;
    var contactno_regex = /^\d{10}$/;
    var date_regex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    const basic_check = document.getElementsByClassName('basic_check');
    const address_check = document.getElementsByClassName('address_check');
    const radio_check = document.getElementsByClassName('radio_check');
    const contact = document.getElementById('contact_no').value;
    const date_check = document.getElementsByClassName('date_check');
    let zipcode = document.getElementById('zipcode').value;
    const email = document.getElementById('email').value;
    let flag = true;

    //basic_check
    for (let i = 0; i < basic_check.length; i++) {
        let name = basic_check[i].value;
        if (name === "") {
            document.getElementById('error_' + basic_check[i].name).innerHTML = "please enter " + basic_check[i].name;
            flag = false;
        }
        else if (name.length > 20) {
            document.getElementById('error_' + basic_check[i].name).innerHTML = "please enter valid " + basic_check[i].name;
            flag = false;
        }
        else if (!regName.test(name)) {
            document.getElementById('error_' + basic_check[i].name).innerHTML = "please enter valid " + basic_check[i].name;
            flag = false;
        }
        else {
            document.getElementById('error_' + basic_check[i].name).innerHTML = "";
        }
    }

    //address_validation
    for (let i = 0; i < address_check.length; i++) {

        let name = address_check[i].value;
        if (name === "") {
            document.getElementById('error_' + address_check[i].name).innerHTML = "please enter " + address_check[i].name;
            flag = false;
        }
        else if (name.length > 20) {
            document.getElementById('error_' + address_check[i].name).innerHTML = "please enter valid " + address_check[i].name;
            flag = false;
        }
        else {
            document.getElementById('error_' + address_check[i].name).innerHTML = "";
        }
    }


    //email validation
    if (email === "") {
        document.getElementById('error_email').innerHTML = "please enter email"
        flag = false;
    }
    else if (!emailRegex.test(email)) {
        document.getElementById('error_email').innerHTML = "please enter valid email"
        flag = false;
    }
    else {
        document.getElementById('error_email').innerHTML = "";
        flag = true;
    }

    //contact_validation
    if (contact.length === 0) {
        console.log("indid 1")
        document.getElementById('contacterror').innerHTML = "please enter contact";
        flag = false;
    }
    else if (!contactno_regex.test(contact)) {
        console.log("indid 2")
        console.log(typeof contact);
        document.getElementById('contacterror').innerHTML = "please enter valid contact";
        flag = false;
    }
    else {
        document.getElementById('contacterror').innerHTML = "";
    }

    //zipcode validation
    if (zipcode.length === 0) {
        document.getElementById('zipcodeerror').innerHTML = "please enter zipcode";
        flag = false;
    }
    else {
        zipcodeerror.innerHTML = "";
    }

    // radio_validation
    let radio_validation = true;
    for (let i = 0; i < radio_check.length; i++) {
        let name = radio_check[i].checked;
        if (!name) {
            document.getElementById('error_' + radio_check[i].name).innerHTML = "please select " + radio_check[i].name;
            radio_validation = false;
        }
        else {
            document.getElementById('error_' + radio_check[i].name).innerHTML = "";
            radio_validation = true;
            break;
        }
    }
    if (!radio_validation) {
        flag = false;
    }

    // date validation
    for (let i = 0; i < date_check.length; i++) {
        let name = date_check[i].value;
        if (name === "") {
            document.getElementById('error_' + date_check[i].name).innerHTML = "please enter " + date_check[i].name;
            flag = false;
        }
        else if (!date_regex.test(name)) {
            document.getElementById('error_' + date_check[i].name).innerHTML = "please enter valid " + date_check[i].name;
            flag = false;
        }
        else {
            document.getElementById('error_' + date_check[i].name).innerHTML = "";
        }
    }
    console.log(flag);
    return flag;
}

function education_validation() {
    const education_year = document.getElementsByClassName('education_year');
    const education_percentage = document.getElementsByClassName('education_percentage');
    var year_regex = /(?:(?:18|19|20|21)[0-9]{2})/;
    var percentage_regex = /(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/;
    let flag = true;

    //education year check 

    for (let i = 0; i < education_year.length; i++) {
        let name = education_year[i].value;
        if (name === "") {
            document.getElementById('education_year_error').innerHTML = "please enter year";
            flag = false;
        }
        else if (!year_regex.test(name)) {
            document.getElementById('education_year_error').innerHTML = "please enter valid year";
            flag = false;
        }
        else {
            document.getElementById('education_year_error').innerHTML = "";
        }
    }

    for (let i = 0; i < education_percentage.length; i++) {
        let name = education_percentage[i].value;
        if (name === "") {
            document.getElementById('education_percentage_error').innerHTML = "please enter percentage";
            flag = false;
        }
        else if (!percentage_regex.test(name)) {
            document.getElementById('education_percentage_error').innerHTML = "please enter valid percentage";
            flag = false;
        }
        else {
            document.getElementById('education_percentage_error').innerHTML = "";
        }
    }
    console.log("flagggg", flag);
    return flag;
}

function workexperience_validation() {
    var company_check = document.getElementsByClassName('company_check');
    var designation_check = document.getElementsByClassName('designation_check');
    var datefrom_check = document.getElementsByClassName('datefrom_check');
    var dateto_check = document.getElementsByClassName('dateto_check');
    var regName = /^[A-z]+$/;
    var date_regex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    let flag = true;
    for (let i = 0; i < company_check.length; i++) {
        let name = company_check[i].value;
        if (name !== "") {
            for (let i = 0; i < designation_check.length; i++) {
                let designation = designation_check[i].value;
                if (designation == "") {
                    document.getElementById('error_' + designation_check[i].name).innerHTML = "please enter designation";
                    flag = false;
                }
                else if (!regName.test(designation)) {
                    document.getElementById('error_' + designation_check[i].name).innerHTML = "please enter valid designation";
                    flag = false;
                }
                else {
                    document.getElementById('error_' + designation_check[i].name).innerHTML = "";
                }
            }

            for (let i = 0; i < datefrom_check.length; i++) {
                let datefrom = datefrom_check[i].value;
                if (datefrom == "") {
                    document.getElementById('error_' + datefrom_check[i].name).innerHTML = "please enter joining date";
                    flag = false;
                }
                else if (!date_regex.test(datefrom)) {
                    document.getElementById('error_' + datefrom_check[i].name).innerHTML = "please enter valid joining date";
                    flag = false;
                }
                else {
                    document.getElementById('error_' + datefrom_check[i].name).innerHTML = "";
                }
            }

            for (let i = 0; i < dateto_check.length; i++) {
                let dateto = dateto_check[i].value;
                if (dateto == "") {
                    document.getElementById('error_' + dateto_check[i].name).innerHTML = "please enter leave date";
                    flag = false;
                }
                else if (!date_regex.test(dateto)) {
                    document.getElementById('error_' + dateto_check[i].name).innerHTML = "please enter valid leave date";
                    flag = false;
                }
                else {
                    document.getElementById('error_' + dateto_check[i].name).innerHTML = "";
                }
            }
        }
        else {
            document.getElementById('error_' + designation_check[i].name).innerHTML = "";
            document.getElementById('error_' + dateto_check[i].name).innerHTML = "";
            document.getElementById('error_' + datefrom_check[i].name).innerHTML = "";
        }
    }
    console.log(flag);
    return flag;
}

function language_validaton() {
    var checkbox_validation = document.getElementsByClassName('checkbox_validation');
    var hindi_check = document.getElementsByClassName('hindi_check');
    var gujarati_check = document.getElementsByClassName('gujarati_check');
    var english_check = document.getElementsByClassName('english_check');
    let flag = true;

    for (let i = 0; i < checkbox_validation.length; i++) {
        let name = checkbox_validation[i].checked;
        console.log(checkbox_validation.length);
        if (!name) {
            flag = false;
            document.getElementById('language_error').innerHTML = "please select any language";
        }
        else {
            flag = true;
            document.getElementById('language_error').innerHTML = "";
            if (checkbox_validation[0].checked) {
                for (let i = 0; i < hindi_check.length; i++) {
                    if (hindi_check[i].checked) {
                        flag = true;
                        document.getElementById('hindi_error').innerHTML = "";
                        break;
                    }
                    else {
                        document.getElementById('hindi_error').innerHTML = "please select hindi type";
                        flag = false;
                    }
                }
            }

            if (checkbox_validation[1].checked) {
                for (let i = 0; i < english_check.length; i++) {
                    if (english_check[i].checked) {
                        flag = true;
                        document.getElementById('english_error').innerHTML = "";
                        break;
                    }
                    else {
                        document.getElementById('english_error').innerHTML = "please select english type";
                        flag = false;
                    }
                }
            }
            if (checkbox_validation[2].checked) {
                for (let i = 0; i < gujarati_check.length; i++) {
                    if (gujarati_check[i].checked) {
                        flag = true;
                        document.getElementById('gujarati_error').innerHTML = "";
                        break;
                    }
                    else {
                        document.getElementById('gujarati_error').innerHTML = "please select gujarati type";
                        flag = false;
                    }
                }
            }
            break;
        }
    }
    return flag;
}

function technology_validation() {
    var technology_validation = document.getElementsByClassName('technology_validation');
    var phptype_validation = document.getElementsByClassName('phptype_validation');
    var mysqltype_validation = document.getElementsByClassName('mysqltype_validation');
    var laravetype_validation = document.getElementsByClassName('laravetype_validation');
    var oracletype_validation = document.getElementsByClassName('oracletype_validation');
    let flag = true;
    for (let i = 0; i < technology_validation.length; i++) {
        let name = technology_validation[i].checked;
        if (!name) {
            flag = false;
            document.getElementById('technology_error').innerHTML = "please select any technology";
        }
        else {
            flag = true;
            document.getElementById('technology_error').innerHTML = "";
            if (technology_validation[0].checked) {
                for (let i = 0; i < phptype_validation.length; i++) {
                    if (phptype_validation[i].checked) {
                        flag = true;
                        document.getElementById('phptype_error').innerHTML = "";
                        break;
                    }
                    else {
                        document.getElementById('phptype_error').innerHTML = "please select php type";
                        flag = false;
                    }
                }
            }

            if (technology_validation[1].checked) {
                for (let i = 0; i < mysqltype_validation.length; i++) {
                    if (mysqltype_validation[i].checked) {
                        flag = true;
                        document.getElementById('mysqltype_error').innerHTML = "";
                        break;
                    }
                    else {
                        document.getElementById('mysqltype_error').innerHTML = "please select mysql type";
                        flag = false;
                    }
                }
            }

            if (technology_validation[2].checked) {
                for (let i = 0; i < laravetype_validation.length; i++) {
                    if (laravetype_validation[i].checked) {
                        flag = true;
                        document.getElementById('laravetype_error').innerHTML = "";
                        break;
                    }
                    else {
                        document.getElementById('laravetype_error').innerHTML = "please select larave type";
                        flag = false;
                    }
                }
            }

            if (technology_validation[3].checked) {
                for (let i = 0; i < oracletype_validation.length; i++) {
                    if (oracletype_validation[i].checked) {
                        flag = true;
                        document.getElementById('oracletype_error').innerHTML = "";
                        break;
                    }
                    else {
                        document.getElementById('oracletype_error').innerHTML = "please select oracle type";
                        flag = false;
                    }
                }
            }

            break;
        }
    }
    return flag;
}

function reference_validation() {
    var contactno_regex = /^\d{10}$/;
    var regName = /^[A-z]+$/;
    var reference_check = document.getElementsByClassName('reference_check');
    var reference_contact_check = document.getElementsByClassName('reference_contact_check');
    var reference_relation_check = document.getElementsByClassName('reference_relation_check');
    let flag = true;

    for (let i = 0; i < reference_check.length; i++) {
        let name = reference_check[i].value;
        if (name !== "") {
            for (let i = 0; i < reference_contact_check.length; i++) {
                let contact = reference_contact_check[i].value;
                if (contact == "") {
                    document.getElementById('error_' + reference_contact_check[i].name).innerHTML = "please enter contact"
                    flag = false;
                }
                else if (!contactno_regex.test(contact)) {
                    document.getElementById('error_' + reference_contact_check[i].name).innerHTML = "please enter valid  contact"
                    flag = false;
                }
                else {
                    document.getElementById('error_' + reference_contact_check[i].name).innerHTML = ""
                }
            }

            for (let i = 0; i < reference_relation_check.length; i++) {
                let reference = reference_relation_check[i].value;
                if (reference == "") {
                    document.getElementById('error_' + reference_relation_check[i].name).innerHTML = "please enter reference name";
                    flag = false;
                }
                else if (!regName.test(reference)) {
                    document.getElementById('error_' + reference_relation_check[i].name).innerHTML = "please enter valid reference name";
                    flag = false;

                }
                else {
                    document.getElementById('error_' + reference_relation_check[i].name).innerHTML = "";
                }
            }

        }
        else {
            // document.getElementById('error_' + reference_check[i].name).innerHTML = "";
            document.getElementById('error_' + reference_contact_check[i].name).innerHTML = "";
            document.getElementById('error_' + reference_relation_check[i].name).innerHTML = "";
        }
    }
    return flag;
}

function preferences_validation() {
    let flag = true;
    var regName = /^[A-z]+$/;
    let Expected_CTC = document.getElementById('Expected_CTC').value;
    let preferedlocation = document.getElementById('preferedlocation').value;

    //location check
    if (preferedlocation === "") {
        document.getElementById('location_error').innerHTML = "please enter location";
        flag = false;
    }
    else if (!regName.test(preferedlocation)) {
        document.getElementById('location_error').innerHTML = "please enter valid location" ;
        flag = false;
    }
    else {
        document.getElementById('location_error').innerHTML = "";
    }

    if (Expected_CTC === "") {
        console.log("ctc", Expected_CTC)
        document.getElementById('ctc_error1').innerHTML = "please enter expected ctc";
        flag = false;
    }
    else {
        document.getElementById('ctc_error1').innerHTML = "";
    }
    return flag;
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
    console.log("basicdetails", basicdetails);
    let url = `http://localhost:8004/task12/basicdetail`;
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(basicdetails),
    })
        .then(response => response.json)
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
    let url = `http://localhost:8004/task4/updatebasicdetail/:id`;
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

    let url = `http://localhost:8004/task4/education_detail`;
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(educationdetails),
    })
        .then(response => response.json);
}

async function updateeducation_detail(){
    let educationdetails = {};
    let edu_id = [];
    educationdetails.id = document.getElementById('educationid').value;
    let edu_id1 = document.getElementById('edu_id1').value;
    let edu_id2 = document.getElementById('edu_id2').value;
    let edu_id3 = document.getElementById('edu_id3').value;
    edu_id.push(edu_id1 , edu_id2 , edu_id3);
    educationdetails.edu_id =edu_id; 
    educationdetails.education_detail1 = document.getElementById('education_detail1').value;
    educationdetails.education_detail2 = document.getElementById('education_detail2').value;
    educationdetails.education_detail3 = document.getElementById('education_detail3').value;
    educationdetails.year1 = document.getElementById('year1').value;
    educationdetails.year2 = document.getElementById('year2').value;
    educationdetails.year3 = document.getElementById('year3').value;
    educationdetails.percentage1 = document.getElementById('percentage1').value;
    educationdetails.percentage2 = document.getElementById('percentage2').value;
    educationdetails.percentage3 = document.getElementById('percentage3').value;
    console.log("educationdetails" , educationdetails)
    let url = `http://localhost:8004/task4/updateeducationdetail/:id`;
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

    let url = `http://localhost:8004/task4/work_experience`;
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

    let url = `http://localhost:8004/task4/languages`;
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

    let url = `http://localhost:8004/task4/updatelanguages/:id`;
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
    let url = `http://localhost:8004/task4/technologies`;
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
    let url = `http://localhost:8004/task4/technologiesupdate/:id`;
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

    let url = `http://localhost:8004/task4/reference`;
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

    let url = `http://localhost:8004/task4/referencesupdate/:id`;
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
    let url = `http://localhost:8004/task4/preferences`;
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
    let url = `http://localhost:8004/task4/preferencesupdate:id`;
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(preferences),
    })
        .then(response => response.json);
}


