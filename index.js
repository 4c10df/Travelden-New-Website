var emailfield1 = document.getElementById("email-field1");
var emailerror1 = document.getElementById("email-error1");

function validateEmail2() {
    if(!emailfield1.value.match(/^[A-Za-z\._\-0-9]+[@][A-Za-z]+[+*\.][a-z]{3,4}$/)) {
      emailfield1.style.borderColor ="red";
      emailfield1.style.backgroundColor =" rgb(248, 200, 200)";
      return false;
    }
    else {
      
      emailfield1.style.borderColor ="green";
      emailfield1.style.backgroundColor ="";
      return true;
    }
  }

  //// for email  ////////
