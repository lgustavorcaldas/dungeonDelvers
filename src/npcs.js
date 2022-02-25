const arrMonster = [];
let abilityTurnCounter = 0
let spellUsed = 0
let stealUsed = 0
let rageUsed = 0
// Music
function addMusic(name, loop) {
    $("<audio></audio>").attr({
        'class': 'musicplayer',
        'src': `./aud/${name}.mp3`,
        'volume': 0.1,
        'autoplay': 'autoplay',
        'loop': loop,
    }).appendTo("body");
};
function floatingText(damage, id, color) {
    $(`<h2 id="blabla">${damage}</h2>`).css({
        "display": "none",
        "position": "absolute",
        "margin-top": "0px",
        "margin-right": "75px",
        "color": color,
        "text-shadow": "-2px 2px 0px black",
        "font-size": "50px"
    }).appendTo(`#${id}`);
    $("#blabla").css("display", "block")
    $("#blabla").animate({
        "left": "-55px",
        "top": "-75px",
    }, 2000);
    setTimeout(() => {
        $("#blabla").remove()
    }, 2000);
};

function useFirstAbility() {
    player.firstAbility()
}

function rogueStealReset() {
    return stealUsed = 0
}

function randomizeRogueSteal(level) {
    switch (level) {
        case 0:
            randomizeItem = randomize(1, 11);
            if (randomizeItem <= 2) {
                //Looting gold effect
                goldSFX.gold();
            } else if (randomizeItem > 2) {
                //Half-Potion effect
                bagHalfPotion.bag();
                console.log(player.hitPoints);
            }
            break;
        case 1:
            randomizeItem = randomize(1, 11);
            if (randomizeItem <= 2) {
                //Looting gold effect
                goldSFX.gold();
            } else if (randomizeItem > 2) {
                //Half-Potion effect
                bagFullPotion.bag();
                console.log(player.hitPoints);
            }
            break;
        case 2:
            randomizeItem = randomize(1, 11);
            if (randomizeItem <= 2) {
                //Looting gold effect
                goldSFX.gold();
            } else if (randomizeItem > 2) {
                //Half-Potion effect
                bagHalfPotion.bag();
                console.log(player.hitPoints);
            }
            break;
        case 3:
            randomizeItem = randomize(1, 11);
            if (randomizeItem <= 2) {
                //Looting gold effect
                goldSFX.gold();
            } else if (randomizeItem > 2) {
                //Half-Potion effect
                bagHalfPotion.bag();
                console.log(player.hitPoints);
            }
            break;
        case 4:
            randomizeItem = randomize(1, 11);
            if (randomizeItem <= 2) {
                //Looting gold effect
                goldSFX.gold();
            } else if (randomizeItem > 2) {
                //Half-Potion effect
                bagHalfPotion.bag();
                console.log(player.hitPoints);
            }
            break;
        case 5:
            randomizeItem = randomize(1, 11);
            if (randomizeItem <= 2) {
                //Looting gold effect
                goldSFX.gold();
            } else if (randomizeItem > 2) {
                //Half-Potion effect
                bagHalfPotion.bag();
                console.log(player.hitPoints);
            }
            break;
        case 6:
            randomizeItem = randomize(1, 11);
            if (randomizeItem <= 2) {
                //Looting gold effect
                goldSFX.gold();
            } else if (randomizeItem > 2) {
                //Half-Potion effect
                HalfPotionHP.potion();
                console.log(player.hitPoints);
            }
            break;
        case 7:
            randomizeItem = randomize(1, 11);
            if (randomizeItem <= 2) {
                //Looting gold effect
                goldSFX.gold();
            } else if (randomizeItem > 2) {
                //Half-Potion effect
                bagHalfPotion.bag();
                console.log(player.hitPoints);
            }
            break;
        case 8:
            randomizeItem = randomize(1, 11);
            if (randomizeItem <= 2) {
                //Looting gold effect
                goldSFX.gold();
            } else if (randomizeItem > 2) {
                //Half-Potion effect
                bagHalfPotion.bag();
                console.log(player.hitPoints);
            }
            break;

    }
}

// Class
class Enemies {
    constructor(_nome, _hitPoints, _armorClass, _speed, _attack) {
        this.name = _nome;
        this.hitPoints = _hitPoints;
        this.armorClass = _armorClass;
        this.speed = _speed;
        this.attack = _attack;
    };
};
class Players {
    constructor(_nome, _hitPoints, _armorClass, _speed, _attack, _type, _classResource) {
        this.name = _nome;
        this.hitPoints = _hitPoints;
        this.armorClass = _armorClass;
        this.speed = _speed;
        this.attack = _attack;
        this.type = _type
        this.classResource = _classResource
    };

