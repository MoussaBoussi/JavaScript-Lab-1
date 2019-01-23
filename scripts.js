let wins = 0;
let playerHP = 40;
let grantHP = 10;

function startGame() {
    let playGame = prompt("Do you want to play? (YES or NO)")
    if (playGame === "yes") {
        let playerName = prompt("What is your name?")
        function startCombat() {
            while (wins <= 3) {
                let continueCombat = prompt(`${playerName}, Would you like to continue?`)
                if (continueCombat === "yes") {
                    if (playerHP > 0) { //if player hp is greater than 0 keep playing
                        const getDamage = function (damage) {
                            return Math.floor(Math.random() * 5) + 1;
                        }
                        playerHP -= getDamage();
                        grantHP -= getDamage();
                        console.log(`${playerName} has ${playerHP} health left.`); //logs how much health is left
                        console.log(`Grant the mighty chicken has ${grantHP} health left.`);
                        if (grantHP <= 0 && wins === 2) { //IF you defeat grant and already have 2 previous wins
                            console.log(`${playerName} has defeated Grant the mighty chicken 3 times with ${playerHP} health left`)
                            wins++;
                            break;
                        } else if (grantHP <= 0) { //If you defeat grant 
                            grantHP = 10;
                            wins++
                            console.log(`You have defeated the mighty Grant ${wins} times.`)
                        } 
                    } else { //if player hp drops to 0 or below he loses
                        console.log(`Grant the mighty chicken has slain you with ${grantHP} health left.`);
                    }
                } else if (continueCombat === "no") {
                    alert ("quitter.");
                    break;
                }
            }
        }
        startCombat();
    } else if (playGame === "no") {
        alert("OK we'll play some other time.");
        console.log("OK we'll play some other time.");
    } else { //if there's another input besides YES OR NO
        alert("Please type yes or no");
        game(); //restart function
    }
}
startGame();