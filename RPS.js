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

let result = ""
function playRound (playerSelection, computerSelection){
    
    playerSelection = getPlayerChoice ()
    computerSelection = getComputerChoice()
    

    if (playerSelection == computerSelection){
        result = ", tie game!"; return "The Computer picked " +  computerSelection + result
    }

    else if (playerSelection == "Rock"){
        if (computerSelection == "Paper"){result = ", you lost!"; return "The Computer picked " +  computerSelection + result;}
        else if (computerSelection == "Scissor"){result = ", you won!" ; return "The Computer picked " +  computerSelection + result;}
        }
    
    else if (playerSelection == "Paper"){
        if (computerSelection == "Scissor"){result = ", you lost!" ; return "The Computer picked " +  computerSelection + result; }
        else if (computerSelection == "Rock"){ result = ", you won!"; return "The Computer picked " +  computerSelection + result; }
        }

    else if (playerSelection == "Scissor"){
        if (computerSelection == "Rock"){result = ", you lost!"; return "The Computer picked " +  computerSelection + result;}
        else if (computerSelection == "Paper"){result = ", you won!"; return "The Computer picked " +  computerSelection + result;}
        }
    else "Error"
}


function playGame (){
    let playerScore = parseInt(0);
    let computerScore = parseInt(0);
    for (let i = 0; i < 5; i++){
        console.log(playRound ());
            if (result == ", you lost!"){computerScore++}
            else if (result == ", you won!"){playerScore++}
        console.log("The Computer's score is " + computerScore)
        console.log("Your score is " + playerScore)
            
    }
            if (computerScore > playerScore){alert("You Lost!")}
            else if(computerScore < playerScore){alert("You Won!")}
            else if(computerScore == playerScore){alert("It's a Tie!")}
}

