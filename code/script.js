'use strict';


let secretNumber = Math.trunc(Math.random()*20) +1;

let score = 20;
let highscore = 0;
// khi ấn vào nút 'check'
document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

        // Khi người chơi đoán đúng
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!';
    } else if(guess === secretNumber) {

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        }

        // khi người chơi đoán cao hơn 
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost game!';
            document.querySelector('.score').textContent = 0;
        }
        
        // khi người chơi đoán thấp hơn
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost game!';
            document.querySelector('.score').textContent = 0;
        }
    }

})

// khi ấn vào nút again
document.querySelector('.btn').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) +1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
})