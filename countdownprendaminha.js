var countDownDate = new Date("Dec 17, 2022 20:40:00").getTime();
    

    // +1 segundo
    var x = setInterval(function() {
    
      // Data atual
      var now = new Date().getTime();
        
      var distance = countDownDate - now;
        
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      document.getElementById("prendaminha").innerHTML = days + " Dias " + hours + " Horas "
      + minutes + " Minutos " + seconds + " Segundos ";
        
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("prendaminha").innerHTML = "Agora sai musica!";
      }
    }, 1000);