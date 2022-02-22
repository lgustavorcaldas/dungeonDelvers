let turno = true;
let level = 3;
let caracter = 0;
let player;

//Botão de iniciar
$("#gameStartBtn").click(function () {
    $("#firstlyImg").effect("puff");
    $("#gameStartBtn").remove();
    addMusic("startbuttonroar", false);

    setTimeout(() => {
        $(".caracterCreation").fadeIn();
        $(".caracterCreation").css("display", "flex");
        $(".nameScreen").fadeOut();

        addMusic("maintheme", true);
    }, 500)
    // 3500
});

//Seleção de personagem
$(".imgOne").click(function () {
    console.log("One");
    $(".pic").css("background-image", `url(./img/playerGuerreiro.png)`);
    $(".imgOne").css("transform", "scale(110%)");
    $(".imgTwo").css("transform", "scale(100%)");
    $(".imgThree").css("transform", "scale(100%)");
    addMusic("warriorselection", false);
    caracter = "Warrior";
});
$(".imgTwo").click(function () {
    console.log("Two");
    $(".pic").css("background-image", "url(./img/player.png)");
    $(".imgOne").css("transform", "scale(100%)");
    $(".imgTwo").css("transform", "scale(110%)");
    $(".imgThree").css("transform", "scale(100%)");
    addMusic("slayerselection", false);
    caracter = "Slayer";
});
$(".imgThree").click(function () {
    console.log("Three");
    $(".pic").css("background-image", "url(./img/playerMage.png)");
    $(".imgOne").css("transform", "scale(100%)");
    $(".imgTwo").css("transform", "scale(100%)");
    $(".imgThree").css("transform", "scale(110%)");
    addMusic("wizardselection", false);
    caracter = "Mage";
});

//Inicia o jogo após seleção de personagens
function startGame() {
    if( caracter == "Warrior"){
        player = new Players("Chesterfield", 3000, 16, 2, { "name": "lance", "mod": { "toHit": 6, "toDamage": 4 }, "toHit": 20, "damage": [1, 6] });
    } else if( caracter == "Mage"){
        player = new Players("Chesterfield", 22, 12, 3, { "name": "fire", "mod": { "toHit": 8, "toDamage": 6 }, "toHit": 20, "damage": [1, 8] });
    } else{
        player = new Players("Chesterfield", 34, 13, 6, { "name": "sword", "mod": { "toHit": 8, "toDamage": 6 }, "toHit": 20, "damage": [1, 8] });
    } 
    if (document.getElementById("name").value != "") player.name = document.getElementById("name").value;
    
    rollForInitiative();
    $("#monsterName").html(
        arrMonster[level].name);
    $("#playerName").html(
        player.name);
    $(`#logHP`).html(
        player.hitPoints);
    $(`#logAC`).html(
        player.armorClass);
    $(`#logSTG`).html(
        `+${player.attack.mod.toHit}`);

    $("#textScreen").fadeIn();
    $(".musicplayer").remove();
    addMusic("transition", false);

    $("#textScreen").css("display", "flex");
    $(".caracterCreation").fadeOut();
    setTimeout(() => {
        $("#textScreen").fadeOut();
        $(".container").fadeIn();
        $(".container").css("display", "flex");
        if (arrMonster[level] == arrMonster[0]) {
            //  Para apresentar o comportamento dos metodos
            //  bookSFX.book()
            //  floorCollapseSFX.floorCollapse() 
            //  goldSFX.gold() 
            //  HalfPotionHP.potion() 
            //  FullPotionHP.potion()
            //  silverWeapon.weapons() 
            //  enchantedArmor.armor() 
            //  obsidianWeapon.weapons() 
            //  scarletWeapon.weapons() 
            //  enchantedWeapon.weapons() 
            //  ancientArmor.armor() 
            //  divineWeapon.weapons() 
            //  divineArmor.armor() 
            //  divineHeal.potion()
            addMusic("ratbattle", true);
        }
    }, 500);
    // 8000
};

function randomize(min, max) {
    return Math.random() * ((max - min) - 1);
};

//Rola a iniciativa, decidindo a ordem dos turnos
function rollForInitiative() {
    bottomLog.innerHTML = 
        `Rolling initiative...`;

    const playerInitiative = player.speed + Math.floor(Math.random() * 20 + 1);
    const monsterInitiative = arrMonster[level].speed + Math.floor(Math.random() * 20 + 1);

    setTimeout(() => {
        if (playerInitiative > monsterInitiative) {
            turno = true;
            $("#endTurn").css("display", "none");
            $(".buttonsAttk").each(function () {
                this.style.display = "block";
            })
            bottomLog.innerHTML += 
                `</br> ${player.name}'s Turn.`;
        } else if (playerInitiative < monsterInitiative) {
            turno = false;
            $(".buttonsAttk").each(function () {
                this.style.display = "none";
            })
            $("#endTurn").css("display", "block");
            bottomLog.innerHTML += 
                `</br> ${arrMonster[level].name}'s Turn.`;
        } else {
            rollForInitiative();
        }
    }, 1000);
}

