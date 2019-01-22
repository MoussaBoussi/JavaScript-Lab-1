let playGame = prompt("Do you want to play? (YES or NO)")
let playerName = prompt("What is your name?")

let wins = 0;
let playerHP = 40;
let grantHP = 10;

if (playGame === "yes"){
    while (wins <= 3){
        console.log(`${playerName} has ${playerHP} health left.`) //logs how much health is left
        console.log(`Grant the mighty chicken has ${grantHP} health left.`)
        if (playerHP > 0) { //if player hp is greater than 0 keep playing
            playerHP -= Math.floor(Math.random() * 2) + 1;
            grantHP -= Math.floor(Math.random() * 2) + 1;
            if (grantHP <= 0 && wins === 2) { //IF you defeat grant and already have 2 previous wins
                console.log(`${playerName} has defeated Grant with ${playerHP} health left`)
                wins++;
                break;
            } else if (grantHP <=0) { //If you defeat grant 
                grantHP=10;
                wins++
            }
        } else { //if player hp drops to 0 or below he loses
            console.log(`Grant the mighty chicken has slain you with ${grantHP} health left.`)
        }
    }
} else if (playGame === "no"){
    console.log("OK we'll play some other time.")
}