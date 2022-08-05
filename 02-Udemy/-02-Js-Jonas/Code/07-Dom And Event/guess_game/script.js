'use strict';
let message=document.querySelector('.message')
let guessInput = document.querySelector('.guess');
const checkButton = document.querySelector('.check')
const scorevalue = document.querySelector(".score")
const highscorevalue = document.querySelector(".highscore")
const againButton = document.querySelector(".again")
const VALUE_UNDEFIEND = "NO NUMBER INTERED";
const VALUE_LOW = "TOO LOW📉";
const VALUE_HIGH = "TOO HIGH 📈"
const VALUE_CORRECT = "CORRECT 🎉✨"
const LOSE_MESSAGE = "😥you lost game";
let userinput = () => guessInput.value;
let randomNumber = Math.floor(Math.random() * 20) + 1
let score = 20;
let highScore = 0;
console.log(randomNumber);

function displayMessage(messageArg) {
    const message = document.querySelector('.message');
    message.textContent = messageArg
}

function winEffects() {
    document.querySelector('body').style.backgroundColor = '#60b347';
    let Numberbox = document.querySelector('.number')
    Numberbox.textContent = randomNumber;
    Numberbox.style.width = "90rem";
}

function reset() {
    scorevalue.textContent = 20;
    score = 20;
    guessInput.value = ""
    message.textContent = "Start guessing... "
    randomNumber = Math.floor(Math.random() * 20) + 1;
    console.log(randomNumber)
    document.querySelector('body').style.backgroundColor = '#222';
    let Numberbox = document.querySelector('.number')
    Numberbox.textContent = "?";
    Numberbox.style.width = "30rem";
}

function check(randomNumber, userinput) {
    if (!userinput) {
        displayMessage(VALUE_UNDEFIEND);
        return
    }
    if (randomNumber === userinput) {
        displayMessage(VALUE_CORRECT);
        highscorevalue.textContent = score;
        if (score > highScore) {
            highScore = score;
            highscorevalue.textContent = highScore;
        }
        winEffects()
    } else if (randomNumber !== userinput) {
        if (score < 1) {
            displayMessage(LOSE_MESSAGE);
            scorevalue.textContent = 0;
            return
        }
        let selectedMessage = randomNumber > userinput ? VALUE_LOW : VALUE_HIGH;
        displayMessage(selectedMessage);
        --score;
        scorevalue.textContent = score;
    }
}
againButton.addEventListener('click', reset)
checkButton.addEventListener('click', () => {
    let input = Number(userinput());
    check(randomNumber, input)
})