//Botão de ataque com progressão, trocando os inimigos e a tela
function typeOfAttack(num) {
    if (turno == false) return notYourTurn("your");
    $("#notYourTurn").html(
        ``);

    turno = false;
    $(".buttonsAttk").each(function () {
        this.style.display = "none";
    })
    $("#endTurn").css("display", "block");

    $("#notYourTurn").html(
        ``);

    if (num == 0) {
        attack(player, arrMonster[level], "fast");
    } else if (num == 1) {
        attack(player, arrMonster[level], "strong");
    } else {
        attack(player, arrMonster[level], "normal");
    }
//Eventos quando um monstro é derrotado, trocando a tela, e trazendo o próximo monstro e as recompensas
    if (arrMonster[level].hitPoints <= 0) {
        return nextEvent()
    } else {
        return setTimeout(() => {
            $(`#monsterLogHP`).html(
                arrMonster[level].hitPoints);
        }, 4000);
    }
};
function nextEvent(){
    $("#endTurn").css("display", "none");
    setTimeout(() => {
        $(".monster").fadeOut();
        addMusic("triumph", false);
    }, 2000);
    setTimeout(() => {
        let randomPhraseTextScreen = Math.floor(Math.random() * 4) + 1;
        if (randomPhraseTextScreen == 1) {
            $("#textScreen").html(
                `<h1>As you delve deeper into the dungeon, lurking monsters keep stalking you...</h1>`);
        } else if (randomPhraseTextScreen == 2) {
            $("#textScreen").html(
                `<h1>Step by step you walk cautiously, your spine chills as you hear a nearby roar...</h1>`);
        } else if (randomPhraseTextScreen == 3) {
            $("#textScreen").html(
                `<h1>You keep pressing your way foward,  senses sharpened by the crawling dangers nearby, as you step into a new room, you perceive that you aren't alone...</h1>`);
        } else {
            $("#textScreen").html(
                `<h1>What began as a quest for glory and treasure, now became a struggle for survival, you hold your breath as you smell a putrid odor nearby...</h1>`);
        };

        $("#textScreen").fadeIn();
        $("#textScreen").css("display", "flex");
        $(".container").fadeOut();
        $(".musicplayer").remove();
        addMusic("transition", true);

        setTimeout(() => {
            $("#textScreen").fadeOut();
            $(".container").fadeIn();
            $(".container").css("display", "flex");
            $(".musicplayer").remove();
            $("#notYourTurn").html(
                "");
            if (arrMonster[level] == arrMonster[1]) {
                //Goblin Rewards//
                let randomizeItem = randomize(1, 11);
                if (randomizeItem <= 2) {
                    //Looting gold effect
                    goldSFX.gold();
                } else if (randomizeItem > 2 && randomizeItem <= 5) {
                    //Floor Collapsing effect
                    floorCollapseSFX.floorCollapse();
                    bottomLog.innerHTML += 
                        `<br/><span>The floor beneath your feet collapsed on itself, you quickly jumped foward to avoid falling into the abyss.</span>`;
                } else if (randomizeItem > 5 && randomizeItem <= 8) {
                    //Lore book effect
                    bookSFX.book();
                    bottomLog.innerHTML += 
                        `<br/><span>As you were searching around, you found an old half-burnt journal. It is from a group of ancient scholars who were trying to study it. They found out that the dungeon is helding an old ziggurat used for dark rituals.</span>`;
                } else {
                    //Half-Potion effect
                    HalfPotionHP.potion();
                    console.log(player.hitPoints);
                }
                //End of Goblin Rewards
                //Goblin Battle Music
                addMusic("goblinbattle", true);
                //End of Goblin Battle Music
            } else if (arrMonster[level] == arrMonster[2]) {
                //Wolf Rewards
                let randomizeItem = randomize(1, 11)
                if (randomizeItem <= 2) {
                    bottomLog.innerHTML += 
                        `<br/><span>You found a bag of gold.</span>`;
                    goldSFX.gold();
                } else if (randomizeItem > 2 && randomizeItem <= 5) {
                    floorCollapseSFX.floorCollapse();
                    bottomLog.innerHTML += 
                        `<br/><span>The floor beneath you reveal a pungee spike trap, you jump foward to avoid it.</span>`;
                } else if (randomizeItem > 5 && randomizeItem <= 8) {
                    bookSFX.book();
                    bottomLog.innerHTML += 
                        `<br/><span>Upon bringing light to a nearby wall with a torch, you've caught eye of inscriptions in the wall. You don't understand the language, but you recognize the drawing of a demon setting a city ablaze.</span>`;
                } else {
                    FullPotionHP.potion();
                    console.log(player.hitPoints);
                }
                //End of Wolf Rewards
                //Wolf Battle Music
                addMusic("wolfbattle", true);
                //End of Wolf Battle Music
            } else if (arrMonster[level] == arrMonster[3]) {
                //Giant Spider Rewards
                HalfPotionHP.potion();
                silverWeapon.weapons();
                //Giant Spider Rewards End
                //Giant Spider Battle Music
                addMusic("spiderbattle", true);
                //End of Giant Spider Battle Music
            } else if (arrMonster[level] == arrMonster[4]) {
                //Piece of Lore
                bottomLog.innerHTML += 
                    `<br/><span>While exploring, you noticed the sparks of remaining dark energy in the atmosphere.</span>`;
                //Owlbear Rewards
                enchantedArmor.armor();
                FullPotionHP.potion();
                //End of Owlbear Rewards
                //Owlbear Battle Music
                addMusic("bearbattle", true);
                //End of Owlbear Battle Music
            } else if (arrMonster[level] == arrMonster[5]) {
                //Piece of Lore
                bottomLog.innerHTML += 
                    `<br/><span>New evidence of the old rituals grabs your attention. You go through more old books, and you read the name "Souleater" througout many of them. It seems like this "Souleater" created a more powerfull version of the enslavement spell.</span>`;
                bookSFX.book();
                //Manticore Rewards
                let randomizeItem = randomize(1, 7);
                if (randomizeItem <= 2) {
                    obsidianWeapon.weapons();
                } else if (randomizeItem > 2 && randomizeItem <= 4) {
                    scarletWeapon.weapons();
                } else {
                    enchantedWeapon.weapons();
                }
                //End of Manticore Rewards
                //Manticore Battle Theme
                addMusic("manticorebattle", true);
                //End of Manticore Battle Theme
            } else if (arrMonster[level] == arrMonster[6]) {
                //Piece of Lore
                bottomLog.innerHTML += 
                    `<br/><span>A chill is sent through your spines as you find the journal of a wizard named "Cainhurst". The said wizard enhanced the enslavement ritual, and used it to absorb the life essence of everything it could reach, and thus became the Souleater. As his corruption spread, the Goddess lost her influence on the region, and famine and desperation arose.</span>`;
                //Behemoth Rewards
                ancientArmor.armor();
                //End of Behemoth Rewards
                addMusic("manticorebattle", true);
            } else if (arrMonster[level] == arrMonster[7]) {
                //Piece of Lore
                bottomLog.innerHTML += 
                    `<br/><span>You found the last remaining Divine Shrine on the region! </span><br/><span>The Godess reaches you:'Cleanse this corrupted place my child, and restore peace in the region.</span>`;
                //Dragon Rewards
                divineWeapon.weapons();
                divineArmor.armor();
                divineHeal.potion();
                //Dragon Rewards
                addMusic("dragonbattle", true);
            } else {
                $(".monster").fadeOut();
                $("#textScreen").css("display", "flex");
                $("#textScreen").html(
                    `<h1>As you deliver the last hit on the Dragon, you cleanse the region of the source of the corruption, villagers around gather to celebrate as the lands continues to grow green. The Godess appoints you as her champion, and your name echoes from generation to generation.</h1>`);
                $(".container").fadeOut();
                $(".musicplayer").remove();
                addMusic("youwin", true);
            }
        }, 5000);
        level++;
        monster();
        $(".monster").fadeIn();
        rollForInitiative();
        $("#monsterName").html(
            arrMonster[level].name);
        $('#nameAttacker').html(
            `<span>New monster incoming...</span></br><span>It's a ${arrMonster[level].name}.</span>`);
    }, 5000);
}
//Termina o turno do jogadora, passando para o ataque do monstro
function endTurn() {
    if (arrMonster[level].hitPoints <= 0) return $("#notYourTurn").html(
        `The Monster is Dead`);
    if (turno == true) return notYourTurn(arrMonster[level].name);
    $("#notYourTurn").html(
        ``);

    attack(arrMonster[level], player, "normal");

    turno = true;
    $(".buttonsAttk").each(function () {
        this.style.display = "block";
    })
    $("#endTurn").css("display", "none");

    return setTimeout(() => {
        $(`#logHP`).html(
            player.hitPoints);
        if (player.hitPoints <= 0) {
            setTimeout(() => {
                $(".container").fadeOut();
                $(".musicplayer").remove();
                $("#deadScreen").fadeIn();
                addMusic("gameover", true);

                $("#deadScreen").css("display", "flex");
                $("#points").html(
                    `You have reached level ${level}`
                    );
            }, 4000);
        }
    }, 3000);
};

function notYourTurn(x) {
    $("#notYourTurn").html(
        `It's not ${x} turn!`);
};
//Função que gera os monstros de forma dinâmica
function monster() {
    $(`#monsterLogHP`).html(
        arrMonster[level].hitPoints);
    $(`#monsterLogAC`).html(
        arrMonster[level].armorClass);
    $(`#monsterLogSTR`).html(
        `+${arrMonster[level].attack.mod.toHit}`);
    $(`.monsterPic`).css("background-image", `url(./img/${arrMonster[level].name}.png)`)
}
monster();