    firstAbility() {
        switch (this.type) {
            case "Warrior":
                if (player.classResource >= 3 && rageUsed == 0){
                    bottomLog.innerHTML =
                        `<br/><h3 id="abilityUse">You used Aimed Strike! +4 chance to hit!</h3>`;
                    $("#abilityUse").css("color", "red")
                    player.attack.mod.toHit += 4
                    logSTG.innerHTML = "+" + player.attack.mod.toHit
                    rageUsed = 1
                    setTimeout(() => {
                        $("#logClassRes").html(
                            player.classResource);
                    }, 1500);
                    player.classResource -= 3
                    if (player.classResource < 0){
                        player.classResource = 0
                    }
                    floatingText("-3","floatingTextClassResPlayer","cyan")
                    $(`.classRes`).effect("pulsate")
                    addMusic("warriorabilityone", false)
                        $("#logSTG").animate({
                            color: "red",
                        }, 10)
                        $(".sword").effect("bounce")
                } else if (rageUsed == 1){
                    bottomLog.innerHTML =
                    `<br/><h3 id="abilityUse">Your eyes are sharpened already.</h3>`;
                    $("#abilityUse").css("color", "red")
                    addMusic("abilityunavailable", false)
                } else if (player.classResource <= 2){
                    bottomLog.innerHTML =
                    `<br/><h3 id="abilityUse">Out of mana.</h3>`;
                    $("#abilityUse").css("color", "red")
                    addMusic("abilityunavailable", false)
                }
                break;

            case "Rogue":
                if (stealUsed == 0 && player.classResource >= 3) {
                    bottomLog.innerHTML =
                        `<br/><h3 id="abilityUse">While your target was distracted, you stoled from it.</h3>`;
                    $(".card").effect("slide")
                    $("#abilityUse").css("color", "brown")
                    addMusic("rogueabilityone", false)
                    setTimeout(() => {
                        randomizeRogueSteal(level)
                    }, 2200)
                    setTimeout(() => {
                        $("#logClassRes").html(
                            player.classResource);
                    }, 1500);
                    floatingText("-3","floatingTextClassResPlayer","cyan")
                    $(`.classRes`).effect("pulsate")
                    stealUsed = 1
                    player.classResource -= 3
                    if(player.classResource < 0){
                        player.classResource = 0
                    }
                } else if (stealUsed == 1) {
                    bottomLog.innerHTML =
                        `<br/><h3 id="abilityUse">There's nothing to steal!</h3>`;
                    $("#abilityUse").css("color", "brown")    
                    addMusic("abilityunavailable", false)
                } else if (player.classResource <= 2) {
                    bottomLog.innerHTML =
                        `<br/><h3 id="abilityUse">Out of mana.</h3>`;
                        $("#abilityUse").css("color", "brown")
                        addMusic("abilityunavailable", false)
                }
                break;

            case "Wizard":
                if (player.classResource >= 3 && spellUsed == 0) {
                    spellUsed = 1
                    player.classResource -= 4
                    if (player.classResource < 0){
                        player.classResource = 0
                    }
                    player.armorClass += 2
                    abilityTurnCounter += 1
                    setTimeout(() => {
                        $("#logClassRes").html(
                            player.classResource);
                    }, 1500);
                    floatingText("-4","floatingTextClassResPlayer","cyan")
                    $(`.classRes`).effect("pulsate")
                    addMusic("wizardabilityone", false)
                        turno = false
                        $(".buttons").css("display", "none");
                        $("#endTurn").css("display", "flex");
                    bottomLog.innerHTML =
                        `<br/><h2 id="abilityUse">You used Arcane Shield, AC incresed by +2 for 10 turns!</h2>`;
                    $("#firstSkill").prop("disabled", true)    
                    setTimeout(() => {
                        $("#logAC").css("color", "purple",)
                        $(".shield").effect("pulsate")
                        logAC.innerHTML = "+" + player.armorClass
                    }, 5)
                } else if (spellUsed == 1) {
                    bottomLog.innerHTML =
                        `<br/><h3 id="abilityUse">You can't reuse Arcane Shield until it dissipates!</h3>`;
                        $("#abilityUse").css("color", "purple",)
                        addMusic("abilityunavailable", false)
                } else if (player.classResource <= 3) {
                    $("#abilityUse").css("color", "purple",)
                    bottomLog.innerHTML = `<br/><h3 id="abilityUse">Out of Mana</h3>`;
                    addMusic("abilityunavailable", false)
                }
                break;

        }
    }

    endFirstAbility() {
        switch (this.type) {
            case "Warrior":
                abilityTurnCounter = 1
                if (rageUsed == 1 && abilityTurnCounter == 1) {
                    setTimeout(() => {
                        player.attack.mod.toHit -= 4
                        logSTG.innerHTML = "+" + player.attack.mod.toHit
                        rageUsed = 0
                        abilityTurnCounter = 0
                        $("#logSTG").css("color", "black")
                        $(".sword").effect("pulsate")
                    }, 2500)
                }
                break;
            case "Wizard":
                if (spellUsed == 1) {
                    abilityTurnCounter ++
                }
                if (abilityTurnCounter > 10) {
                    player.armorClass -= 2
                    setTimeout(() => {
                        bottomLog.innerHTML +=
                            `<br/><h3 id="abilityUse">Arcane Shield Dissipated!</h3>`;
                            $("#abilityUse").css("color", "purple")
                        $("#logAC").animate({
                            color: "black",
                        }, 10)
                        $(".shield").effect("pulsate")
                        logAC.innerHTML = "+" + player.armorClass
                        addMusic("dispelmagic", false)
                    }, 3100)
                    spellUsed = 0
                    abilityTurnCounter = 0
                }
                break;
        }
    }
};

