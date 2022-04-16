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

    // if the number is correct
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
  }

  // condition for checking the value is less then or greater then secret number.
  else if (guessedNumber !== secretNumber) {
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

  // reset the game for to play again!!!

  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('🤔 start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.high-score').textContent = highScore;
    document.querySelector('.number').textContent = '?';

    // empty string is for input field. Input values are always a string.
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
  });
});
