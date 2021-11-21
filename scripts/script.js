console.log("JS_LINKED");

// DEV_ is a log for the developer

function computerPlay() {
    randomNum = Math.floor(Math.random() * 3);
    console.log("DEV_Random number generated from computerPlay :", randomNum);

    /* 0 is rock
       1 is paper
       2 is scissor
    */

    if (randomNum == 0) {
        console.log("Computer choose: ROCK");
    }
    else if (randomNum == 1) {
        console.log("Computer choose: PAPER");
    }
    else {
        console.log("Computer choose: SCISSOR");
    }

}

const playerWins_state = 'Player wins!';
const computerWins_state = 'Computer Wins!';



function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == 'paper') {
        console.log(computerWins_state);
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log(playerWins_state);
    }
    else if (playerSelection == 'scissor' && computerSelection == 'paper') {
        console.log(playerWins_state);
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissor') {
        console.log(computerWins_state);
    }
}



const playerSelection = 'rock';
const computerSelection = computerPlay();