class Loot {
    constructor(_name) {
        this.name = _name;
    }
    armor() {
        switch (this.name) {
            case "Enchanted Armor":
                bottomLog.innerHTML +=
                    `<br/><span id="armourText">You found a set of Enchanted Armor. AC Increased by 3.</span>`;
                $("#armourText").css("color", "blue")
                player.armorClass += 3
                setTimeout(() => {
                    $("#logAC").animate({
                        color: "blue",
                    }, 10)
                    $(".shield").effect("bounce")
                    logAC.innerHTML = "+" + player.armorClass
                }, 2000)
                addMusic("findtreasure", false);
                break;

            case "Ancient Armor":
                bottomLog.innerHTML +=
                    `<br/><span id="armourText">You found a set of Ancient Armor. AC Increased by 3.</span>`;
                $("#armourText").css("color", "red")
                player.armorClass += 3
                setTimeout(() => {
                    $("#logAC").animate({
                        color: "red",
                    }, 10)
                    $(".shield").effect("bounce")
                    logAC.innerHTML = "+" + player.armorClass
                }, 2000)
                addMusic("findtreasure", false);
                break;

            case "Divine Armor":
                bottomLog.innerHTML +=
                    `<br/><span id="armourText">The goddess blessed your amor, and it turned divine.</span>`;
                $("#armourText").css("color", "rgb(255, 234, 0)")
                $("#armourText").css("text-shadow", "0 0 15px black")
                player.armorClass = 23
                setTimeout(() => {
                    $("#logAC").animate({
                        color: "rgb(255, 234, 0)",
                    }, 10)
                    $(".shield").effect("bounce")
                    logAC.innerHTML = "+" + player.armorClass
                }, 2000);
                addMusic("blessing", false);
                break;
        }
    }

    weapons() {
        switch (this.name) {
            case "Silver Weapon":
                bottomLog.innerHTML +=
                    `<br/><span id="weaponID">You found a Silver Weapon.</span>`;
                $("#weaponID").css("color", "gray")
                player.attack.damage = [1, 10]
                player.attack.mod.toHit += 2
                player.attack.mod.toDamage = 5

                setTimeout(() => {
                    logSTG.innerHTML = "+" + player.attack.mod.toHit
                    $("#logSTG").animate({
                        color: "gray",
                    }, 10)
                    $(".sword").effect("bounce")
                }, 1500);
                addMusic("findtreasure", false);
                break;

            case "Obsidian Weapon":
                bottomLog.innerHTML +=
                    `<br/><span id="weaponID">You found an Obsidian Weapon.</span>`;
                $("#weaponID").css("color", "rgb(93,57,84)")
                player.attack.damage = [2, 10]
                player.attack.mod.toHit = 12
                player.attack.mod.toDamage = 6

                setTimeout(() => {
                    logSTG.innerHTML =
                        "+" + player.attack.mod.toHit;
                    $("#logSTG").animate({
                        color: "rgb(93,57,84)",
                    }, 10)
                    $(".sword").effect("bounce")
                }, 1500);
                addMusic("findtreasure", false);
                break;

            case "Scarlet Weapon":
                bottomLog.innerHTML +=
                    `<br/><span id="weaponID">You found a Scarlet Weapon.</span>`;
                $("#weaponID").css("color", "red")
                player.attack.damage = [2, 8]
                player.attack.mod.toHit = 14
                player.attack.mod.toDamage = 8

                setTimeout(() => {
                    logSTG.innerHTML = "+" + player.attack.mod.toHit
                    $("#logSTG").animate({
                        color: "red",
                    }, 10)
                    $(".sword").effect("bounce")
                }, 1500)
                addMusic("findtreasure", false);
                break;

            case "Enchanted Weapon":
                bottomLog.innerHTML +=
                    `<br/><span id="weaponID">You found an Enchanted Weapon.</span>`;
                $("#weaponID").css("color", "blue")
                player.attack.damage = [3, 4]
                player.attack.mod.toHit = 13
                player.attack.mod.toDamage = 7

                setTimeout(() => {
                    logSTG.innerHTML =
                        "+" + player.attack.mod.toHit;
                    $("#logSTG").animate({
                        color: "blue",
                    }, 10)
                    $(".sword").effect("bounce")
                }, 1500)
                addMusic("findtreasure", false);
                break;

            case "Divine Weapon":
                bottomLog.innerHTML +=
                    `<br/><span id="weaponID">The Goddess blessed your weapon into a Divine Weapon.</span>`;
                $("#weaponID").css("color", "rgb(255, 234, 0)")
                $("#weaponID").css("text-shadow", "0 0 15px black")
                player.attack.damage = [4, 10]
                player.attack.mod.toHit = 16
                player.attack.mod.toDamage = 10

                setTimeout(() => {
                    logSTG.innerHTML = "+" + player.attack.mod.toHit
                    $("#logSTG").animate({
                        color: "rgb(255, 234, 0)",
                    }, 10)
                    $(".sword").effect("bounce")
                }, 1500);
                addMusic("blessing", false);
                break;
        }
    }

