let playerScore = 0;
let computerScore = 0;

const choiceButtons = document.querySelectorAll(".choiceButton");
const buttonContainer = document.getElementById("buttonContainer");
const nextButton = document.getElementById("nextButton");
const playButton = document.getElementById("playButton");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");
const resultDisplay = document.getElementById("result");

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissor"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection) {
    if (playerScore >= 5 || computerScore >= 5) return;

    const computerSelection = getComputerChoice();
    let roundResult = "";

    if (playerSelection === computerSelection) {
        roundResult = `Tie! Both picked ${playerSelection}.`;
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissor") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissor" && computerSelection === "Paper")
    ) {
        playerScore++;
        roundResult = `You won this round! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        roundResult = `You lost this round! ${computerSelection} beats ${playerSelection}.`;
    }


    playerScoreDisplay.textContent = "Player Score: " + playerScore;
    computerScoreDisplay.textContent = "Computer Score: " + computerScore;
    resultDisplay.textContent = roundResult;

    buttonContainer.style.display = "none";

    if (playerScore === 5 || computerScore === 5) {
        endGame();
    } else {
        nextButton.style.display = "block";
    }
}

function nextRound() {
    nextButton.style.display = "none";
    buttonContainer.style.display = "flex";
    resultDisplay.textContent = "Make your choice for the next round!";
}

function endGame() {
    nextButton.style.display = "none"; 
    if (playerScore > computerScore) {
        resultDisplay.innerHTML = "<strong>🎉 Congratulations! You won the game! 🎉</strong>";
    } else {
        resultDisplay.innerHTML = "<strong>😢 Game Over! The computer won! 😢</strong>";
    }
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = "Player Score: 0";
    computerScoreDisplay.textContent = "Computer Score: 0";
    resultDisplay.textContent = "First to 5 wins! Choose your weapon!";
    
    // Reset control visibility
    nextButton.style.display = "none";
    buttonContainer.style.display = "flex";
}

choiceButtons.forEach(button => {
    button.addEventListener("click", () => {
        const playerSelection = button.getAttribute("data-choice");
        playRound(playerSelection);
    });
});

nextButton.addEventListener("click", nextRound);
playButton.addEventListener("click", restartGame);