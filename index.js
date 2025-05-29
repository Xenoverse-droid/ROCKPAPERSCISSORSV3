// Things to do. Add background music to the App
// Remove the background and change it to something that relates to rock 

// THE MAIN VARIABLES ARE BEING DECLARED AND SOME ASSIGNED A VALUE
let computerChoice; //Unassinged 
let userScore = 0;
let computerScore = 0;
let tie = []; //Used to determine the tie multiplier
let i = 0
document.querySelector('#tie-display').innerHTML = (`   `); // THE PLACE ASSIGNED TO DISPLAY TIE IS LEFT BLANK

function mainScript(userchoice) {
    // This is the main function that runs all the code

    computerChoiceAlgorithm();
    gameDecision(userchoice);

    /* PROBLEM TO SOLVE: 
    The button has to be disabled after the user score or computer score reaches 10
    Status: NOT SOLVED*/
    if (computerScore === 10 || userScore == 10) {
        const buttons = document.querySelectorAll(".btn");

        buttons.forEach(button => {button.disabled = true;});

        document.querySelector('#tie-display').innerHTML = '';

        if (computerScore > userScore) {
            document.querySelector('.announcement').innerHTML = `    YOU LOOSE`;
            document.querySelector('#userScore').innerHTML = ``;
            document.querySelector('#computerScore').innerHTML = ``;
            document.querySelector('.player1').innerHTML = ``;
            document.querySelector('.player2').innerHTML = ``;
        } else {
            document.querySelector('.announcement').innerHTML = `YOU WIN`;
            document.querySelector('#userScore').innerHTML = ``;
            document.querySelector('#computerScore').innerHTML = ``;
            document.querySelector('.player1').innerHTML = ``;
            document.querySelector('.player2').innerHTML = ``;
        }
        userScore = 0
        computerScore = 0
    }
}


function computerChoiceAlgorithm() {
    /* This function is responsible for generating the algorithm that desides the computer choice
    How it works:
    Math.random() generates a random number from 0 - 1;
    So for rock Math.random() has to be from 0 - 1/3
    paper from 1/3 - 2/3
    Scissors from 2/3 - 3/3  */
    const computerNumber = Math.random();
    if (computerNumber <= 1 / 3) {
        computerChoice = 'ROCK';
    } else if (computerNumber <= 2 / 3) {
        computerChoice = 'PAPER';
    } else if (computerNumber <= 3 / 3) {
        computerChoice = 'SCISSORS';
    }
}

function gameDecision(userchoice) {

    if (computerChoice === userchoice) {
        // This is like a manual loop in the sence that if tie is continuously gotten it adds a value to the array
        // It is used to increse the length of the array
        // Tie + the length of the array is displayed
        tie.push(i);
        document.querySelector('#tie-display').innerHTML = (`TIE x ${tie.length}`);
        i++;

    } else if (userchoice === 'ROCK' && computerChoice === 'SCISSORS') {
        userScore++;
        tie = [];
        document.querySelector('#userScore').innerHTML = (`${userScore}`);
        document.querySelector('#tie-display').innerHTML = computerChoice;
    } else if (userchoice === 'PAPER' && computerChoice === 'ROCK') {
        userScore++;
        tie = [];
        document.querySelector('#userScore').innerHTML = (`${userScore}`);
        document.querySelector('#tie-display').innerHTML = computerChoice;
    } else if (userchoice === 'SCISSORS' && computerChoice === 'PAPER') {
        userScore++;
        tie = [];
        document.querySelector('#userScore').innerHTML = (`${userScore}`);
        document.querySelector('#tie-display').innerHTML = computerChoice;
    } else {
        tie = [];
        computerScore++;
        document.querySelector('#tie-display').innerHTML = computerChoice;
        document.querySelector('#computerScore').innerHTML = (`${computerScore}`);
    }
}


function resetGame() {
    const buttons = document.querySelectorAll(".btn");

        buttons.forEach(button => {
            button.disabled = false;
        });
    userScore = 0;
    computerScore = 0;
    tie = [];
    document.querySelector('.player1').innerHTML = `User Score`;
    document.querySelector('.player2').innerHTML = `Computer Score`;
    document.querySelector('.announcement').innerHTML = ``;
    document.querySelector('#tie-display').innerHTML = ``;
    document.querySelector('#userScore').innerHTML = (`${userScore = 0}`);
    document.querySelector('#computerScore').innerHTML = (`${computerScore = 0}`);
}