    potion() {
        switch (this.name) {
            case "HalfPotionHP":
                player.hitPoints += 8
                bottomLog.innerHTML +=
                    `<br/><h4 id="hPotion">You used a halved Health Potion.</br> Hit Points restored by 8.</h4>`;
                $("#hPotion").css("color", "green")
                //Hit points restore animation

                $(".heart").animate({
                    color: "green",
                }, 100)
                setTimeout(() => {
                    floatingText("+" + 8, "floatingTextPlayer", "green")
                    logHP.innerHTML = player.hitPoints
                    addMusic("potionsound", false);
                }, 100)
                $(".heart").effect("pulsate")
                $(".heart").animate({
                    color: "black",
                }, 4000)
                break;

            case "FullPotionHP":
                player.hitPoints += 15
                bottomLog.innerHTML +=
                    `<br/><h4 id="hPotion">You used a full Health Potion.</br> Hit Points restored by 15.</h4>`;
                $("#hPotion").css("color", "green")
                //Hit points restore animation

                $(".heart").animate({
                    color: "green",
                }, 2500)
                setTimeout(() => {
                    floatingText("+" + 16, "floatingTextPlayer", "green")
                    logHP.innerHTML = player.hitPoints
                    addMusic("potionsound", false);
                }, 2500)
                $(".heart").effect("pulsate")
                $(".heart").animate({
                    color: "black",
                }, 5000)
                break;

            case "Divine Heal":
                player.hitPoints += 60
                bottomLog.innerHTML +=
                    `<br/><h4 id="hPotion">The Goddess restored and enhanced your Health.</h4>`;
                $("#hPotion").css("color", "rgb(255, 234, 0)")
                $("#hPotion").css("text-shadow", "0 0 15px black")
                //Hit points restore animation

                $(".heart").animate({
                    color: "rgb(255, 234, 0)",
                }, 2500)
                setTimeout(() => {
                    floatingText("+" + 60, "floatingTextPlayer", "gold")
                    logHP.innerHTML = player.hitPoints
                    addMusic("blessing", false);
                }, 2500)
                $(".heart").effect("pulsate")
                $(".heart").animate({
                    color: "black",
                }, 5000)
                break;
        }
    }

    gold() {
        bottomLog.innerHTML +=
            `<br/><h3 id="goldBag">You found a small bag of gold.</h3n>`;
        $("#goldBag").css("color", "rgb(155,135,12)");
        addMusic("gold", false);
    }

    book() {
        addMusic("openingbook", false);
    }

    floorCollapse() {
        setTimeout(() => {
            $(".card").effect("bounce");
            addMusic("floorcollapse", false);
        }, 1500)

    }
}

