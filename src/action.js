const nameAttacker = document.getElementById("nameAttacker");
const bottomLog = document.getElementById("bottomLog");
const logD20 = document.getElementById("logD20");

//Função de ataque, recebe como parametros o atacante, quem recebe o ataque e qual o tipo de ataque usado
function attack(attacker, receiver, how){
    console.log(`${attacker.name} is trying to attack ${receiver.name}.`);
    nameAttacker.innerHTML = 
        `<span>${attacker.name} is trying to attack ${receiver.name}.</span>`;

    let attack = rollAttack(attacker);

    if(how == "fast"){
        attack.damage -= 3;
        attack.hit += 3;        
    } else if(how == "strong"){
        attack.damage += 3;
        attack.hit -= 3;
    }

    const caToBeat = receiver.armorClass;

    setTimeout(() => {
        console.log(`They roll ${attack.hit} to hit`);
        bottomLog.innerHTML =
            `<span>They roll ${attack.hit} to hit.</span>`;
        $("#logD20").fadeIn();
        $("#logD20").css("color", "white");
        $("#logD20").css("font-size", "50px");
    }, 1000);

    if(attack.hit >= caToBeat){
        setTimeout(() => {
            console.log(`HIT!! Doing ${attack.damage} damage to ${receiver.name}`);
            bottomLog.innerHTML +=
                `<br/><span>HIT!! Doing ${attack.damage} damage to ${receiver.name}.</span>`; 
            if(attacker == player){
                if(character == "Warrior"){
                    addMusic("warriorhit", false);
                } else if(character == "Slayer"){
                    addMusic("slayerhit", false);
                }else {
                    addMusic("wizardhit", false);
                }
                floatingText("-" + attack.damage, "floatingTextMonster", "red")
                $("#blabla").effect("pulsate")
                $(`#monsterLogHP`).effect("pulsate")
                $(".monsterCard").effect("pulsate");
            } else{
                floatingText("-" + attack.damage, "floatingTextPlayer", "red")
                $("#blabla").effect("pulsate")
                $(`#logHP`).effect("pulsate")
                $(".card").effect("pulsate");
                addMusic("monsterhit", false);
            }
        }, 2000);

        let hpBefore = receiver.hitPoints;

        receiver.hitPoints -= attack.damage;
        if(receiver.hitPoints <= 0){
            return setTimeout(() => {
                console.log(`${receiver.name} has died.`);
                bottomLog.innerHTML +=
                    `<br/><span>${receiver.name} has died.</span>`;
            }, 3000);
        } else{
            return setTimeout(() => {
                console.log(`${receiver.name} was at ${hpBefore} and now has ${receiver.hitPoints}`);
                bottomLog.innerHTML +=
                    `<br/><span>${receiver.name} was at ${hpBefore} and now has ${receiver.hitPoints}.</span>`;
            }, 3000);
        }
    } else{
        return setTimeout(() => {
            bottomLog.innerHTML += `<br/><h2>Misses.</h2>`;
            addMusic("miss", false);
            console.log("Misses!");
        }, 2000);
    }
}

//Função que rola o ataque
function rollAttack(attackerRolling){
    const hit = rollToHit(attackerRolling);
    let damage = rollToDamage(attackerRolling);

    if(hit - attackerRolling.attack.mod.toHit == 20){
        console.log("CRITICAL HIT!");
        bottomLog.innerHTML +=
            `<h3>CRITICAL HIT.</h3>`;
        setTimeout(() => {
            $("#logD20").animate({
                "color": "#acaf00",
                "font-size": "90px"},1000)
        }, 1500);
        damage = 2 * damage;
    }
    return {hit,damage};
}

//Causa o dano a vida do inimigo
function rollToDamage(attackerDamage){
    const modToDamage = attackerDamage.attack.mod.toDamage;
    const howManyDices = attackerDamage.attack.damage[0];
    const witchDices = attackerDamage.attack.damage[1];
    let valueOfRoll = 0;

    for(let i = 0; i < howManyDices; i++){
        valueOfRoll += Math.floor(((Math.random() * witchDices) + 1));
    }
    const damage = parseInt(valueOfRoll + modToDamage);

    return damage;
}

//Funcao que testa se a rolagem foi maior ou igual a Armor Class(AC)
function rollToHit(attackerToHit){
    const modToHit = attackerToHit.attack.mod.toHit;
    const witchDices = attackerToHit.attack.toHit;

    const valueOfRoll = Math.floor(((Math.random() * witchDices) + 1));
    setTimeout(() => {
        logD20.innerHTML = 
            `${valueOfRoll}`;
    }, 1000);
    const hit = valueOfRoll + modToHit;

    return hit;
}