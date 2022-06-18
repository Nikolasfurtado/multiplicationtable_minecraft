var res = document.getElementById("res");
var myanswer = document.getElementById("answer");
var video = document.getElementById("video");
var correct = 0;


var num1 = document.getElementById("n1").innerText = Math.floor(Math.random() * 10 + 1);
var num2 = document.getElementById("n2").innerText = Math.floor(Math.random() * 10 + 1);

function sortnumbers() {
    num1 = document.getElementById("n1").innerText = Math.floor(Math.random() * 10 + 1);
    num2 = document.getElementById("n2").innerText = Math.floor(Math.random() * 10 + 1);

}
var resp1 = num1.innerText;
var resp2 = num2.innerText;

function checkanswer() {

    var result = resp1 * resp2;

    if (myanswer.value == result) {
        video.play();
    }

    sortnumbers();

}