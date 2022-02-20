const serverAddress = "http://localhost:8000"
let npcs;
// //
function getNpcs(){
    fetch(serverAddress)
        .then(response => response.text())
        .then(data => {
            const response = JSON.parse(data)
            npcs = response
        })
        .catch(err => console.log(err));
}
getNpcs();
// // 
const playerHp = document.getElementById("logHP")
const playerAc = document.getElementById("logAC")

const monsterHp = document.getElementById("monsterLogHP")
const monsterAc = document.getElementById("monsterLogAC")

const notYourTurn = document.getElementById("notYourTurn")
let turno = true;
// //
function typeOfAttack(num){
    if(turno == false) return notYourTurn.innerHTML = `It's not your turn!`

    turno = false;

    notYourTurn.innerHTML = ""
    
    if(num == 0){
        attack(npcs.player,npcs.wolf,"fast");
    } else if(num == 1){
        attack(npcs.player,npcs.wolf,"strong");
    } else{
        attack(npcs.player,npcs.wolf,"normal");
    }

    return setTimeout(() => {
        monsterHp.innerHTML = npcs.wolf.hitPoints.current;
        monsterAc.innerHTML = npcs.wolf.armorClass.current;
    }, 4000)
};

function endTurn(){
    if(npcs.wolf.hitPoints.current <= 0) return notYourTurn.innerHTML = `The Npc is Dead`

    if(turno == true) return notYourTurn.innerHTML = `It's not your turn!`

    notYourTurn.innerHTML = ""

    let x = Math.floor((Math.random()*100) + 1)

    if(x <= 50){
        attack(npcs.wolf,npcs.player, "normal");
    } else if(x > 50 && x <= 75){
        attack(npcs.wolf,npcs.player, "fast");
    } else{
        attack(npcs.wolf,npcs.player, "strong");
    }

    turno = true;

    return setTimeout(() => {
        playerHp.innerHTML = npcs.player.hitPoints.current;
        playerAc.innerHTML = npcs.player.armorClass.current;
    }, 4000);
};