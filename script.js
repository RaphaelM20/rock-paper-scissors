let computerChoice;
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

const btnRock = document.querySelector('#rock');
btnRock.addEventListener("click", function(){
    const humanChoice = 'rock';
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
})

const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener("click", function(){
    const humanChoice = 'paper';
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
})

const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener("click", function(){
    const humanChoice = 'scissors';
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
})

/*
function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        let human = gethumanChoice();
        let computer = getComputerChoice();
        let result = playRound(human, computer);

        if (result === 'human') {
            humanScore ++;
        }
        else if (result === 'computer'){
            computerScore ++;
        }
    }
    
    if (humanScore > computerScore) {
        showResult.textContent(`Your Score: ${humanScore}, Computer Score: ${computerScore}. YIPEE you win!`)
    }
    else if (humanScore < computerScore){
        showResult.textContent(`Your Score: ${humanScore}, Computer Score: ${computerScore}. You\'re a LOSER.`)
    }
    else {
        showResult.textContent(`Your Score: ${humanScore}, Computer Score: ${computerScore}. It's a draw -____-`)
    }
}

playGame();*/