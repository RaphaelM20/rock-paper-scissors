let computerChoice;
let randomNumber;

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

getComputerChoice();

function humanChoice () {
    let humanChoice = prompt('Your move: ');
    let humanChoiceLower = humanChoice.toLowerCase();

    if (humanChoiceLower === 'rock') {
        if (computerChoice == humanChoiceLower) {
            console.log(`Computer also chose ${computerChoice}: Tie!`)
        }
        else if (computerChoice === 'paper') {
            console.log(`You chose ${humanChoiceLower}. Computer chose ${computerChoice}: You Lose!`)
        }
        else {
            console.log(`You chose ${humanChoiceLower}. Computer chose ${computerChoice}: You Win!`)
        }
    }

    if (humanChoiceLower === 'paper') {
        if (computerChoice == humanChoiceLower) {
            console.log(`Computer also chose ${computerChoice}: Tie!`)
        }
        else if (computerChoice === 'scissors') {
            console.log(`You chose ${humanChoiceLower}. Computer chose ${computerChoice}: You Lose!`)
        }
        else {
            console.log(`You chose ${humanChoiceLower}. Computer chose ${computerChoice}: You Win!`)
        }
    }

    if (humanChoiceLower === 'scissors') {
        if (computerChoice == humanChoiceLower) {
            console.log(`Computer also chose ${computerChoice}: Tie!`)
        }
        else if (computerChoice === 'rock') {
            console.log(`You chose ${humanChoiceLower}. Computer chose ${computerChoice}: You Lose!`)
        }
        else {
            console.log(`You chose ${humanChoiceLower}. Computer chose ${computerChoice}: You Win!`)
        }
    }
}

humanChoice();