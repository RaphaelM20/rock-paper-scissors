let computerChoice;
let humanScore = 0;
let computerScore = 0;

//Function to get computer choice

function getComputerChoice () {
    let randomNumber;
    randomNumber = Math.random();
    
    if (randomNumber <= 0.33) {
        computerChoice = 'rock';
        return computerChoice;
    }

    else if (randomNumber > 0.33 && randomNumber <= 0.66) {
        computerChoice = 'paper';
        return computerChoice;
    }

    else {
        computerChoice = 'scissors';
        return computerChoice;
    }
}

//Function to get human choice

function gethumanChoice () {
    let humanChoice = prompt('Your move: ').toLowerCase();
    return humanChoice;
}

//Function for the rock paper scissors game logic using human and computer choice

function playRound (humanChoice, computerChoice) {
    if (humanChoice === 'rock') {
        if (computerChoice == humanChoice) {
            showResult.textContent = `Computer also chose ${computerChoice}: Tie!`;
            
            return 'tie';
        }
        else if (computerChoice === 'paper') {
            showResult.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}: You Lose!`
            
            return 'computer';
        }
        else {
            showResult.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}: You Win!`
            
            return 'human';
        }
    }

    if (humanChoice === 'paper') {
        if (computerChoice == humanChoice) {
            showResult.textContent = `Computer also chose ${computerChoice}: Tie!`
            return 'tie';
        }
        else if (computerChoice === 'scissors') {
            showResult.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}: You Lose!`
            return 'computer';
        }
        else {
            showResult.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}: You Win!`
            return 'human';
        }
    }

    if (humanChoice === 'scissors') {
        if (computerChoice == humanChoice) {
            showResult.textContent = `Computer also chose ${computerChoice}: Tie!`
            return 'tie';
        }
        else if (computerChoice === 'rock') {
            showResult.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}: You Lose!`
            return 'computer';
        }
        else {
            showResult.textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}: You Win!`
            return 'human';
        }
    }
}

const showResult = document.querySelector('#result');

///////onclick update score

const btnRock = document.querySelector('#rock');
btnRock.addEventListener("click", function(){
    const humanChoice = 'rock';
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    updateScore(result);
})

const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener("click", function(){
    const humanChoice = 'paper';
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    updateScore(result);
})

const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener("click", function(){
    const humanChoice = 'scissors';
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    updateScore(result);
})

/////display score function
const scoreboard = document.querySelector('#scoreboard');
const playAgainBtn = document.querySelector('#play-again-btn');

playAgainBtn.addEventListener("click", function(){
    humanScore = 0;
    computerScore = 0;

    document.getElementById('human-score').textContent = 'You: 0';
    document.getElementById('computer-scoreboard').textContent = 'Computer: 0';
    
    showResult.textContent = 'Make your move!';
    playAgainBtn.style.display = 'none';

    setGameButtonsEnabled(true);
})

function updateScore(result){
    if (result === 'human'){
        humanScore += 1;
    }
    else if (result === 'computer') {
        computerScore += 1;
    }

    document.getElementById('human-score').textContent = 'You : ' + humanScore;
    document.getElementById('computer-scoreboard').textContent = 'Computer: ' + computerScore;

    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            showResult.textContent = 'YOU WIN!';
        }
        else {
            showResult.textContent = 'YOU LOSE! WOMP WOMP';
        }

        playAgainBtn.style.display = 'inline-block';
        setGameButtonsEnabled(false);
    }
}

function setGameButtonsEnabled(enabled) {
    btnRock.disabled = !enabled;
    btnPaper.disabled = !enabled;
    btnScissors.disabled = !enabled;

    const opacity = enabled ? '1' : '0.4';
    btnRock.style.opacity = opacity;
    btnPaper.style.opacity = opacity;
    btnScissors.style.opacity = opacity;
}