function addBagButton(name, id, itemTitle){
    $(`
    <span style="--i:${id};">
        <a href="#" title="${itemTitle}" id="${id}" onclick="bag${name}.useItem()"><i class='bx bxs-home'>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="43" viewBox="0 0 36 43" fill="none">
                <path d="M27.8449 35.0786L26.9788 34.5786L27.8449 35.0786ZM9.01509 39.4407L8.51509 40.3067L9.01509 39.4407ZM3.37787 20.9526L2.51184 20.4526L3.37787 20.9526ZM24.3602 18.094L23.4942 17.594L23.1038 18.2702L23.6651 18.8129L24.3602 18.094ZM19.8293 15.4781L19.4859 16.4173L20.2752 16.7058L20.6953 15.9781L19.8293 15.4781ZM22.4898 6.13999L22.6296 5.14981L22.4898 6.13999ZM31.5517 11.3719L30.875 12.1081L30.9562 12.1828L31.0517 12.2379L31.5517 11.3719ZM29.4589 14.9966L29.2649 14.0156L29.4589 14.9966ZM20.3971 9.76473L19.5141 10.2341L19.5141 10.2341L20.3971 9.76473ZM23.486 12.0092C24.0338 12.0794 24.5347 11.6922 24.6049 11.1444C24.6751 10.5966 24.2879 10.0956 23.7401 10.0254L23.486 12.0092ZM27.8421 14.0631C28.1183 13.5848 27.9544 12.9732 27.4761 12.6971C26.9978 12.421 26.3862 12.5848 26.1101 13.0631L27.8421 14.0631ZM23.3113 11.4472C23.5874 10.9689 23.4235 10.3573 22.9452 10.0812C22.467 9.80503 21.8554 9.9689 21.5792 10.4472L23.3113 11.4472ZM24.6353 2.96966L23.7596 2.48685L23.7596 2.48685L24.6353 2.96966ZM33.6966 8.20122L34.5626 8.70122L34.5626 8.70122L33.6966 8.20122ZM6.67847 21.6875L5.84242 22.2361L5.84242 22.2361L6.67847 21.6875ZM11.9638 39.8842L12.313 38.9471L12.2662 38.9297L12.218 38.917L11.9638 39.8842ZM26.9019 29.2219L26.5095 28.3021L26.3811 28.3569L26.2725 28.4448L26.9019 29.2219ZM21.9177 28.6027L20.9963 28.9915L20.9963 28.9915L21.9177 28.6027ZM20.1527 25.7006L19.7769 26.6273L19.7769 26.6273L20.1527 25.7006ZM17.5234 28.7895L17.6709 29.7786L17.6709 29.7786L17.5234 28.7895ZM15.3895 24.8337L14.9995 25.7545L14.9995 25.7545L15.3895 24.8337ZM9.58117 27.6003L9.2253 28.5349L9.58117 27.6003ZM26.9788 34.5786C23.6436 40.3554 15.8499 42.2321 9.51509 38.5747L8.51509 40.3067C15.693 44.4509 24.7601 42.4216 28.7109 35.5786L26.9788 34.5786ZM9.51509 38.5747C3.18029 34.9173 0.908665 27.2294 4.24389 21.4526L2.51184 20.4526C-1.43897 27.2956 1.33715 36.1625 8.51509 40.3067L9.51509 38.5747ZM23.6651 18.8129C27.9094 22.9168 29.7332 29.808 26.9788 34.5786L28.7109 35.5786C32.0597 29.7784 29.7421 21.9068 25.0553 17.3751L23.6651 18.8129ZM4.24389 21.4526C7.19852 16.335 13.6405 14.2804 19.4859 16.4173L20.1726 14.5389C13.5244 12.1085 6.00852 14.3962 2.51184 20.4526L4.24389 21.4526ZM22.35 7.13017C22.4052 7.13797 22.5615 7.17778 22.8434 7.28689C23.1085 7.38948 23.4345 7.53335 23.8086 7.71297C24.5559 8.07171 25.4565 8.55439 26.3771 9.08593C28.246 10.1649 30.0796 11.3771 30.875 12.1081L32.2283 10.6356C31.2557 9.74163 29.2509 8.43569 27.3771 7.35387C26.4265 6.80501 25.4796 6.29664 24.6742 5.90997C24.272 5.71688 23.8954 5.54947 23.5653 5.42171C23.2521 5.30048 22.9207 5.19091 22.6296 5.14981L22.35 7.13017ZM31.0517 12.2379C30.8334 12.1119 30.7696 11.9271 30.7571 11.8791C30.7461 11.8366 30.7585 11.8504 30.7474 11.9464C30.7258 12.1333 30.639 12.4306 30.4707 12.7668C30.3053 13.0972 30.0889 13.4097 29.8539 13.6436C29.6132 13.8831 29.4076 13.9874 29.2649 14.0156L29.6529 15.9776C30.312 15.8473 30.855 15.4689 31.2647 15.0612C31.68 14.6479 32.0157 14.1485 32.2592 13.662C32.4997 13.1815 32.6785 12.6568 32.7341 12.1764C32.7617 11.9387 32.7656 11.6574 32.6934 11.3784C32.6199 11.0939 32.4421 10.7312 32.0516 10.5058L31.0517 12.2379ZM29.2649 14.0156C29.2593 14.0167 29.1485 14.0313 28.8885 13.877C28.6404 13.7299 28.3655 13.4922 28.0934 13.2063C27.8271 12.9265 27.5943 12.6335 27.4262 12.4068C27.343 12.2946 27.2775 12.2012 27.2338 12.1372C27.212 12.1053 27.1957 12.0809 27.1854 12.0654C27.1802 12.0576 27.1766 12.052 27.1746 12.0489C27.1735 12.0473 27.1729 12.0463 27.1727 12.046C27.1726 12.0458 27.1725 12.0458 27.1726 12.0459C27.1727 12.046 27.1727 12.0461 27.1728 12.0463C27.1729 12.0463 27.173 12.0465 27.173 12.0465C27.1731 12.0467 27.1732 12.0468 26.3316 12.5869C25.4899 13.1269 25.4901 13.1271 25.4902 13.1273C25.4902 13.1274 25.4904 13.1276 25.4905 13.1277C25.4907 13.1281 25.4909 13.1284 25.4911 13.1288C25.4917 13.1296 25.4923 13.1305 25.493 13.1317C25.4944 13.1339 25.4963 13.1368 25.4986 13.1403C25.5031 13.1473 25.5094 13.1568 25.5172 13.1686C25.5329 13.1923 25.555 13.2254 25.583 13.2664C25.6391 13.3483 25.7193 13.4627 25.8196 13.598C26.0187 13.8665 26.3047 14.2279 26.6448 14.5852C26.9792 14.9365 27.3984 15.3186 27.8682 15.5972C28.3261 15.8688 28.957 16.1152 29.6529 15.9776L29.2649 14.0156ZM22.6296 5.14981C21.9701 5.05668 21.3713 5.27972 20.909 5.59344C20.4459 5.90775 20.0607 6.34908 19.7767 6.82682C19.236 7.73654 18.902 9.08275 19.5141 10.2341L21.2801 9.29534C21.1249 9.00343 21.1448 8.43948 21.4959 7.84875C21.6579 7.57626 21.8532 7.3698 22.0322 7.24832C22.212 7.12625 22.317 7.12551 22.35 7.13017L22.6296 5.14981ZM19.5141 10.2341C19.7873 10.7481 20.2904 11.0559 20.6597 11.2379C21.066 11.4382 21.5225 11.5865 21.9248 11.6949C22.3333 11.8049 22.7204 11.8828 23.0029 11.933C23.145 11.9583 23.2628 11.977 23.3464 11.9895C23.3882 11.9957 23.4215 12.0005 23.4452 12.0037C23.457 12.0054 23.4664 12.0066 23.4733 12.0076C23.4767 12.008 23.4795 12.0084 23.4816 12.0087C23.4827 12.0088 23.4835 12.0089 23.4843 12.009C23.4846 12.0091 23.485 12.0091 23.4852 12.0091C23.4854 12.0091 23.4856 12.0092 23.4856 12.0092C23.4858 12.0092 23.486 12.0092 23.613 11.0173C23.7401 10.0254 23.7402 10.0255 23.7403 10.0255C23.7404 10.0255 23.7405 10.0255 23.7405 10.0255C23.7407 10.0255 23.7407 10.0255 23.7408 10.0255C23.7408 10.0255 23.7407 10.0255 23.7405 10.0255C23.74 10.0254 23.7388 10.0253 23.737 10.025C23.7335 10.0246 23.7275 10.0237 23.7192 10.0226C23.7025 10.0203 23.6766 10.0166 23.6426 10.0115C23.5746 10.0014 23.475 9.98559 23.3531 9.96391C23.1075 9.92023 22.7805 9.85408 22.4449 9.76371C22.1032 9.67166 21.7857 9.56321 21.544 9.44407C21.2654 9.30672 21.2466 9.23239 21.2801 9.29534L19.5141 10.2341ZM25.2262 18.594L27.8421 14.0631L26.1101 13.0631L23.4942 17.594L25.2262 18.594ZM20.6953 15.9781L23.3113 11.4472L21.5792 10.4472L18.9633 14.9781L20.6953 15.9781ZM23.7033 6.84055C24.6996 6.75519 24.6996 6.75551 24.6997 6.75582C24.6997 6.75591 24.6997 6.75621 24.6997 6.7564C24.6997 6.75678 24.6998 6.75712 24.6998 6.75744C24.6999 6.75808 24.6999 6.75861 24.6999 6.75903C24.7 6.75987 24.7 6.76027 24.7 6.76024C24.7 6.76017 24.6999 6.75837 24.6997 6.7549C24.6992 6.74795 24.6984 6.73433 24.6976 6.71445C24.696 6.67465 24.6942 6.61004 24.695 6.524C24.6966 6.35154 24.7083 6.09528 24.7503 5.78166C24.8346 5.15169 25.0383 4.30997 25.511 3.45246L23.7596 2.48685C23.1386 3.61318 22.8763 4.70691 22.768 5.51643C22.7136 5.92255 22.6974 6.26204 22.6951 6.5054C22.694 6.62726 22.6964 6.72558 22.6993 6.79673C22.7008 6.83233 22.7024 6.86118 22.7038 6.88285C22.7045 6.89368 22.7051 6.90272 22.7056 6.90991C22.7059 6.91351 22.7061 6.91665 22.7064 6.91932C22.7065 6.92065 22.7066 6.92187 22.7067 6.92296C22.7067 6.92351 22.7067 6.92403 22.7068 6.92452C22.7068 6.92477 22.7068 6.92512 22.7068 6.92524C22.7069 6.92558 22.7069 6.92591 23.7033 6.84055ZM25.511 3.45246C25.8839 2.77609 26.5057 2.45971 27.3657 2.4497C28.2654 2.43922 29.3552 2.78011 30.3739 3.38994C31.3906 3.99856 32.2312 4.8123 32.6872 5.62857C33.1351 6.43015 33.1653 7.12141 32.8306 7.70122L34.5626 8.70122C35.3547 7.32924 35.1079 5.86077 34.4332 4.65311C33.7667 3.46014 32.6393 2.41512 31.4012 1.67391C30.165 0.933904 28.7129 0.433876 27.3424 0.449833C25.9322 0.466253 24.5553 1.04366 23.7596 2.48685L25.511 3.45246ZM32.8306 7.70122C32.3939 8.45763 31.7826 9.06031 31.26 9.48155C31.0019 9.68955 30.7738 9.84665 30.6133 9.94999C30.5333 10.0015 30.4707 10.0392 30.4305 10.0629C30.4104 10.0747 30.3959 10.0829 30.3876 10.0875C30.3835 10.0899 30.3809 10.0913 30.38 10.0918C30.3795 10.092 30.3795 10.0921 30.3798 10.0919C30.38 10.0918 30.3803 10.0916 30.3807 10.0914C30.3809 10.0913 30.3811 10.0912 30.3814 10.091C30.3815 10.091 30.3817 10.0909 30.3818 10.0908C30.382 10.0907 30.3822 10.0906 30.8569 10.9707C31.3316 11.8509 31.3319 11.8507 31.3321 11.8506C31.3322 11.8506 31.3325 11.8504 31.3326 11.8503C31.333 11.8501 31.3334 11.8499 31.3338 11.8497C31.3346 11.8492 31.3356 11.8487 31.3366 11.8482C31.3388 11.847 31.3413 11.8456 31.3443 11.844C31.3502 11.8407 31.3579 11.8364 31.3672 11.8312C31.3859 11.8207 31.4111 11.8063 31.4423 11.788C31.5046 11.7515 31.5909 11.6993 31.696 11.6316C31.9058 11.4965 32.193 11.2983 32.5151 11.0387C33.1529 10.5246 33.9614 9.7425 34.5626 8.70122L32.8306 7.70122ZM7.51452 21.1388C6.98874 20.3376 6.21504 19.7375 5.2309 19.8418C4.33932 19.9362 3.66232 20.5834 3.19882 21.2514C2.24268 22.6294 1.60691 24.9176 1.55978 27.3957C1.51215 29.9007 2.06172 32.7398 3.63425 35.2278C5.21993 37.7366 7.80834 39.8263 11.7097 40.8514L12.218 38.917C8.78981 38.0163 6.63132 36.2263 5.32487 34.1593C4.00527 32.0715 3.51749 29.6388 3.55942 27.4338C3.60186 25.2019 4.18259 23.3419 4.84202 22.3916C5.1863 21.8954 5.41685 21.8333 5.44162 21.8306C5.44442 21.8303 5.44491 21.8304 5.44742 21.831C5.45063 21.8318 5.46713 21.8361 5.49766 21.8548C5.56306 21.895 5.68627 21.9982 5.84242 22.2361L7.51452 21.1388ZM11.6147 40.8213C15.5475 42.2866 18.9115 42.1992 21.6551 41.2018C24.3829 40.2101 26.4154 38.3493 27.7609 36.3959C29.0908 34.4652 29.8143 32.347 29.809 30.7543C29.8065 29.9861 29.6305 29.1106 28.9972 28.5426C28.2788 27.8983 27.3392 27.9482 26.5095 28.3021L27.2942 30.1418C27.733 29.9546 27.7448 30.1059 27.6618 30.0315C27.6563 30.0266 27.6948 30.0584 27.7355 30.1851C27.7762 30.3119 27.8082 30.5015 27.809 30.7609C27.8126 31.8342 27.2854 33.5604 26.1138 35.2614C24.9577 36.9399 23.238 38.4983 20.9717 39.3221C18.7212 40.1403 15.8491 40.2647 12.313 38.9471L11.6147 40.8213ZM26.2725 28.4448C25.2061 29.3084 24.4887 29.7502 24.0146 29.9433C23.5495 30.1326 23.5029 30.0137 23.5828 30.0625C23.5874 30.0653 23.4949 30.0019 23.3385 29.5991C23.2675 29.4162 23.2025 29.2185 23.1201 28.9746C23.0417 28.7425 22.9501 28.4773 22.839 28.214L20.9963 28.9915C21.0765 29.1815 21.148 29.386 21.2254 29.615C21.2988 29.8323 21.3825 30.087 21.4741 30.3229C21.6429 30.7578 21.9312 31.3978 22.5413 31.7699C23.2267 32.188 24.0103 32.1044 24.7688 31.7956C25.5183 31.4904 26.4181 30.9005 27.5312 29.9991L26.2725 28.4448ZM22.839 28.214C22.7471 27.9961 22.6585 27.7521 22.5408 27.4438C22.4293 27.1519 22.2986 26.8218 22.1432 26.502C21.8559 25.9107 21.3767 25.1179 20.5286 24.7739L19.7769 26.6273C19.8885 26.6725 20.09 26.8527 20.3443 27.3761C20.4598 27.6137 20.5651 27.8764 20.6724 28.1574C20.7735 28.4221 20.8865 28.7312 20.9963 28.9915L22.839 28.214ZM20.5286 24.7739C20.1925 24.6376 19.8053 24.5773 19.4074 24.6885C19.0153 24.7981 18.7388 25.0392 18.5531 25.2681C18.2228 25.6754 18.0309 26.2438 17.9049 26.6085C17.7493 27.0587 17.6407 27.382 17.4997 27.6247C17.4357 27.7348 17.3893 27.7829 17.3686 27.8001C17.3601 27.8073 17.3586 27.8069 17.3639 27.8045C17.3663 27.8034 17.369 27.8023 17.3718 27.8015C17.3745 27.8006 17.3761 27.8004 17.3758 27.8004L17.6709 29.7786C18.4808 29.6577 18.9565 29.0982 19.2289 28.6296C19.4912 28.1781 19.6677 27.6306 19.7952 27.2617C19.9522 26.8073 20.0414 26.6082 20.1065 26.5279C20.1185 26.5131 20.0684 26.5804 19.9458 26.6147C19.8173 26.6506 19.7427 26.6134 19.7769 26.6273L20.5286 24.7739ZM17.3758 27.8004C17.2747 27.8155 17.3144 27.788 17.4098 27.8352C17.5147 27.887 17.554 27.9623 17.5527 27.9595C17.5098 27.8719 17.4746 27.6606 17.4347 27.1322C17.4025 26.7048 17.3651 26.0764 17.1817 25.51C16.9838 24.8989 16.5832 24.2533 15.7796 23.9129L14.9995 25.7545C15.1105 25.8015 15.199 25.8791 15.279 26.1262C15.3735 26.418 15.4027 26.7827 15.4404 27.2824C15.4704 27.6811 15.5082 28.3311 15.7558 28.8378C15.8997 29.1322 16.1387 29.438 16.5243 29.6284C16.9005 29.8142 17.3022 29.8336 17.6709 29.7786L17.3758 27.8004ZM15.7796 23.9129C14.8182 23.5056 13.9616 23.6724 13.2607 24.1033C12.6416 24.4838 12.1295 25.0829 11.7444 25.5246C11.3057 26.0277 10.9908 26.378 10.6699 26.5815C10.4227 26.7382 10.2283 26.7767 9.93704 26.6658L9.2253 28.5349C10.1998 28.906 11.0521 28.7074 11.741 28.2705C12.3564 27.8802 12.8671 27.2803 13.2518 26.839C13.6902 26.3362 13.9994 25.9968 14.308 25.8072C14.5347 25.6678 14.7121 25.6327 14.9995 25.7545L15.7796 23.9129ZM9.93704 26.6658C9.50893 26.5028 9.27756 26.2856 9.11893 26.0402C8.94191 25.7664 8.82114 25.4045 8.71021 24.8934C8.51039 23.9727 8.36315 22.432 7.51452 21.1388L5.84242 22.2361C6.42315 23.1211 6.48344 24.0631 6.75571 25.3176C6.88082 25.894 7.06224 26.5427 7.43936 27.126C7.83486 27.7378 8.40958 28.2243 9.2253 28.5349L9.93704 26.6658ZM10 21.5C10 21.2239 10.2239 21 10.5 21V23C11.3284 23 12 22.3284 12 21.5H10ZM10.5 21C10.7761 21 11 21.2239 11 21.5H9C9 22.3284 9.67157 23 10.5 23V21ZM11 21.5C11 21.7761 10.7761 22 10.5 22V20C9.67157 20 9 20.6716 9 21.5H11ZM10.5 22C10.2239 22 10 21.7761 10 21.5H12C12 20.6716 11.3284 20 10.5 20V22ZM16 20.5C16 20.7761 15.7761 21 15.5 21V23C16.8807 23 18 21.8807 18 20.5H16ZM15.5 21C15.2239 21 15 20.7761 15 20.5H13C13 21.8807 14.1193 23 15.5 23V21ZM15 20.5C15 20.2239 15.2239 20 15.5 20V18C14.1193 18 13 19.1193 13 20.5H15ZM15.5 20C15.7761 20 16 20.2239 16 20.5H18C18 19.1193 16.8807 18 15.5 18V20Z" fill="white"/>
            </svg>
        </i></a>
    </span>
    `).appendTo("#navIII .nav-content");
}

