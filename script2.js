
var playerScore = 0
var computerScore = 0

const body = document.body

const runningScore = document.createElement('div')
runningScore.innerText = `player Score: ${playerScore} Computer Score: ${computerScore}`
    
body.append(runningScore)

function updateRunningScore() {
    runningScore.innerText = `player Score: ${playerScore} Computer Score: ${computerScore}`;
}

function playerWins(){
    const playerWin = document.createElement('div')
    playerWin.innerText = "The player has won the game!"

    body.append(playerWin)
}

function computerWins(){
    const computerWin = document.createElement('div')
    computerWin.innerText = "The computer has won the game!"
    
    body.append(computerWin)
}

function checkWins(){
    if(playerScore >= 5){
        playerWins()
        playerScore = 0
        computerScore = 0
    }
    else if (computerScore >= 5){
        computerWins()
        playerScore = 0
        computerScore = 0
    }
}



function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice == 0){
        computerChoice = "rock"
    }
    else if (computerChoice == 1){
        computerChoice = "paper"
    }
    else if (computerChoice == 2){
        computerChoice = "scissor"
    }
    return computerChoice
    
}

function playRound(player){
    computer = getComputerChoice()
    console.log(player)
    console.log(computer)
    if(player == computer){
        console.log(playerScore)
        updateRunningScore()
        checkWins()
    }
    else if(player == "rock" && computer == "scissor"){
        playerScore += 1
        console.log(playerScore)
        updateRunningScore()
        checkWins()
    }
    else if(player == "paper" && computer == "rock"){
        playerScore += 1
        console.log(playerScore)
        updateRunningScore()
        checkWins()
    }
    else if(player == "scissor" && computer == "paper"){
        playerScore += 1
        console.log(playerScore)
        updateRunningScore()
        checkWins()
    }
    else{
        computerScore++
        console.log(playerScore)
        updateRunningScore()
        checkWins()
    }

}




const rockButton = document.getElementById("rock")
const paperButton = document.getElementById("paper")
const scissorButton = document.getElementById("scissor")

rockButton.addEventListener("click", function(){
    playRound("rock")
})
paperButton.addEventListener("click", function(){
    playRound("paper")
})
scissorButton.addEventListener("click", function(){
    playRound("scissor")
})