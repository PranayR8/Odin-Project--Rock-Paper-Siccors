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
    //let userSelection = prompt("Please pick Rock, Paper of Scissor")
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
    /*for (round = 0; round < 5; round++){
        console.log(playRound(playerSelection(), getComputerChoice()))
    }*/
    if (playerScore >= 3){
        console.log("Player wins the game!!!") 
    }
    else{
        console.log("Computer wins the game!!!")
    }
}


















// const rock = document.querySelector("rockUI");
// // var paperUI = document.getElementById("paper");
// // var scissorUI = document.getElementById("scissor");

// rock.addEventListener("click", () => {
//     console.log("rock");
// });


// const rock = document.getElementById("rockUI");
// rock.addEventListener("click", function() {
//     console.log("hi");
//     userSelection = "rock"

// });








// const element = document.getElementsById("rock");

// element.addEventListener("click", myFunction1);
// paper.addEventListener("click", myFunction2);
// scissor.addEventListener("click", myFunction3);

// function myFunction1() {
//   document.getElementById("demo").innerHTML = "rock";
//   console.log("rockk")
// }










//game()