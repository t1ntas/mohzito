//Id -> timer

//step 1
function diff() {
    var pastTime = moment('2022-07-23 23:00:00');
    var currentTime = moment();
    diff = moment.preciseDiff(pastTime, currentTime, true); //objetivo -> anos, meses, dias, horas, minutos e segundos

    diff_years = diff['years'];
    diff_months = diff['months'];
    diff_days = diff['days'];
    diff_hours = diff['hours'];
    diff_minutes = diff['minutes'];
    diff_seconds = diff['seconds'];

    document.getElementById("timer").innerHTML = diff_years + "Anos" + diff_months + "Dias" + diff_days + "Dias" + diff_hours + "Horas" + diff_minutes + "Minutos" + diff_seconds + "Segundos" ;

    //Step2
    setInterval(diff,1000);
} 