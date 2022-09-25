
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
    playerSelection = getPlayerChoice ()
    computerSelection = getComputerChoice()
    if (playerSelection == computerSelection){
        return "Tie Game"
    }

    else if (playerSelection == "Rock"){
        if (computerSelection == "Paper"){return "You Lose"}
        else if (computerSelection == "Scissor"){return "You Win"}
        }
    
    else if (playerSelection == "Paper"){
        if (computerSelection == "Scissor"){return "You Lose"}
        else if (computerSelection == "Rock"){return "You Win"}
        }

    else if (playerSelection == "Scissor"){
        if (computerSelection == "Rock"){return "You Lose"}
        else if (computerSelection == "Paper"){return "You Win"}
        }
    else "Error"
}


