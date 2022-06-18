var num1 = document.getElementById("n1");
var num2 = document.getElementById("n2");
const res = document.getElementById("res");
var myanswer = document.getElementById("answer");
let video = document.getElementById("video");


function sortnumbers() {
    num1.innerText = Math.floor(Math.random() * 10 + 1);
    num2.innerText = Math.floor(Math.random() * 10 + 1);
}


function checkanswer() {

    num1 = num1.innerText;
    num2 = num2.innerText;
    var result = num1 * num2;
    res.innerText = myanswer;



}