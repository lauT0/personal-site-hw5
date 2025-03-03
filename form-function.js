const nameField = document.getElementById("Pname");
const emailField = document.getElementById("Email");
const commField = document.getElementById("Comments");
const errmsg = document.getElementById("errmsg");
const infomsg = document.getElementById("infomsg");
const subbttn = document.getElementById("submit");
const formErrs = document.getElementById("formErrors");
const commlen = commField.getAttribute("maxlength");
let form_errors = [];

function addError(field, err) {
    let curErr = {
        area: field.id,
        error: err
    }
    form_errors.push(curErr);
}


infomsg.innerHTML = `Characters left: ${commlen}`;
function clearflash(field) {
    field.style.backgroundColor = "";
}
function fadeOut() {
    errmsg.innerHTML = "";
}

//logs mismatched pattern into form errors and change error message
nameField.addEventListener("input", (event) => {
    if (nameField.validity.patternMismatch) {
        errmsg.innerHTML = "Error: Special characters or numbers not allowed";
        nameField.style.backgroundColor = "#eb9a8c";
        setTimeout(()=>clearflash(nameField), 300);
        setTimeout(()=>fadeOut(), 3000);
        addError(nameField, nameField.validationMessage);
    }
        else {
        errmsg.innerHTML = "";
    }
    
})

//countdown for textarea, bold text when close to limit, error when exceding limit
commField.addEventListener("input", (event) => {
    currCommlen = commField.value.length;
    infomsg.innerHTML = `Characters left: ${commlen - currCommlen}`;
    if (commlen - currCommlen <= 20){
        infomsg.style.fontWeight = "bold";
    } else{
        infomsg.style.fontWeight = "normal";
    }
    if (currCommlen > 300){
        errmsg.innerHTML = "Error: Exceded character limit";
        addError(commField, "exceded character limit");
    } else{
        errmsg.innerHTML = "";
    }

})

//when a user clicks submit, if there are errors, log them info formErrors
subbttn.addEventListener("click", (event) => {
    if (!nameField.validity.valid){
        addError(nameField, nameField.validationMessage);
    }
    if (!emailField.validity.valid){
        addError(emailField, emailField.validationMessage);
    }
    if (!commField.validity.valid){
        addError(commField, commField.validationMessage);
    }
    formErrs.value = JSON.stringify(form_errors);
})