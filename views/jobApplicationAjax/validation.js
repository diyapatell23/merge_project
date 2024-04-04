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
        document.getElementById('location_error').innerHTML = "please enter valid location";
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

