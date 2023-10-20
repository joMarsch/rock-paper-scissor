const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");
const container = document.querySelector(".container");

let gameCounter = 0;
let winCounter = 0;
let lossCounter = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let choice = "";
    switch (getRandomInt(3)) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors"
            break;
        default:
            return choice;
    }

    return choice;
}

function gameResult(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "You both chose " + computerSelection + ". We have a tie!"
    } else if ((playerSelection == "rock" && computerSelection == "scissors") 
    || (playerSelection == "scissors" && computerSelection == "paper") 
    || (playerSelection == "paper" && computerSelection == "rock")) {
        return "You won, " + playerSelection + " beats " + computerSelection + "!";
    } else {
        return "You lost, " + computerSelection + " beats " + playerSelection + "!"; 
    }
}

function countingPoints(message) {

    if (message.includes("won")) {
        winCounter++;
    }

    if (message.includes("lost")) {
        lossCounter++;
    }
}

function addingParagraph(text) {
    let paragraph = document.createElement("p");
    paragraph.textContent = text;
    container.appendChild(paragraph);
}

function playRound(playerSelection) {
    if(gameCounter == 0) {
        container.replaceChildren();
    }

    gameCounter++

    let computerSelection = getComputerChoice();

    let message = gameResult(playerSelection, computerSelection);

    countingPoints(message);

    addingParagraph(message);

    if(gameCounter == 5) {
        if (winCounter == lossCounter) {
            let gameResultMessage = "You played a tie!";
        } else {
            let gameResultMessage = "You played 5 games. You " + ((winCounter > lossCounter) ? "won!" : "lost :(");
        }
        addingParagraph(gameResultMessage);
        gameCounter = 0;
        winCounter = 0;
        lossCounter = 0;
    }
}

function main() {
    rockButton.addEventListener("click", () => playRound("rock"));
    paperButton.addEventListener("click", () => playRound("paper"));
    scissorsButton.addEventListener("click", () => playRound("scissors"));

}

main();