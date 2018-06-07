function addDetails() {
    console.log('Add button clicked');
   
    if (validateFirstName()) {
        if (validateFullName()) {
            // Do a Post
            postData();
        }
        else {
            // Display error message for full Name
        console.log("hi");
        
            displayErrorMessageForFullName();
        }
    } else {
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


function validateFirstName() {
    //var a='#'firstName;
    const firstName = $('#firstName').val();
    if (firstName === ''  || !fullName.match('/^[a-zA-Z]+$/')) {
        return false;
    }
    return true;
}

function validateFullName() {
    const fullName = $('#fullName').val();
    if (fullName === '' || !fullName.match('/^[a-zA-Z]+$/')) {
        return false;
    }
    return true;
}

function validateDesignation() {
    var a='#designation';
    const desig = $(a).val();
    if (desig === '' || !fullName.match('/^[a-zA-Z]+$/')) {
        return false;
    }
    return true;
}

function validatemailid(){
    const id=$('#mailid').val();
const a=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if(a.test(id))
    return true;
return false;
}




function postData() {
    const data = {
        firstName: $('#firstName').val(),
        fullName: $('#fullName').val()
    };
    $.ajax({
        type: "POST",
        url: 'https://id-application-form.firebaseio.com/validationform.json',
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