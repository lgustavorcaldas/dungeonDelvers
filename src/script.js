let turno = true;
let level = 0;
// //

$("#gameStartBtn").click(function () {
    $("#firstlyImg").effect("puff")
    $("#gameStartBtn").remove()
    $("<audio></audio>").attr({
        'class': 'musicplayer',
        'src': './aud/startbuttonroar.wav',
        'volume': 0.1,
        'autoplay': 'autoplay',
    }).appendTo("body");

    setTimeout(() => {
        $(".caracterCreation").fadeIn();
        $(".caracterCreation").css("display", "flex");
        $(".nameScreen").fadeOut();
        $("<audio></audio>").attr({
            'class': 'musicplayer',
            'src': './aud/maintheme.mp3',
            'volume': 0.1,
            'autoplay': 'autoplay',
            'loop': 'true',
        }).appendTo("body");
    }, 3500)

})


$(".imgOne").click(function () {
    console.log("One");
    $(".pic").css("background-image", `url(./img/playerGuerreiro.png)`)
    $(".imgOne").css("transform", "scale(110%)")
    $(".imgTwo").css("transform", "scale(100%)")
    $(".imgThree").css("transform", "scale(100%)")
    $("<audio></audio>").attr({
        'class': 'musicplayer',
        'src': './aud/warriorselection.mp3',
        'volume': 0.1,
        'autoplay': 'autoplay',
    }).appendTo("body");
    player.hitPoints = 28;
    player.armorClass = 15;
    player.speed = 2;
    player.attack.damage = [1, 6]
    player.attack.mod.toHit = 6
    player.attack.mod.toDamage = 4
})
$(".imgTwo").click(function () {
    console.log("Two");
    $(".pic").css("background-image", "url(./img/player.png)")
    $(".imgTwo").css("transform", "scale(110%)")
    $(".imgThree").css("transform", "scale(100%)")
    $(".imgOne").css("transform", "scale(100%)")
    $("<audio></audio>").attr({
        'class': 'musicplayer',
        'src': './aud/slayerselection.mp3',
        'volume': 0.1,
        'autoplay': 'autoplay',
    }).appendTo("body");
})
$(".imgThree").click(function () {
    console.log("Three");
    $(".pic").css("background-image", "url(./img/playerMage.png)")
    $(".imgThree").css("transform", "scale(110%)")
    $(".imgTwo").css("transform", "scale(100%)")
    $(".imgOne").css("transform", "scale(100%)")
    $("<audio></audio>").attr({
        'class': 'musicplayer',
        'src': './aud/wizardselection.mp3',
        'volume': 0.1,
        'autoplay': 'autoplay',
    }).appendTo("body");
    player.hitPoints = 30;
    player.armorClass = 12;
    player.speed = 5;
    player.attack.damage = [1, 10]
    player.attack.mod.toHit = 8
    player.attack.mod.toDamage = 7
})

function startGame() {
    if (document.getElementById("name").value != "") player.name = document.getElementById("name").value
    rollForInitiative();
    $("#monsterName").html(arrMonster[level].name);
    $("#playerName").html(player.name);
    $(`#logHP`).html(player.hitPoints);
    $(`#logAC`).html(player.armorClass);
    $(`#logSTG`).html(`+${player.attack.mod.toHit}`);
    $("#textScreen").fadeIn();
    $(".musicplayer").remove()
    $("<audio></audio>").attr({
        'class': 'musicplayer',
        'src': './aud/transition.mp3',
        'volume': 0.1,
        'autoplay': 'autoplay'
    }).appendTo("body");
    $("#textScreen").css("display", "flex");
    $(".caracterCreation").fadeOut();
    setTimeout(() => {
        $("#textScreen").fadeOut();
        $(".container").fadeIn();
        $(".container").css("display", "flex");
        if (arrMonster[level] == arrMonster[0]) {
            $("<audio></audio>").attr({
                'class': 'musicplayer',
                'src': './aud/ratbattle.mp3',
                'volume': 0.1,
                'autoplay': 'autoplay'
            }).appendTo("body");
        }
    }, 8000);
}

