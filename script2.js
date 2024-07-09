const choiceButtons = document.querySelectorAll('.choice-button');
const userChoice = document.getElementById('user-choice');
const computerChoice = document.getElementById('computer-choice');
const result = document.getElementById('result');
const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('computer-score');

const choices = ['rock', 'paper', 'scissors'];

let userScoreCount = 0;
let computerScoreCount = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateDisplay(userChoiceText, computerChoiceText, resultText) {
    userChoice.textContent = `User's Choice: ${userChoiceText}`;
    computerChoice.textContent = `Computer's Choice: ${computerChoiceText}`;
    result.textContent = resultText;
}

function updateScore(userScoreCount, computerScoreCount) {
    userScore.textContent = `User: ${userScoreCount}`;
    computerScore.textContent = `Computer: ${computerScoreCount}`;
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        userScoreCount++;
        return 'You Win!';
    } else {
        computerScoreCount++;
        return 'You Lose!';
    }
}

choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const userChoiceText = button.textContent.toLowerCase();
        const computerChoiceText = getComputerChoice();
        const resultText = determineWinner(userChoiceText, computerChoiceText);

        updateDisplay(userChoiceText, computerChoiceText, resultText);
       updateScore(userScoreCount, computerScoreCount);
    });
});