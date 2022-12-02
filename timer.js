var countUpDate = new Date("Jul, 23 2022 22:30:00").getTime();
    
      // +1 segundo
      var x = setInterval(function() {
    
      // Data atual
      var now = new Date().getTime();

      var distance = now - countUpDate;

        /*
        var secondsInADay = 60 * 60 * 1000 * 24, secondsInAHour = 60 * 60 * 1000;
    
        days = Math.floor(timeDifference / (secondsInADay) * 1);
        years = Math.floor(days / 365);
        if (years > 1){ days = days - (years * 365) }
        hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
        mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
        secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);
        */

      
      //var years = Math.floor(distance /(1000 * 60 * 60 * 60 * 60) / 2);
      var months = Math.floor(distance / (1000 * 60 * 60 * 60));
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      document.getElementById("demo").innerHTML =/*years + " Anos " +*/ months + " Meses " + days + " Dias " + hours + " Horas "
      + minutes + " Minutos " + seconds + " Segundos ";
      
    }, 1000);