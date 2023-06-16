import confetti from 'https://cdn.skypack.dev/canvas-confetti';

const btn = document.getElementById("btn")
function makeConfetti(){
    confetti()
}

btn.addEventListener("click", makeConfetti)