//グー：0、チョキ：1、パー：2
var win = 0;
var lose = 0;
var even = 0;

var kachi = document.getElementById("kachi");
var make = document.getElementById("make");
var wake = document.getElementById("wake");

//kachi.addEventListener('click', () => {

//})

var gunFirst = 0;
var gun = document.getElementById("gun");
gun.style = "visibility: hidden;";

var tekinote = document.getElementById("tekinote");
var result = document.getElementById("result");

var message = "";

function janken(player){

    var computer = Math.floor(Math.random()*3);
    tekinote.src = "pictures/"+computer+".png";

    if (gunFirst == 0 && win+3 == lose){
        message = "負けすぎです。銃を解放します";
        lose ++;
        gunFirst = 1;
        gun.style = "visibility: visible;";
    }else if (player+1 == computer || player-2 == computer || player == 3){
        message = "あなたの勝ちです。";
        win ++;
    }else if (player-1 == computer || player+2 == computer){
        message = "あなたの負けです。";
        lose ++;
    }else if (player == computer){
        message = "あいこです。";
        even ++;
    }else{
        alert("error")
    }
    result.innerHTML = message;
    kachi.innerHTML = win;
    make.innerHTML = lose;
    wake.innerHTML = even;
}