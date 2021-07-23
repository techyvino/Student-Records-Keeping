const stuName = document.getElementById("stuName");
const stuReg = document.getElementById('stuReg');
const stuClass = document.getElementById('stuClass');
const stuSec = document.getElementById('stuSec');
const stuAge = document.getElementById('stuAge');
const stuMark = document.getElementById('stuMark');

// validation
const nameValidationError = document.getElementById('nameValidationError');
const regValidationError = document.getElementById('regValidationError');
const classValidationError = document.getElementById('classValidationError');
const secValidationError = document.getElementById('secValidationError');
const ageValidationError = document.getElementById('ageValidationError');
const markValidationError = document.getElementById('markValidationError');

var selectedRow = null;

function onFormSubmit(){
    if(validate()){

        // Store User Data
        var formData = readFormData();
    
        if (selectedRow == null){
            insertNewRecord(formData);
        }else{
            updateRecord(formData);
        }
        resetForm();
    }
}

function readFormData() {
    var formData = {};    
    formData["stuName"] = stuName.value;
    formData["stuReg"] = stuReg.value;
    formData["stuClass"] = stuClass.value;
    formData["stuSec"] = stuSec.value;
    formData["stuAge"] = stuAge.value;
    formData["stuMark"] = stuMark.value;

    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("stuList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.stuName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.stuReg;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.stuClass;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.stuSec;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.stuAge;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.stuMark;
    cell7 = newRow.insertCell(6)
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    stuName.value ="";
    stuReg.value ="";
    stuClass.value ="";
    stuSec.value ="";
    stuAge.value ="";
    stuMark.value ="";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;

    stuName.value = selectedRow.cells[0].innerHTML;
    stuReg.value = selectedRow.cells[1].innerHTML;
    stuClass.value = selectedRow.cells[2].innerHTML;
    stuSec.value = selectedRow.cells[3].innerHTML;
    stuAge.value = selectedRow.cells[4].innerHTML;
    stuMark.value = selectedRow.cells[5].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.stuName;
    selectedRow.cells[1].innerHTML = formData.stuReg;
    selectedRow.cells[2].innerHTML = formData.stuClass;
    selectedRow.cells[3].innerHTML = formData.stuSec;
    selectedRow.cells[4].innerHTML = formData.stuAge;
    selectedRow.cells[5].innerHTML = formData.stuMark;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("stuList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate(){
    isValid = true;
    
    if (stuName.value == "") {
        isValid = false;
        nameValidationError.classList.remove("hide");
    }else{
        isValid = true;
        if (!nameValidationError.classList.contains("hide")) 
        {
            nameValidationError.classList.add("hide");
        }
    }

    if (stuReg.value == "") {
        isValid = false;
        regValidationError.classList.remove("hide");
    }else{
        isValid = true;
        if (!regValidationError.classList.contains('hide')) {
            regValidationError.classList.add("hide")
        }
    }
    if (stuClass.value == "") {
        isValid = false;
        classValidationError.classList.remove("hide");
    }else{
        isValid = true;
        if (!classValidationError.classList.contains('hide')) {
            classValidationError.classList.add("hide")
        }
    }
    if (stuSec.value == "") {
        isValid = false;
        secValidationError.classList.remove("hide");
    }else{
        isValid = true;
        if (!secValidationError.classList.contains('hide')) {
            secValidationError.classList.add("hide")
        }
    }
    if (stuAge.value == "") {
        isValid = false;
        ageValidationError.classList.remove("hide");
    }else{
        isValid = true;
        if (!ageValidationError.classList.contains('hide')) {
            ageValidationError.classList.add("hide")
        }
    }
    if (stuMark.value == "") {
        isValid = false;
        markValidationError.classList.remove("hide");
    }else{
        isValid = true;
        if (!markValidationError.classList.contains('hide')) {
            markValidationError.classList.add("hide")
        }
    }
    return isValid;
}