class Items{
    constructor(_name){
        this.name = _name;
    }
    bag(){
        switch(this.name){
            case "HalfPotion":
                addBagButton("HalfPotion","1", "Half Health Potion, restores 8 HP.");
                bottomLog.innerHTML +=
                    `<h3 id="halfPotionSteal">You got half a Healing Potion.</h3>`
                $("#halfPotionSteal")
                    .css({"color": "green",})
                $("#navIII")
                    .effect("pulsate")
                    addMusic("potionsound", false);
            break;
            case "FullPotion":
                addBagButton("FullPotion","2", "Full Health Potion, restores 15 HP.");
                bottomLog.innerHTML +=
                    `<h3 id="fullPotionSteal">You got a full Healing Potion.</h3>`
                $("#fullPotionSteal")
                    .css({"color": "green",})
                $("#navIII")
                    .effect("pulsate")
                    addMusic("potionsound", false)
            break;
        }
    }
    useItem(){
        switch(this.name){
            case "HalfPotion":
                HalfPotionHP.potion();
                $("#1").remove();
            break;
            case "FullPotion":
                FullPotionHP.potion();
                $("#2").remove();
            break;
        }
    }
}

const bookSFX = new Loot("")
const floorCollapseSFX = new Loot("")
const goldSFX = new Loot("Gold")
const HalfPotionHP = new Loot("HalfPotionHP")
const FullPotionHP = new Loot("FullPotionHP")
const silverWeapon = new Loot("Silver Weapon")
const enchantedArmor = new Loot("Enchanted Armor")
const obsidianWeapon = new Loot("Obsidian Weapon")
const scarletWeapon = new Loot("Scarlet Weapon")
const enchantedWeapon = new Loot("Enchanted Weapon")
const ancientArmor = new Loot("Ancient Armor")
const divineWeapon = new Loot("Divine Weapon")
const divineArmor = new Loot("Divine Armor")
const divineHeal = new Loot("Divine Heal")
const bagHalfPotion = new Items("HalfPotion")
const bagFullPotion = new Items("FullPotion")


