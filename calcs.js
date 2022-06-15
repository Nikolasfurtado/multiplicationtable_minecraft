const num1 = document.getElementById("n1");
const num2 = document.getElementById("n2");
const myanswer = document.getElementById("answer").innerText;
var video = document.getElementById("video");

function sortnumbers() {

    num1.innerText = Math.floor(Math.random() * 10 + 1);
    num2.innerText = Math.floor(Math.random() * 10 + 1);
}


function checkanswer() {

    result = num1 * num2;

    if (result === myanswer) {

        num1.innerText = "ola, a comparação deu certo";

    }

    return num1

}