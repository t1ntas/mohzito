//Id -> timer

//step 1
function diff(){
    var a = moment('07/23/2022 23:31:12');
    var b = moment();
    diff = moment.preciseDiff(a, b, true);

    intervals = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'];
    output = [];
    
    for (var i = 0; i < intervals.lenght; i++){
      var d = diff[intervals[i]]; var d = d < 10 ? '0' + d : d;
      output.push(d + '' + intervals[i]);
    }

    diff_years = diff['years'];
    diff_months = diff['months'];
    diff_days = diff['days'];
    diff_hours = diff['hours'];
    diff_minutes = diff['minutes'];
    diff_seconds = diff['seconds'] < 10 ? "0" + diff_seconds : diff_seconds;

    document.getElementById("demo").innerHTML = diff_years + "years" + diff_months + "months" + diff_days + "days" + diff_hours + "Hours" + diff_minutes + "Minutes" + diff_seconds + "Seconds" ;

    //Step2
    setInterval(diff, 1000);
} 