var frase = 'always', frase2 = 'Always',
    data = '23/07/2022',
    senha = '749123';
    //nome = document.getElementById("nome").value;
  
    function modifyState() {
      let stateObj = { id: "100" };
      window.history.replaceState(stateObj,"portofoliogallery.html", "/mohzito/portofoliogallery.html");
  }
  
  function validar() {
    if (((document.getElementById("frase").value == frase) || (document.getElementById("frase").value == frase2) ) & (document.getElementById("data").value == data) & (document.getElementById("senha").value == senha)) {
      alert("Boa, bem-vindo(a), " + document.getElementById("nome").value);
      console.log(nome);
      modifyState();
      window.location.reload();
      window.location.reload(false);      
    }
    else {
      alert("Erro!");
    }
  }
  //PARA POSSIVEIS ERROS - USAR !
  //https://acervolima.com/como-substituir-url-simples-por-link-usando-javascript/
  //https://acervolima.com/como-modificar-o-url-sem-recarregar-a-pagina-usando-javascript/ e chamar o window.reload();


  //ver cena que ao clicar na foto ela expande (NO TELEMOVEL e no pc caso dê muito trabalho)