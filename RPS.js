
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
    let result = ""
    if (playerSelection == computerSelection){
        result = ", tie game!"; return "The computer picked " +  computerSelection + result
    }

    else if (playerSelection == "Rock"){
        if (computerSelection == "Paper"){result = ", you lost!"; return "The computer picked " +  computerSelection + result; computerScore++}
        else if (computerSelection == "Scissor"){result = ", you won!" ; return "The computer picked " +  computerSelection + result; playerScore++}
        }
    
    else if (playerSelection == "Paper"){
        if (computerSelection == "Scissor"){result = ", you lost!" ; return "The computer picked " +  computerSelection + result; computerScore++}
        else if (computerSelection == "Rock"){result = ", you won!"; return "The computer picked " +  computerSelection + result; playerScore++}
        }

    else if (playerSelection == "Scissor"){
        if (computerSelection == "Rock"){result = ", you lost!"; return "The computer picked " +  computerSelection + result; computerScore++}
        else if (computerSelection == "Paper"){result = ", you won!"; return "The computer picked " +  computerSelection + result; playerScore++}
        }
    else "Error"
}


function playGame (playerScore, computerScore){
    for (let i = 1; i < 5; i++){
        playRound()
        console.log(playRound ());
    }

}


//console.log("Your Score is " + playerScore)
//console.log("The computer's score is " + computerScore)
//let playerScore = parseInt(0);
//let computerscore = parseint(0);