function rollForInitiative() {
    bottomLog.innerHTML = `Rolling initiative...`;

    const playerInitiative = player.speed + Math.floor(Math.random() * 20 + 1);
    const monsterInitiative = arrMonster[level].speed + Math.floor(Math.random() * 20 + 1);

    setTimeout(() => {
        if (playerInitiative > monsterInitiative) {
            turno = true;
            $("#endTurn").css("display", "none");
            $(".buttonsAttk").each(function () {
                this.style.display = "block";
            })
            bottomLog.innerHTML += `</br> ${player.name}'s Turn`;
        } else if (playerInitiative < monsterInitiative) {
            turno = false;
            $(".buttonsAttk").each(function () {
                this.style.display = "none";
            })
            $("#endTurn").css("display", "block");
            bottomLog.innerHTML += `</br> ${arrMonster[level].name}'s  Turn`;
        } else {
            rollForInitiative();
        }
    }, 1000);
}

function typeOfAttack(num) {
    if (turno == false) return notYourTurn("your")
    $("#notYourTurn").html(``);

    turno = false;
    $(".buttonsAttk").each(function () {
        this.style.display = "none";
    })
    $("#endTurn").css("display", "block");

    $("#notYourTurn").html(``);

    if (num == 0) {
        attack(player, arrMonster[level], "fast");
    } else if (num == 1) {
        attack(player, arrMonster[level], "strong");
    } else {
        attack(player, arrMonster[level], "normal");
    }

    if (arrMonster[level].hitPoints <= 0) {
        setTimeout(() => {
            $(".monster").fadeOut();
            $("<audio></audio>").attr({
                'class': 'musicplayer',
                'src': './aud/triumph.mp3',
                'volume': 0.1,
                'autoplay': 'autoplay',
                'loop': 'true',
            }).appendTo("body");
        }, 2000);
        setTimeout(() => {
            let randomPhraseTextScreen = Math.floor(Math.random() * 4)+1;
            if(randomPhraseTextScreen == 1){
                document.getElementById("textScreen").innerHTML = "<h1>As you delve deeper into the dungeon, lurking monsters keep stalking you...</h1>";
            } else if( randomPhraseTextScreen == 2){
                document.getElementById("textScreen").innerHTML = "<h1>Step by step you walk cautiously, your spine chills as you hear a nearby roar...</h1>";
            } else if( randomPhraseTextScreen == 3){
                document.getElementById("textScreen").innerHTML = "<h1>You keep pressing your way foward, your senses sharpened by the dangers nearby, as you step into a new room, you perceive that you aren't alone...</h1>";
            } else{
                document.getElementById("textScreen").innerHTML = "<h1>What began as a quest for glory and treasure, now became a struggle for survive, you hold your breath as you smell a putrid odor nearby...</h1>";
            }

            $("#textScreen").fadeIn();
            $("#textScreen").css("display", "flex");
            $(".container").fadeOut();
            $(".musicplayer").remove()
            $("<audio></audio>").attr({
                'class': 'musicplayer',
                'src': './aud/transition.mp3',
                'volume': 0.1,
                'autoplay': 'autoplay',
                'loop': 'true',
            }).appendTo("body");

            setTimeout(() => {
                $("#textScreen").fadeOut();
                $(".container").fadeIn();
                $(".container").css("display", "flex");
                $(".musicplayer").remove()
                if (arrMonster[level] == arrMonster[1]) {  
                    $("<audio></audio>").attr({
                        'class': 'musicplayer',
                        'src': './aud/goblinbattle.mp3',
                        'volume': 0.1,
                        'autoplay': 'autoplay',
                        'loop': 'true',
                    }).appendTo("body");
                } else if (arrMonster[level] == arrMonster[2]) {
                    $("<audio></audio>").attr({
                        'class': 'musicplayer',
                        'src': './aud/wolfbattle.mp3',
                        'volume': 0.1,
                        'autoplay': 'autoplay',
                        'loop': 'true',
                    }).appendTo("body");
                } else if (arrMonster[level] == arrMonster[3]) {
                    bottomLog.innerHTML += `<br/><span>You found a Silver Weapon!</span>`
                    player.attack.mod.toHit += 6
                    player.attack.damage = [2, 10]
                    player.attack.mod.toDamage += 2
                    logSTG.innerHTML = "+" + player.attack.mod.toHit
                    $("<audio></audio>").attr({
                        'class': 'musicplayer',
                        'src': './aud/spiderbattle.mp3',
                        'volume': 0.1,
                        'autoplay': 'autoplay',
                        'loop': 'true',
                    }).appendTo("body");
                } else if (arrMonster[level] == arrMonster[4]) {
                    bottomLog.innerHTML += `<br/><span>You found a set of Enchanted Armor! AC Increased by 3!</span>`
                    player.armorClass += 3
                    logAC.innerHTML = "+" + player.armorClass
                    $("<audio></audio>").attr({
                        'class': 'musicplayer',
                        'src': './aud/bearbattle.mp3',
                        'volume': 0.1,
                        'autoplay': 'autoplay',
                        'loop': 'true',
                    }).appendTo("body");
                } else if (arrMonster[level] == arrMonster[5]) {
                    bottomLog.innerHTML += `<br/><span>You found a miraculous Health Potion! Hit Points Restored! Max Hit Points Increased!</span>`
                    player.hitPoints = 45
                    logHP.innerHTML = player.hitPoints
                    $("<audio></audio>").attr({
                        'class': 'musicplayer',
                        'src': './aud/manticorebattle.mp3',
                        'volume': 0.1,
                        'autoplay': 'autoplay',
                        'loop': 'true',
                    }).appendTo("body");
                } else if (arrMonster[level] == arrMonster[6]) {
                    bottomLog.innerHTML += `<br/><span>You found an Enchanted Weapon!</span>`
                    player.attack.mod.toHit += 4
                    player.attack.damage = [4, 12]
                    logSTG.innerHTML = "+" + player.attack.mod.toHit
                    $("<audio></audio>").attr({
                        'class': 'musicplayer',
                        'src': './aud/manticorebattle.mp3',
                        'volume': 0.1,
                        'autoplay': 'autoplay',
                        'loop': 'true',
                    }).appendTo("body");
                } else if (arrMonster[level] == arrMonster[7]){
                    bottomLog.innerHTML += `<br/><span>You found a Divine Shrine! Hit Points max increased! Health Restored! Armor Class Increased by 5! </span><br/><span>The Godess reaches you:'Cleanse this corrupted place my child, and restore peace in the region!'</span>`
                    player.armorClass += 5
                    logAC.innerHTML = "+" + player.armorClass
                    player.hitPoints = 70
                    logHP.innerHTML = player.hitPoints
                    $("<audio></audio>").attr({
                        'class': 'musicplayer',
                        'src': './aud/dragonbattle.mp3',
                        'volume': 0.1,
                        'autoplay': 'autoplay',
                        'loop': 'true',
                    }).appendTo("body");
                } else {
                    $(".monster").fadeOut();
                    $("#textScreen").css("display", "flex");
                    $("#textScreen").html("<h1>As you deliver the last hit on the Dragon, you cleanse the region of the source of the corruption, villagers around gather to celebrate as the lands continues to grow green. The Godess appoints you as her champion, and your name echoes from generation to generation!</h1>")
                    $(".container").fadeOut();
                    $(".musicplayer").remove();
                    $("<audio></audio>").attr({
                        'class': 'musicplayer',
                        'src': './aud/youwin.mp3',
                        'volume': 0.1,
                        'autoplay': 'autoplay',
                        'loop': 'true',
                    }).appendTo("body");
                }

            }, 5000);

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

function endTurn() {
    if (arrMonster[level].hitPoints <= 0) return $("#notYourTurn").html(`The Monster is Dead`);

    if (turno == true) return notYourTurn(arrMonster[level].name);
    $("#notYourTurn").html(``);

    attack(arrMonster[level], player, "normal");

    turno = true;
    $(".buttonsAttk").each(function () {
        this.style.display = "block";
    })

    $("#endTurn").css("display", "none");
    return setTimeout(() => {
        $(`#logHP`).html(player.hitPoints);
        if (player.hitPoints <= 0) {
            setTimeout(() => {
                $(".container").fadeOut();
                $(".musicplayer").remove()
                $("#deadScreen").fadeIn();
                $("<audio></audio>").attr({
                    'class': 'musicplayer',
                    'src': './aud/gameover.mp3',
                    'volume': 0.1,
                    'autoplay': 'autoplay',
                    'loop': 'true',
                }).appendTo("body");
                $("#deadScreen").css("display", "flex");
                $("#points").html(`You have reached level ${level}`);
            }, 4000);
        }
    }, 3000);
};

function notYourTurn(x) {
    $("#notYourTurn").html(`It's not ${x} turn!`);
};

function monster() {
    $(`#monsterLogHP`).html(arrMonster[level].hitPoints);
    $(`#monsterLogAC`).html(arrMonster[level].armorClass);
    $(`#monsterLogSTR`).html(`+${arrMonster[level].attack.mod.toHit}`);
    $(`.monsterPic`).css("background-image", `url(./img/${arrMonster[level].name}.png)`)
}
monster();