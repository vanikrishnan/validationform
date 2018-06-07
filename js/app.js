function addDetails() {
    console.log('Add button clicked');
   
    if (validateFirstName()) {
    if (validateFullName()) {
    if(validateDesignation()){
if(validateempcode()){
if(validatebg()){
if(validatereason()){
if(validatemailid()){
if(validatephno()){
if(validatecontact()){
    if(validatedate()){
        postData();
    }else{
        displayErrorMessageForDate();
    }

}
else{
    displayErrorMessageForContact();
}
}else{
    displayErrorMessageForPhone();
}
}
else{
    displayErrorMessageForMailid();
}
}
else{
    displayErrorMessageForReason();
}
}
else{
    displayErrorMessageForBG();
}
}else{
    displayErrorMessageForEmpCode();
}
            }
            else{
                displayErrorMessageForDesig();
            }
        }
        else {
            // Display error message for full Name
        console.log("hi");
        
            displayErrorMessageForFullName();
        }
    }
     else {
        // Display error message for first Name
        console.log("hii");
        displayErrorMessageForFirstName();
    }

}

function displayErrorMessageForFirstName() {
    $('#errForFirstName').show();
}

function displayErrorMessageForFullName() {
    $('#errForFullName').show();
}

function displayErrorMessageForContact(){
    $('#errForcontactno').show();
}

function displayErrorMessageForPhone(){
    $('#errForphoneno').show();
}

function displayErrorMessageForDate(){
    $('#errForDateOfEmployment').show();
}

function displayErrorMessageForMailid(){
    $('#errFormailid').show();
}

function displayErrorMessageForReason(){
    $('#errForReason').show();
}

function displayErrorMessageForBG(){
    $('#errForBloodgroup').show();
}

function displayErrorMessageForEmpCode(){
    $('#errForEmployeecode').show();
}

function displayErrorMessageForDesig(){
    $('#errForDesignation').show();
}

function validateFirstName() {
    //var a='#'firstName;
    const firstName = $('#firstName').val();
    if (firstName === '') {
        return false;
    }
    else if(!(isNaN(firstName)))
    alert("Enter valid firstname");
    else
    return true;
}

function validateFullName() {
    const fullName = $('#fullName').val();
    if (fullName === '' ) {
        return false;
    }
    else if(!(isNaN(fullName)))
    alert("Enter valid fullname");
    else
    return true;
}



function validateDesignation() {
    var a='#designation';
    const desig = $(a).val();
    if (desig === '') {
        return false;
    }
    else if(!(isNaN(desig)))
alert("Enter valid designation");
else
    return true;
}

function validatedate(){
    const b=$('#dateofemployment').val();
    if(b=== '')
    return false;

else
return true;
}

function validateempcode(){
    const b=$('#employeecode').val();
    const d= /^\d{7}$/;
    if(b=== '')
    return false;
    else if(isNaN(b)  || !(d.test(b)))
    alert("enter number with 7 digis");
 
else
return true;
}
function validatebg(){
    const a=$('#bloodgroup').val();
    const r=/^(A|B|AB|O)[+-]$/;
if(a==='')
return false;
else if(!(r.test(a)))
    alert("enter valid blood group");
    else
    return true;
}

function validatereason(){
    const b=$('#re').val();
    if(b==='')
    return false;
else if(b=="None")
alert("select any one option");
else
return true;
}


function validatemailid(){
    const id=$('#mailid').val();
const a=/^([a-zA-Z0-9_\.\-])+\@virtusa.com+$/;
if(id==='')
return false;

else if(!(a.test(id)))
    alert("enter valid mailid");
    else
return true;
}

function validatephno(){
    const b=$('#phoneno').val();
    const d= /^\d{10}$/;
    if(b==='')
    return false;
    else if(isNaN(b)  || !(d.test(b)))
    alert("enter number with 10 digis");
else
return true;
}


function validatecontact(){
    const b=$('#contactno').val();
    const d= /^\d{10}$/;
    if(b==='')
    return false;
else if(isNaN(b) || !(d.test(b)))
alert("enter number with 10 digis");
else
return true;
}




function postData() {
    const data = {
        firstName: $('#firstName').val(),
        fullName: $('#fullName').val(),
        designation:$('#designation').val(),
        employeecode:$('#employeecode').val(),
        bloodgroup:$('#bloodgroup').val(),
        reason:$('#re').val(),
        dateofemployment:$('#dateofemployment').val(),
        emailid:$('#mailid').val(),
        phoneno:$('#phoneno').val(),
        contactno:$('#contactno').val()
    };
    $.ajax({
        type: "POST",
        url: 'https://validationform-5764f.firebaseio.com/validationform.json',
        data: JSON.stringify(data),
        success: onPostSuccess,
        // dataType: dataType
    });
}

const onPostSuccess = (data) => {
    console.log('Posting to firebase success');
    console.log(data);
}

$('document').ready(() => {
    $('.span-for-errors').hide();
});