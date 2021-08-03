'use strict';

let randomNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  console.log(guessNumber);
  if (!guessNumber) {
    document.querySelector('.message').textContent = '🚫 No Number!';
  } else if (guessNumber === randomNumber) {
    document.querySelector('body').backgroundColor = 'green';
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('.number').style.width = '30rem';
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guessNumber < randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⏫ Too Low';

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lose The Game';
      document.querySelector('.score').textContent = '0';
    }
  } else if (guessNumber > randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⏬ Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lose The Game';
      document.querySelector('.score').textContent = '0';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.floor(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