arrMonster.push(new Enemies("Rat", 12, 10, -2, { "name": "bite", "mod": { "toHit": 2, "toDamage": 0 }, "toHit": 20, "damage": [1, 4] }));

arrMonster.push(new Enemies("Goblin", 24, 12, 1, { "name": "stab", "mod": { "toHit": 4, "toDamage": 1 }, "toHit": 20, "damage": [1, 4] }));

arrMonster.push(new Enemies("Wolf", 30, 13, 2, { "name": "bite", "mod": { "toHit": 5, "toDamage": 1 }, "toHit": 20, "damage": [1, 6] }));

arrMonster.push(new Enemies("GiantSpider", 38, 15, 3, { "name": "bite", "mod": { "toHit": 6, "toDamage": 2 }, "toHit": 20, "damage": [2, 6] }));

arrMonster.push(new Enemies("Owlbear", 50, 14, 1, { "name": "claws", "mod": { "toHit": 7, "toDamage": 3 }, "toHit": 20, "damage": [2, 8] }));

arrMonster.push(new Enemies("Manticore", 69, 16, 2, { "name": "claws", "mod": { "toHit": 9, "toDamage": 3 }, "toHit": 20, "damage": [2, 10] }));

arrMonster.push(new Enemies("Behemoth", 80, 16, 3, { "name": "claws", "mod": { "toHit": 12, "toDamage": 7 }, "toHit": 20, "damage": [3, 6] }));

arrMonster.push(new Enemies("Dragon", 100, 17, 1, { "name": "claws", "mod": { "toHit": 15, "toDamage": 9 }, "toHit": 20, "damage": [3, 10] }));