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
                HalfPotionHP.potion();
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
                HalfPotionHP.potion();
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
                HalfPotionHP.potion();
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
                HalfPotionHP.potion();
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
                HalfPotionHP.potion();
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
                HalfPotionHP.potion();
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
                HalfPotionHP.potion();
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
                HalfPotionHP.potion();
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
                    `<br/><h4 id="abilityUse">You used Aimed Strike! +4 chance to hit!</h4>`;
                    $("#abilityUse").css("color", "red")
                    player.attack.mod.toHit += 4
                    logSTG.innerHTML = "+" + player.attack.mod.toHit
                    rageUsed = 1
                    addMusic("warriorabilityone", false)
                        $("#logSTG").animate({
                            color: "red",
                        }, 10)
                        $(".sword").effect("bounce")
                } else if (rageUsed == 1){
                    bottomLog.innerHTML =
                    `<br/><h3 id="abilityUse">Your eyes are sharpened!</h3>`;
                    $("#abilityUse").css("color", "red")
                } else if (player.classResource <= 3){
                    bottomLog.innerHTML =
                    `<br/><h3 id="abilityUse">Out of rage!</h3>`;
                    $("#abilityUse").css("color", "red")
                }
                break;

            case "Rogue":
                if (stealUsed == 0) {
                    bottomLog.innerHTML +=
                        `<br/><h4 id="abilityUse">While your enemy was distracted, you used Steal!</h4>`;
                        $(".card").effect("slide")
                        addMusic("rogueabilityone", false)
                        setTimeout(() => {
                            randomizeRogueSteal(level)
                        }, 800)
                    stealUsed = 1
                    player.classResource -= 3
                } else if (stealUsed == 1) {
                    bottomLog.innerHTML =
                        `<br/><h3 id="abilityUse">There's nothing to steal!</h3>`;
                    $("#abilityUse").css("color", "brown")    
                } else if (player.classResource <= 0) {
                    bottomLog.innerHTML +=
                        `<br/><h3 id="abilityUse">Out of finesse!!</h3>`;
                        $("#abilityUse").css("color", "brown")
                }
                break;

            case "Wizard":
                if (player.classResource >= 3 && spellUsed == 0) {
                    spellUsed = 1
                    player.classResource -= 4
                    player.armorClass += 2
                    abilityTurnCounter += 1
                    addMusic("wizardabilityone", false)
                        turno = false
                        $(".buttons").css("display", "none");
                        $("#endTurn").css("display", "flex");
                    bottomLog.innerHTML =
                        `<br/><h3 id="abilityUse">You used Arcane Shield, AC incresed by +2 for 10 turns!</h3>`;
                    $("#firstSkill").prop("disabled", true)    
                    setTimeout(() => {
                        $("#logAC").css("color", "purple",)
                        $(".shield").effect("bounce")
                        logAC.innerHTML = "+" + player.armorClass
                    }, 5)
                } else if (spellUsed == 1) {
                    bottomLog.innerHTML =
                        `<br/><h3 id="abilityUse">You can't reuse Arcane Shield unit it dissipates!</h3>`;
                        $("#abilityUse").css("color", "purple",)
                } else if (player.classResource <= 3) {
                    $("#abilityUse").css("color", "purple",)
                    bottomLog.innerHTML = `<br/><h3 id="abilityUse">Out of Resources</h3>`;
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
                    $("#abilityBtn").remove();
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
                    `<br/><h4 id="hPotion">You found half a Health Potion.</br> Hit Points restored by 5.</h4>`;
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
                    `<br/><h4 id="hPotion">You found a Full Health Potion.</br> Hit Points restored by 10.</h4>`;
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
            `<br/><span id="goldBag">You found a small bag of gold.</span>`;
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


arrMonster.push(new Enemies("Rat", 12, 10, 2, { "name": "bite", "mod": { "toHit": 2, "toDamage": 0 }, "toHit": 20, "damage": [1, 4] }));

arrMonster.push(new Enemies("Goblin", 24, 12, 1, { "name": "stab", "mod": { "toHit": 4, "toDamage": 1 }, "toHit": 20, "damage": [1, 4] }));

arrMonster.push(new Enemies("Wolf", 30, 14, 2, { "name": "bite", "mod": { "toHit": 5, "toDamage": 1 }, "toHit": 20, "damage": [1, 6] }));

arrMonster.push(new Enemies("GiantSpider", 38, 16, 3, { "name": "bite", "mod": { "toHit": 6, "toDamage": 2 }, "toHit": 20, "damage": [2, 6] }));

arrMonster.push(new Enemies("Owlbear", 42, 18, 1, { "name": "claws", "mod": { "toHit": 7, "toDamage": 3 }, "toHit": 20, "damage": [2, 8] }));

arrMonster.push(new Enemies("Manticore", 50, 20, 2, { "name": "claws", "mod": { "toHit": 9, "toDamage": 3 }, "toHit": 20, "damage": [2, 10] }));

arrMonster.push(new Enemies("Behemoth", 69, 22, 3, { "name": "claws", "mod": { "toHit": 12, "toDamage": 7 }, "toHit": 20, "damage": [3, 6] }));

arrMonster.push(new Enemies("Dragon", 100, 27, 1, { "name": "claws", "mod": { "toHit": 15, "toDamage": 9 }, "toHit": 20, "damage": [3, 10] }));