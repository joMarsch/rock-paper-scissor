function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let choice = "";
    switch (getRandomInt(3)) {
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors"
            break;
        default:
            return choice;
    }

    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return "We have a tie!"
    } else if ((playerSelection == "rock" && computerSelection == "scissors") 
    || (playerSelection == "scissors" && computerSelection == "paper") 
    || (playerSelection == "paper" && computerSelection == "rock")) {
        return "You won! " + playerSelection + " beats " + computerSelection;
    } else {
        return "You lost! " + computerSelection + " beats " + playerSelection; 
    }
}

function game() {
    let wins = 0;
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper or scissors?");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes("won")) {
            wins++;
        }
    }
    console.log("You have won " + wins + " time(s)")
    

}


game();