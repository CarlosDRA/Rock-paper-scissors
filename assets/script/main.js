"use strict"

const computerSelection = () => {
    const plays = ["rock", "paper", "scissors"]
    let play = Math.floor(Math.random() * 3)
    return plays[play]
}

const playerSelection = (event) => {
    player = event.target.id;

    if(player === "rock" || player === "paper" || player === "scissors")
    {
        console.log("player: ", player)
        const winner = playRound(computerSelection(), player)
        if(winner === "player"){
            playerCount++
            round ++
            player = ""
        } else if(winner === "computer"){
            computerCount++
            round ++
            player = ""
        } else{
            round ++
            player = ""
        }
        console.log(round, winner, playerCount, computerCount)
        
        if(round === 5){
            if(playerCount > computerCount){
                GameWinner = "Player wins";
            } else if(computerCount > playerCount){
                GameWinner = "Computer wins";
            } else{
                GameWinner = "It's a draw";
            }
            text.innerText = GameWinner;
            roundResults.appendChild(text)
            round = 0;
            computerCount = 0;
            playerCount= 0   
        }
    }
}

function playRound(computer, player){
    let winner = ""
        
    switch(player){
        case "rock":
            (computer === "scissors")? winner = "player": 
            (computer === "paper")? winner = "computer": winner = "draw";
            return winner;
        case "paper":
            (computer === "rock")? winner = "player": 
            (computer === "scissors")? winner = "computer": winner = "draw";
            return winner;
        case "scissors":
            (computer === "paper")? winner = "player": 
            (computer === "rock")? winner = "computer": winner = "draw";
            return winner;
    }
}

const paper = document.querySelector("#paper")
const rock = document.querySelector("#rock")
const scissors = document.querySelector("#scissors")
const roundResults = document.querySelector(".winner")

paper.addEventListener("click", playerSelection)
rock.addEventListener("click", playerSelection)
scissors.addEventListener("click", playerSelection)

let playerCount = 0
let computerCount = 0
let round = 0
let GameWinner = ""    
let text = document.createElement("h2")

let player = ""