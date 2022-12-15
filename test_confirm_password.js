var pass = '1234', 
  password = document.getElementById("password");
  
  function modifyState() {
    let stateObj = { id: "100" };
    window.history.replaceState(stateObj,"timer.html", "/timer.html");
}
  
  
  function validar() {
    if (document.getElementById("password").value != pass) {
      alert("Error!");      
    }  
    else {
      alert("Boa");
      modifyState();
      window.location.reload(); 
      window.location.reload(false);
    }
  }


  //PARA POSSIVEIS ERROS - USAR !
  //https://acervolima.com/como-substituir-url-simples-por-link-usando-javascript/
  //https://acervolima.com/como-modificar-o-url-sem-recarregar-a-pagina-usando-javascript/ e chamar o window.reload();