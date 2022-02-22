const arrMonster = [];
const player = {
    "name": "Chesterfield",
    "hitPoints": 32,
    "armorClass": 13,
    "speed": 1,
    "attack": {
        "name": "sword",
        "mod": {
            "toHit": 5,
            "toDamage": 3
        },
        "toHit": 20,
        "damage": [1, 8]
    }
};

// Music
function addMusic(name,loop){
    $("<audio></audio>").attr({
        'class': 'musicplayer',
        'src': `./aud/${name}.mp3`,
        'volume': 0.1,
        'autoplay': 'autoplay',
        'loop': loop,
    }).appendTo("body");
}

class Enemies {
    constructor(_nome, _hitPoints, _armorClass, _speed, _attack) {
        this.name = _nome;
        this.hitPoints = _hitPoints;
        this.armorClass = _armorClass;
        this.speed = _speed;
        this.attack = _attack;
    };
};

class Items {
    constructor(_name) {
        this.name = _name;
    }
    armor(){
        switch(this.name){
            case "Enchanted Armor":
                bottomLog.innerHTML += `<br/><span id="armourText">You found a set of Enchanted Armor! AC Increased by 3!</span>`
                $("#armourText").css("color", "blue")
                player.armorClass += 3
            setTimeout(() => {
                $("#logAC").animate({
                    color:"blue",
                }, 10)
                $(".shield").effect("bounce")
                logAC.innerHTML = "+" + player.armorClass
            }, 2000)
            addMusic("findtreasure", false);
            break;

            case "Ancient Armor":
                bottomLog.innerHTML += `<br/><span id="armourText">You found a set of Ancient Armor! AC Increased by 3!</span>`
                $("#armourText").css("color", "red")
                player.armorClass += 3
            setTimeout(() => {
                $("#logAC").animate({
                    color:"red",
                }, 10)
                $(".shield").effect("bounce")
                logAC.innerHTML = "+" + player.armorClass
            }, 2000)
            addMusic("findtreasure", false);
            break;

            case "Divine Armor":
                bottomLog.innerHTML += `<br/><span id="armourText">The goddess blessed your amor, and it turned divine!</span>`
                $("#armourText").css("color", "rgb(255, 234, 0)")
                $("#armourText").css("background-color", "black")
                player.armorClass = 23
            setTimeout(() => {
                $("#logAC").animate({
                    color:"rgb(255, 234, 0)",
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
                bottomLog.innerHTML += `<br/><span id="weaponID">You found a Silver Weapon!</span>`
                $("#weaponID").css("color", "gray")
                player.attack.damage = [1, 10]
                player.attack.mod.toHit += 2
                player.attack.mod.toDamage = 5
                
                setTimeout(() => {
                    logSTG.innerHTML = "+" + player.attack.mod.toHit
                    $("#logSTG").animate({
                        color:"gray",
                    }, 10)
                    $(".sword").effect("bounce")
                }, 1500);
                addMusic("findtreasure", false);
                break;

            case "Obsidian Weapon":
                bottomLog.innerHTML += `<br/><span id="weaponID">You found an Obsidian Weapon!</span>`
                $("#weaponID").css("color", "rgb(93,57,84)")
                player.attack.damage = [2, 12]
                player.attack.mod.toHit = 12
                player.attack.mod.toDamage = 6
                
                setTimeout(() => {
                    logSTG.innerHTML = "+" + player.attack.mod.toHit
                    $("#logSTG").animate({
                        color:"rgb(93,57,84)",
                    }, 10)
                    $(".sword").effect("bounce")
                }, 1500);
                addMusic("findtreasure", false);
                break;

            case "Scarlet Weapon":
                bottomLog.innerHTML += `<br/><span id="weaponID">You found a Scarlet Weapon!</span>`
                $("#weaponID").css("color", "red")
                player.attack.damage = [1, 6]
                player.attack.mod.toHit = 14
                player.attack.mod.toDamage = 8
                
                setTimeout(() => {
                    logSTG.innerHTML = "+" + player.attack.mod.toHit
                    $("#logSTG").animate({
                        color:"red",
                    }, 10)
                    $(".sword").effect("bounce")
                }, 1500)
                addMusic("findtreasure", false);
                break;

            case "Enchanted Weapon":
                bottomLog.innerHTML += `<br/><span id="weaponID">You found an Enchanted Weapon!</span>`
                $("#weaponID").css("color", "blue")
                player.attack.damage = [1, 8]
                player.attack.mod.toHit = 13
                player.attack.mod.toDamage = 7
                
                setTimeout(() => {
                    logSTG.innerHTML = "+" + player.attack.mod.toHit
                    $("#logSTG").animate({
                        color:"blue",
                    }, 10)
                    $(".sword").effect("bounce")
                }, 1500)
                addMusic("findtreasure", false);
                break;

            case "Divine Weapon":
                bottomLog.innerHTML += `<br/><span id="weaponID">The Goddess blessed your weapon into a Divine Weapon!</span>`
                $("#weaponID").css("color", "rgb(255, 234, 0)")
                $("#weaponID").css("background-color", "black")
                player.attack.damage = [4, 12]
                player.attack.mod.toHit = 16
                player.attack.mod.toDamage = 10
                
                setTimeout(() => {
                    logSTG.innerHTML = "+" + player.attack.mod.toHit
                    $("#logSTG").animate({
                        color:"rgb(255, 234, 0)",
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
                player.hitPoints += 5
                bottomLog.innerHTML += `<br/><h4 id="hPotion">You found half a Health Potion! Hit Points restored by 5!</h4>`
                $("#hPotion").css("color", "green")
                //Hit points restore animation
                
                $(".heart").animate({
                    color: "green",
                }, 2500)
                setTimeout(() => {
                    logHP.innerHTML = player.hitPoints
                    addMusic("potionsound", false);
                }, 2500)
                $(".heart").effect("bounce")
                $(".heart").animate({
                    color: "black",
                }, 5000)
                break;

            case "FullPotionHP":
                player.hitPoints += 10
                bottomLog.innerHTML += `<br/><h4 id="hPotion">You found a Full Health Potion! Hit Points restored by 10!</h4>`
                $("#hPotion").css("color", "green")
                //Hit points restore animation
                
                $(".heart").animate({
                    color: "green",
                }, 2500)
                setTimeout(() => {
                    logHP.innerHTML = player.hitPoints
                    addMusic("potionsound", false);
                }, 2500)
                $(".heart").effect("bounce")
                $(".heart").animate({
                    color: "black",
                }, 5000)
                break;

                case "Divine Heal":
                player.hitPoints += 10
                bottomLog.innerHTML += `<br/><h4 id="hPotion">The Goddess restored and enhanced your Health!</h4>`
                $("#hPotion").css("color", "rgb(255, 234, 0)")
                $("#hPotion").css("background-color", "black")
                //Hit points restore animation
                
                $(".heart").animate({
                    color: "rgb(255, 234, 0)",
                }, 2500)
                setTimeout(() => {
                    logHP.innerHTML = player.hitPoints
                    addMusic("blessing", false);
                }, 2500)
                $(".heart").effect("bounce")
                $(".heart").animate({
                    color: "black",
                }, 5000)
                break;

        }
    }

    gold() {
        bottomLog.innerHTML += `<br/><span id="goldBag">You found a small bag of gold!</span>`
        $("#goldBag").css("color", "rgb(155,135,12)");
        addMusic("gold", false);
    }

    book(){
        addMusic("openingbook", false);
    }

    floorCollapse(){
        setTimeout(() => {
            $(".card").effect("bounce");
            addMusic("floorcollapse", false);
        }, 1500)

    }
}

const bookSFX = new Items("")
const floorCollapseSFX = new Items("")
const goldSFX= new Items("Gold")
const HalfPotionHP = new Items("HalfPotionHP")
const FullPotionHP = new Items("FullPotionHP")
const silverWeapon = new Items("Silver Weapon")
const enchantedArmor = new Items("Enchanted Armor")
const obsidianWeapon = new Items("Obsidian Weapon")
const scarletWeapon = new Items("Scarlet Weapon")
const enchantedWeapon = new Items("Enchanted Weapon")
const ancientArmor = new Items("Ancient Armor")
const divineWeapon = new Items("Divine Weapon")
const divineArmor = new Items("Divine Armor")
const divineHeal = new Items("Divine Heal")


arrMonster.push(new Enemies("Rat", 6, 8, 2, { "name": "bite", "mod": { "toHit": 2, "toDamage": 0 }, "toHit": 20, "damage": [1, 4] }));

arrMonster.push(new Enemies("Goblin", 12, 12, 1, { "name": "stab", "mod": { "toHit": 4, "toDamage": 1 }, "toHit": 20, "damage": [1, 4] }));

arrMonster.push(new Enemies("Wolf", 18, 14, 2, { "name": "bite", "mod": { "toHit": 5, "toDamage": 1 }, "toHit": 20, "damage": [2, 4] }));

arrMonster.push(new Enemies("GiantSpider", 32, 16, 3, { "name": "bite", "mod": { "toHit": 6, "toDamage": 2 }, "toHit": 20, "damage": [1, 8] }));

arrMonster.push(new Enemies("Owlbear", 40, 18, 1, { "name": "claws", "mod": { "toHit": 7, "toDamage": 4 }, "toHit": 20, "damage": [2, 9] }));

arrMonster.push(new Enemies("Manticore", 56, 20, 2, { "name": "claws", "mod": { "toHit": 9, "toDamage": 5 }, "toHit": 20, "damage": [3, 10] }));

arrMonster.push(new Enemies("Behemoth", 70, 22, 3, { "name": "claws", "mod": { "toHit": 12, "toDamage": 7 }, "toHit": 20, "damage": [4, 10] }));

arrMonster.push(new Enemies("Dragon", 100, 27, 1, { "name": "claws", "mod": { "toHit": 15, "toDamage": 9 }, "toHit": 20, "damage": [6, 12] }));