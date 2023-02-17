console.log("Hello World")

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

function playerSelection(){
    let userSelection = prompt("Please pick Rock, Paper of Scissor")
    userSelection = userSelection.toLowerCase();
    if(userSelection != "rock" && userSelection != "paper" && userSelection != "scissor"){
        console.log("Incorret input. Please try again")
        playerSelection()
    }
    return userSelection
}


let playerScore = 0

function playRound(player, computer){
    if(player == computer){
        return "It's a tie"
    }
    else if(player == "rock" && computer == "scissor"){
        playerScore += 1
        return "Player wins"
    }
    else if(player == "paper" && computer == "rock"){
        playerScore += 1
        return "Player wins"
    }
    else if(player == "scissor" && computer == "paper"){
        playerScore += 1
        return "Player wins"
    }
    else{
        return "Computer wins"
    }

}

function game(){
    for (round = 0; round < 5; round++){
        console.log(playRound(playerSelection(), getComputerChoice()))
    }
    if (playerScore >= 3){
        console.log("Player wins the game!!!") 
    }
    else{
        console.log("Computer wins the game!!!")
    }
}



game()