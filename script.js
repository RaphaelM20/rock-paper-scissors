function getComputerChoice () {
    let randomNumber;
    randomNumber = Math.random();

    let computerChoice;

    if (randomNumber <= 0.33) {
        computerChoice = 'rock';
        return computerChoice;
    }

    else if (randomNumber > 0.33 && randomNumber <= 0.66) {
        computerChoice = 'paper';
        return computerChoice;
    }

    else {
        computerChoice = 'scisscors';
        return computerChoice;
    }
}

console.log(getComputerChoice());