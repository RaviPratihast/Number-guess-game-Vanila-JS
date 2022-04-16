'use strict';

// checking the display

// console.log(document.querySelector('.answer').textContent);

// document.querySelector('.message').textContent = 'Correct Answer';
// document.querySelector('.message').textContent = 'Wrong Input';

// testing the secret number in the console.

// const test = (document.querySelector('.number').textContent = 12);
// console.log(document.querySelector('.number').textContent);
// console.log(typeof test);

// testing the input part and the button.

/*

document
  .querySelector('.check')
  .addEventListener('click', () => console.log('adad'));

function check() {
  console.log('clicked');
}

document.querySelector('.check').addEventListener('click',function(){
  if(!user)
});

*/
/*
document.querySelector('.check').addEventListener('click', function () {
  console.log('clicked!');
});

*/

// what will happen when we provide a input and press the button to submit it? and i want to see the value in the input field ***i have not used Form tag !!

/*
document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
});
*/

// const secretNumber = (document.querySelector('.number').textContent = 10);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  let guessedNumber = Number(document.querySelector('.guess').value);

  if (!guessedNumber) {
    // document.querySelector('.message').textContent = 'Enter a Input';
    displayMessage('Enter a Input');

    // if the number is correct
  } else if (guessedNumber === secretNumber) {
    if (score > 1) {
      document.querySelector('.number').textContent = secretNumber;
      // document.querySelector('.message').textContent =
      //   '😀 Yayy!!!.....Correct Answer';
      displayMessage('😀 Yayy!!!.....Correct Answer');
      score = score + 1;

      document.querySelector('.score').textContent = score;
      // document.querySelector('.high-score').textContent = highScore;
      document.querySelector('body').style.backgroundColor = '#22c55e';
      // document.querySelector('.number').style.width = '8rem';

      if (score > highScore) {
        highScore = score;
        document.querySelector('.high-score').textContent = highScore;
      }
    } else {
      document.querySelector('.message').textContent = '😭 You Loose!!';
      // displayMessage()
      document.querySelector('body').style.backgroundColor = '#ef4444';
    }
  }

  // condition for checking the value is less then or greater then secret number.
  else if (guessedNumber !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guessedNumber > secretNumber
      //     ? // displayMessage()
      //       '📈 😄 Guess is to High'
      //     : '📉 😄 Guess is to low';

      displayMessage(
        guessedNumber > secretNumber
          ? // displayMessage()
            '📈 😄 Guess is to High'
          : '📉 😄 Guess is to low'
      );
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😭 You Loose!!';

      displayMessage('😭 You Loose!!');
      document.querySelector('body').style.backgroundColor = '#ef4444';

      document.querySelector('.score').textContent = 0;
    }
  }

  // reset the game for to play again!!!

  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = '🤔 start guessing...';
    displayMessage('🤔 start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.high-score').textContent = highScore;
    document.querySelector('.number').textContent = '?';
    // document.querySelector('.high-score').textContent = 0;
    // empty string is for input field. Input values are always a string.
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
  });
});
