/*var password = document.getElementById("password")
  , correct_password = 'ola';*/

  function onSubmit() {
    if (document.getElementById("password").value == '1234') {window.location.href="./index.html"; }else{ alert('Palavra-Passe Incorreta');}
}



  /*function validatePassword(){
  if(password.value != correct_password) {
    confirm_password.setCustomValidity("Senhas diferentes!");
  } else {
    confirm_password.setCustomValidity('');
    window.location.href="./index.html"
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;*/