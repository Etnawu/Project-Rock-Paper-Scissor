
function getComputerChoice(){
    let randomNum = Math.floor(Math.random()*3);
        if (randomNum == 0){
            return "Rock"
        }
        else if (randomNum == 1 ){
            return "Paper"
        }
        else if (randomNum == 2){
            return "Scissor"
        }
        else {
            return "Error"
        }
}

playerSelection 