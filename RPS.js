
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3);
        if (computerChoice == 0){
            return "Rock"
        }
        else if (computerChoice == 1 ){
            return "Paper"
        }
        else if (computerChoice == 2){
            return "Scissor"
        }
        else {
            return "Error"
        }
}

function getPlayerChoice (){
    let playerChoice = prompt("Input Rock, Paper or Scissor")
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    if (playerChoice == "Rock" || playerChoice == "Paper" || playerChoice == "Scissor") {
        return playerChoice;   
    }
    else {return "Invalid Choice"}
}


function playRound (playerSelection, computerSelection){
    playerSelection = getComputerChoice()
    computerSelection= getPlayerChoice () 
    if (playerSelection == computerSelection){
        return "Tie Game"
    }
}

