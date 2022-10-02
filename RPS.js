//game stuff
let result = "";
let playerScore = 0;
let computerScore = 0;

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
};

function getPlayerChoice (){
    let playerChoice = prompt("Input Rock, Paper or Scissor")
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    if (playerChoice == "Rock" || playerChoice == "Paper" || playerChoice == "Scissor") {
        return playerChoice;   
    }
    else {return "Invalid Choice"}
};

function restartGame() {
    playerScore = 0
    document.getElementById("playerScore").innerHTML = "Player Score: 0"
    computerScore = 0
    document.getElementById("computerScore").innerHTML = "Computer Score: 0"
    document.getElementById("result").innerText = ""
}


function playRound (playerSelection, computerSelection){
    
    playerSelection = getPlayerChoice ()
    computerSelection = getComputerChoice()
    

    if (playerSelection == computerSelection){
        result = "The Computer picked " +  computerSelection + ", tie game!"; 
        return document.getElementById("result").innerText = result;
    }

    else if (playerSelection == "Rock"){
        if (computerSelection == "Paper"){
            result = "The Computer picked " +  computerSelection + ", you lost!";
            document.getElementById("playerScore").innerHTML = "Player Score: " + playerScore;
            document.getElementById("computerScore").innerHTML = "Computer Score: " + ++computerScore;
            return document.getElementById("result").innerText = result;
        }

        else if (computerSelection == "Scissor"){
            result = "The Computer picked " +  computerSelection + ", you won!";
            document.getElementById("playerScore").innerHTML = "Player Score: " + ++playerScore;
            document.getElementById("computerScore").innerHTML = "Computer Score: " + computerScore;
            return document.getElementById("result").innerText = result;
        }
    }
    
    else if (playerSelection == "Paper"){
        if (computerSelection == "Scissor"){
            document.getElementById("playerScore").innerHTML = "Player Score: " + playerScore;
            document.getElementById("computerScore").innerHTML = "Computer Score: " + ++computerScore;
            result =  "The Computer picked " +  computerSelection + ", you lost!";
            return document.getElementById("result").innerText = result;
        }

        else if (computerSelection == "Rock"){
            result = "The Computer picked " +  computerSelection + ", you won!"; 
            document.getElementById("playerScore").innerHTML = "Player Score: " + ++playerScore; 
            document.getElementById("computerScore").innerHTML = "Computer Score: " + computerScore;
            return document.getElementById("result").innerText = result;
        }
    }

    else if (playerSelection == "Scissor"){
        if (computerSelection == "Rock"){
            result = "The Computer picked " +  computerSelection + ", you lost!";
            document.getElementById("playerScore").innerHTML = "Player Score: " + playerScore;
            document.getElementById("computerScore").innerHTML = "Computer Score: " + ++computerScore;
            return document.getElementById("result").innerText = result;
        }
        else if (computerSelection == "Paper"){
            result = "The Computer picked " +  computerSelection + ", you won!";
            document.getElementById("playerScore").innerHTML = "Player Score: " + ++playerScore;
            document.getElementById("computerScore").innerHTML = "Computer Score: " + computerScore;
            return document.getElementById("result").innerText = result;
        }
        }
    else document.getElementById("result").innerText = "Invalid Input"
    };


//ui stuff
function scoreCheck(){
    if (playerScore < 5 && computerScore < 5){
        document.getElementById("playButton").onclick = playRound;
        document.getElementById("playButton").innerText = "Play Round";
        document.getElementById("playerScore").innerHTML = "Player Score: " + playerScore;
        document.getElementById("computerScore").innerHTML = "Computer Score: " + computerScore;
    }

    else if(playerScore == 5 || computerScore == 5){
        document.getElementById("playButton").onclick = restartGame;
        document.getElementById("playButton").innerText = "Restart Game";
        if (computerScore > playerScore){document.getElementById("result").innerText ="You Lost!"}
            else if(computerScore < playerScore){document.getElementById("result").innerText ="You Won!"}
    }
}

document.getElementById("playButton").addEventListener("click", scoreCheck);
