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

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  let guessedNumber = Number(document.querySelector('.guess').value);

  if (!guessedNumber) {
    document.querySelector('.message').textContent = 'Enter a Input';

    // if the number is correct
  } else if (guessedNumber === secretNumber) {
    if (score > 1) {
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.message').textContent = 'Correct Answer';
      score = score + 1;
      document.querySelector('.score').textContent = score;
      document.querySelector('.high-score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Loose!!';
    }
  } // if the guessed number is greater then secret number
  else if (guessedNumber > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess is to High';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Loose!!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // if the guessed number is smaller then secret number
  else if (guessedNumber < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Guess is to low';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Loose!!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// reset the game for to play again!!!

document.querySelector('.again').addEventListener('click', function () {
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.high-score').textContent = score;
  // let score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'start guessing...';

  document.querySelector('.score').textContent = 20;
  // document.querySelector('.high-score').textContent = 0;
  document.querySelector('.guess').value = '';
});
