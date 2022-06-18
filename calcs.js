var myanswer = document.getElementById("answer");
var video = document.getElementById("video");
var heart = document.getElementById("heart");
var life = document.getElementById("resposta");
var correct = 0;
var num1;
var num2;
var movies = ["video.mp4", "video1.mp4", "video2.mp4"];

function sortnumbers() {
    num1 = document.getElementById("n1").innerText = Math.floor(Math.random() * 10 + 1);
    num2 = document.getElementById("n2").innerText = Math.floor(Math.random() * 10 + 1);
}

function checkanswer() {
    var resp1 = num1;
    var resp2 = num2;
    var result = resp1 * resp2;




    if (result == answer.value) {

        let heartnew = '<img class="heart" src="resources/heart.png" alt=""></img>';
        heart.insertAdjacentHTML("afterbegin", heartnew);

        correct += 1;

        sortnumbers();

        if (correct >= 10) {
            video.play();
            resposta.innerText = "Parabéns! vocÊ ganhou direito a um vídeo!";
        }





    } else {
        resposta.innerText = "Resposta Incorreta! Tente de novo."
        setTimeout(function() { resposta.innerText = "" }, 700);

    }




}