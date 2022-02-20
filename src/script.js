let turno = true;
let level = 0;
// //
setTimeout(() => {
    $(".caracterCreation").fadeIn();
    $(".caracterCreation").css("display","flex");
    $(".nameScreen").fadeOut();
}, 1500);

$(".imgOne").click(function(){
    console.log("One");
    $(".pic").css("background-image",`url(./img/playerGuerreiro.png)`)
    $(".imgOne").css("transform", "scale(110%)")
    $(".imgTwo").css("transform", "scale(100%)")
    $(".imgThree").css("transform", "scale(100%)")
    player.hitPoints = 28;
    player.armorClass = 15;
    player.speed = 2;
    player.attack.damage = [1,6]
    player.attack.mod.toHit = 6
    player.attack.mod.toDamage = 4
})
$(".imgTwo").click(function(){
    console.log("Two");
    $(".pic").css("background-image","url(./img/player.png)")
    $(".imgTwo").css("transform", "scale(110%)")
    $(".imgThree").css("transform", "scale(100%)")
    $(".imgOne").css("transform", "scale(100%)")
})
$(".imgThree").click(function(){
    console.log("Three");
    $(".pic").css("background-image","url(./img/playerMage.png)")
    $(".imgThree").css("transform", "scale(110%)")
    $(".imgTwo").css("transform", "scale(100%)")
    $(".imgOne").css("transform", "scale(100%)")
    player.hitPoints = 20;
    player.armorClass = 12;
    player.speed = 5;
    player.attack.damage = [1,10]
    player.attack.mod.toHit = 8
    player.attack.mod.toDamage = 5
})

function startGame(){
    if(document.getElementById("name").value !=  "") player.name = document.getElementById("name").value
    rollForInitiative();
    $("#monsterName").html(arrMonster[level].name);
    $("#playerName").html(player.name);
    $(`#logHP`).html(player.hitPoints);
    $(`#logAC`).html(player.armorClass);
    $(`#logSTG`).html(`+${player.attack.mod.toHit}`);
    $(".textScreen").fadeIn();
    $(".textScreen").css("display","flex");
    $(".caracterCreation").fadeOut();
    setTimeout(() => {
        $(".textScreen").fadeOut();
        $(".container").fadeIn();
        $(".container").css("display","flex");
    }, 1000);
}

function rollForInitiative(){
    bottomLog.innerHTML = `Rolling initiative...`;

    const playerInitiative = player.speed + Math.floor(Math.random()*20 + 1);
    const monsterInitiative = arrMonster[level].speed + Math.floor(Math.random()*20 + 1);

    setTimeout(() => {
        if(playerInitiative > monsterInitiative){
            turno = true;
            $("#endTurn").css("display", "none");
            $(".buttonsAttk").each(function(){
                this.style.display = "block";
            })
            bottomLog.innerHTML += `</br> ${player.name}'s Turn`;
        } else if (playerInitiative < monsterInitiative){
            turno = false;
            $(".buttonsAttk").each(function(){
                this.style.display = "none";
            })
            $("#endTurn").css("display", "block");
            bottomLog.innerHTML += `</br> ${arrMonster[level].name}'s  Turn`;
        } else{
            rollForInitiative();
        }
    }, 1000);
}

function typeOfAttack(num){
    if(turno == false) return notYourTurn("your")
    $("#notYourTurn").html(``);

    turno = false;
    $(".buttonsAttk").each(function(){
        this.style.display = "none";
    })
    $("#endTurn").css("display", "block");

    $("#notYourTurn").html(``);

    if(num == 0){
        attack(player,arrMonster[level],"fast");
    } else if(num == 1){
        attack(player,arrMonster[level],"strong");
    } else{
        attack(player,arrMonster[level],"normal");
    }

    if(arrMonster[level].hitPoints <= 0){
        setTimeout(() => {
            $(".monster").fadeOut();
        }, 4000);
        setTimeout(() => {
            
            $(".textScreen").fadeIn();
            $(".textScreen").css("display","flex");
            $(".container").fadeOut();
            setTimeout(() => {
                $(".textScreen").fadeOut();
                $(".container").fadeIn();
                $(".container").css("display","flex");
            }, 1000);

            level++;
            monster();
            $(".monster").fadeIn();
            rollForInitiative();
            $("#monsterName").html(arrMonster[level].name);
            $('#nameAttacker').html(`<span>New monster incoming...</span></br><span>It's a ${arrMonster[level].name}!!!</span>`);
        }, 5000);
    } else {
        return setTimeout(() => {
            $(`#monsterLogHP`).html(arrMonster[level].hitPoints);
        }, 4000);
    }
};

function endTurn(){
    if(arrMonster[level].hitPoints <= 0) return $("#notYourTurn").html(`The Npc is Dead`);

    if(turno == true) return notYourTurn(arrMonster[level].name);
    $("#notYourTurn").html(``);

    attack(arrMonster[level],player, "normal");

    turno = true;
    $(".buttonsAttk").each(function(){
        this.style.display = "block";
    })
    $("#endTurn").css("display", "none");

    return setTimeout(() => {
        $(`#logHP`).html(player.hitPoints);
        if(player.hitPoints <= 0){
            setTimeout(() => {
                $(".container").fadeOut();
                $("#deadScreen").fadeIn();
                $("#deadScreen").css("display","flex");
                $("#points").html(`You have reached level ${level}`);
            }, 3000);
        }
    }, 4000);
};

function notYourTurn(x){
    $("#notYourTurn").html(`It's not ${x} turn!`);
};

function monster(){
    $(`#monsterLogHP`).html(arrMonster[level].hitPoints);
    $(`#monsterLogAC`).html(arrMonster[level].armorClass);
    $(`#monsterLogSTR`).html(`+${arrMonster[level].attack.mod.toHit}`);
    $(`.monsterPic`).css("background-image", `url(./img/${arrMonster[level].name}.png)`)
}
monster();