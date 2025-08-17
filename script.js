let computerChoice;
let randomNumber;
let humanScore = 0;
let computerScore = 0;

//Function to get computer choice

function getComputerChoice () {
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
            console.log(`Computer also chose ${computerChoice}: Tie!`);
            console.log(`You: ${humanScore}, Computer: ${computerScore}`);
        }
        else if (computerChoice === 'paper') {
            computerScore += 1; 
            console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}: You Lose!`)
            console.log(`You: ${humanScore}, Computer: ${computerScore}`);
        }
        else {
            humanScore += 1;
            console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}: You Win!`)
            console.log(`You: ${humanScore}, Computer: ${computerScore}`);
        }
    }

    if (humanChoice === 'paper') {
        if (computerChoice == humanChoice) {
            console.log(`Computer also chose ${computerChoice}: Tie!`);
            console.log(`You: ${humanScore}, Computer: ${computerScore}`);
        }
        else if (computerChoice === 'scissors') {
            computerScore += 1; 
            console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}: You Lose!`)
            console.log(`You: ${humanScore}, Computer: ${computerScore}`);
        }
        else {
            humanScore += 1;
            console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}: You Win!`)
            console.log(`You: ${humanScore}, Computer: ${computerScore}`);
        }
    }

    if (humanChoice === 'scissors') {
        if (computerChoice == humanChoice) {
            console.log(`Computer also chose ${computerChoice}: Tie!`);
            console.log(`You: ${humanScore}, Computer: ${computerScore}`);
        }
        else if (computerChoice === 'rock') {
            computerScore += 1; 
            console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}: You Lose!`)
            console.log(`You: ${humanScore}, Computer: ${computerScore}`);
        }
        else {
            humanScore += 1;
            console.log(`You chose ${humanChoice}. Computer chose ${computerChoice}: You Win!`)
            console.log(`You: ${humanScore}, Computer: ${computerScore}`);
        }
    }
}

const humanSelection = gethumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame () {

}