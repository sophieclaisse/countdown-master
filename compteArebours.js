var seconds= document.getElementById("secondes");
var minuts= document.getElementById("minutes");
var hours= document.getElementById("heures");

var timeS=1;
var timerS= 0;

var timeM=1;
var timeH=0;

seconds.innerHTML= timeS;
minuts.innerHTML = timeM;
hours.innerHTML = timeH;




//SECONDES -COMPTE A REBOURS
var decompteS = function () {

    timeS--;
    seconds.innerHTML = timeS;

    if (timeM<=0 && timeS<=0 && timeH<=0) { //arreter le decompte des secondes si le compteur minutes est a 0 en mm tps que compteur sec
        clearTimeout(timerS);//= arreter decompte des secondes
        alert ("Finish");
    }
    else {

        if (timeS <= 0) {
            timeS = 60;
            timeM--;
            minuts.innerHTML = timeM;
        }

        timerS = setTimeout(decompteS, 1000);

        if (timeM < 0) {// A REVOIR
            timeM=59;
            timeH--;
            hours.innerHTML= timeH;
            minuts.innerHTML= timeM;
            //minuts.innerHTML = "0";
        }

    }

};

document.getElementById("start").addEventListener("click", function (){
    decompteS();
    document.getElementById("start").disabled= true;
    document.getElementById("stop").enabled= true;
});

document.getElementById("stop").addEventListener("click", function(){
    clearTimeout(timerS);
    document.getElementById("start").disabled= false;
    document.getElementById("stop").enabled= false;
});

document.getElementById("reset").addEventListener("click", function () {
   timeS= "0"+ 0;
   seconds.innerHTML= timeS;
   document.getElementById("sec").value= "";

   timeM="0"+0;
    minuts.innerHTML= timeM;
    document.getElementById("min").value= "";

    timeH="0"+0;
    hours.innerHTML= timeH;
    document.getElementById("hou").value= "";

    document.getElementById("start").disabled= false;
});


document.getElementById("ValidSec").addEventListener("click", function () {
    var secU = document.getElementById("sec").value;
    timeS = secU;
    seconds.innerHTML= secU;

   /* if (secU>=0 && secU<10){
        seconds.innerHTML= "0"+ secU;
    }
    else{
        seconds.innerHTML= secU;
    }*/
});

document.getElementById("ValidMin").addEventListener("click", function () {
    var minU = document.getElementById("min").value;
    timeM = minU;
    minuts.innerHTML= minU;
});

document.getElementById("ValidHou").addEventListener("click", function (){
   var HouU= document.getElementById("hou").value;
   timeH= HouU;
   hours.innerHTML= HouU;
});







/*function decompteM(){

    minuts.innerHTML= timeM--;

    if(timeM==0){
        timeH--;
    }
}

//MINUTES






//HOURS

/*var timeH=24;

var decompteH= function(){
   hours.innerHTML= timeH--;

};*/



