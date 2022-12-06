window.onload = function() {
    countUpFromTime("July 23, 2022 23:30:00", 'countup1');
  };
  function countUpFromTime(countFrom, id) {
    countFrom = new Date(countFrom).getTime();
    var now = new Date(),
        countFrom = new Date(countFrom),
        timeDifference = (now - countFrom);

    var secondsInADay = 60 * 60 * 1000 * 24,
        secondsInAHour = 60 * 60 * 1000;

        var s = countFrom.getFullYear(); // ano atual 
        
        if ((s % 4 == 0) && ((s % 100 != 0) || (s % 400 == 0))){ // se é bissexto ou comum 
          div = 366; // dias se for bissexto
        } else {
          div = 365; // dias se for comum
        }

    days = Math.floor(timeDifference / (secondsInADay) * 1); //numero de dias -> 135/136
    years = Math.floor(days / div); // indica os anos pelos os dias que ja passaram e pelo resto calculado na var s
    if (years > 1)
        {
          days = days - (years * div);
        }

    var test2 = months_days(years); //vai buscar a array 
    var index = countFrom.getMonth(); // indica o mes
    months = Math.floor(days / test2[index]);
    var test = months_days(years);
    rest_days = Math.floor(days % test[index]);
    hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
    mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
    secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);
  
    var idEl = document.getElementById(id);
    idEl.getElementsByClassName('years')[0].innerHTML = years;
    idEl.getElementsByClassName('months')[0].innerHTML = months;
    idEl.getElementsByClassName('days')[0].innerHTML = rest_days;
    idEl.getElementsByClassName('hours')[0].innerHTML = hours;
    idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
    idEl.getElementsByClassName('seconds')[0].innerHTML = secs;
  
    clearTimeout(countUpFromTime.interval);
    countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
  }
  function months_days(y){
    var y=y || new Date().getFullYear();
    var feb= y % 4 == 0 && (y % 100 || y % 400== 0) ? 29: 28;
    return [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}