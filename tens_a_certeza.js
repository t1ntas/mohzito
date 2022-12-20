$("#change").click(function(){
    $("#change").html("Sim");
    $("#move").show();
    $("#change").click(function(){
        alert("Ok bom saber,então espero que saibas que...")
    });
    $("#change").click(function(){
        window.location.href="./timer.html"
            });
});

$("#move").click(function(){
    change();
});

function change() {
    
    var i = 2;
    var j = 2;

    while(i < 100 || i > 400){
        i = Math.floor(Math.random()*200)+1;
        j = Math.floor(Math.random()*600)+1;
    }

    $("#move").css({top: j+'px', left:    i+'px'});
}