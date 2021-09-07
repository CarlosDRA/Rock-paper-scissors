"use strict"

function computerPlay(){
    const plays = ["rock", "paper", "scissors"]
    let play = Math.floor(Math.random() * 3)
    return plays[play]
}

function playerPlay(){
    let play =  prompt("Insert your play").toLowerCase()
    return play
}

function playRound(computer, player){
    console.log(`computer: ${computer} --- player: ${player}`)
    if(computer === "rock"){
        if(player === "rock"){
            console.log("draw")
        } else if(player === "paper"){
            console.log("player wins")
        } else if(player === "scissors"){
            console.log("computer wins")
        } else{
            console.log("Oops, you entered the wrong selection")
        }
    } else if(computer === "paper"){
        if(player === "rock"){
            console.log("computer wins")
        } else if(player === "paper"){
            console.log("draw")
        } else if(player === "scissors"){
            console.log(" player wins")
        } else{
            console.log("Oops, you entered the wrong selection")
        }
    } else if(computer === "scissors"){
        if(player === "rock"){
            console.log("player wins")
        } else if(player === "paper"){
            console.log("computer wins")
        } else if(player === "scissors"){
            console.log("draw")
        } else{
            console.log("Oops, you entered the wrong selection")
        }
    }
}

function game(){
    for(let i = 0; i<5; i++){
        const computerSelection = computerPlay()
        const playerSelection = playerPlay()
        playRound(computerSelection, playerSelection)
    }
}

game()

