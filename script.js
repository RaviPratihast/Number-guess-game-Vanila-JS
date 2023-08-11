'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guessedNumber = Number(document.querySelector('.guess').value);

  if (!guessedNumber) {
    displayMessage('Enter a Input');
  } else if (guessedNumber === secretNumber) {
    if (score > 1) {
      document.querySelector('.number').textContent = secretNumber;

      displayMessage('😀 Yayy!!!.....Correct Answer');
      score = score + 1;

      document.querySelector('.score').textContent = score;

      document.querySelector('body').style.backgroundColor = '#22c55e';

      if (score > highScore) {
        highScore = score;
        document.querySelector('.high-score').textContent = highScore;
      }
    } else {
      displayMessage('😭 You Loose!!');
      document.querySelector('body').style.backgroundColor = '#ef4444';
    }
  } else if (guessedNumber !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guessedNumber > secretNumber
          ? '📈 😄 Guess is to High'
          : '📉 😄 Guess is to low'
      );
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😭 You Loose!!');
      document.querySelector('body').style.backgroundColor = '#ef4444';

      document.querySelector('.score').textContent = 0;
    }
  }

  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('🤔 start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.high-score').textContent = highScore;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
  });
});
