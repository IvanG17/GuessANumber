'use strict';

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Guess!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 21;

// console.log(document.querySelector(".guess").value);
// document

const secretNumber = Math.trunc(Math.random() * 25 + 1);
document.querySelector(".number").textContent = secretNumber;

function userClick() {
    let userGuess = Number(document.querySelector(".guess").value);
    if (!userGuess) {
        document.querySelector(".message").textContent = "No number!";
        wrongGuess();
    } else if (userGuess === secretNumber) {
        document.querySelector(".message").textContent = "Correct Number- Congratulations!"
    } else if (userGuess > secretNumber) {
        document.querySelector(".message").textContent = "Guess too high"
        wrongGuess();
    } else if (userGuess < secretNumber) {
        document.querySelector(".message").textContent = "Guess too low"
        wrongGuess();
    }
}

function wrongGuess() {
    let score = Number(document.querySelector(".score").textContent);
    score -= 1;
    document.querySelector(".score").textContent = score.toString();
}


document.querySelector('.check').addEventListener('click', userClick);