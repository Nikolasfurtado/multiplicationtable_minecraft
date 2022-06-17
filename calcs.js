const num1 = document.getElementById("n1");
const num2 = document.getElementById("n2");
var myanswer = document.getElementById("answer");
var video = document.getElementById("video");


function sortnumbers() {

    num1.innerText = Math.floor(Math.random() * 10 + 1);
    num2.innerText = Math.floor(Math.random() * 10 + 1);
}


function checkanswer() {


    Window.myanswer
    result = num1 * num2;

    num1.innerText = myanswer;





}