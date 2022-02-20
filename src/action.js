const nameAttacker = document.getElementById("nameAttacker")
const rollAttacker = document.getElementById("rollAttacker")
const logD20 = document.getElementById("logD20")

function attack(attacker, reciver, how){
    console.log(`${attacker.name} is trying to attack ${reciver.name}`);
    nameAttacker.innerHTML = `<span>${attacker.name} is trying to attack ${reciver.name}</span>`;

    let attack = rollAttack(attacker)

    if(how == "fast"){
        attack.damage -= 3;
        attack.hit += 3;        
    } else if(how == "strong"){
        attack.damage += 3;
        attack.hit -= 3;
    }

    const caToBeat = reciver.armorClass.current;
    
    setTimeout(() => {
        console.log(`They roll ${attack.hit} to hit`);
        rollAttacker.innerHTML =`<span>They roll ${attack.hit} to hit</span>`
    }, 1000);

    if(attack.hit >= caToBeat){
        setTimeout(() => {
            console.log(`HIT!! Doing ${attack.damage} damage to ${reciver.name}`);
            rollAttacker.innerHTML +=`<br/><span>HIT!! Doing ${attack.damage} damage to ${reciver.name}</span>`; 
        }, 2000);

        let hpBefore = reciver.hitPoints.current

        reciver.hitPoints.current -= attack.damage;
        if(reciver.hitPoints.current <= 0){
            return setTimeout(() => {
                console.log(`${reciver.name} has died!!!!`);
                rollAttacker.innerHTML +=`<br/><span>${reciver.name} has died!!!!</span>`
            }, 3000);
        } else{
            return setTimeout(() => {
                console.log(`${reciver.name} was at ${hpBefore} and now has ${reciver.hitPoints.current}`);
                rollAttacker.innerHTML +=`<br/><span>${reciver.name} was at ${hpBefore} and now has ${reciver.hitPoints.current}</span>`
            }, 3000);
        }
    } else{
        return setTimeout(() => {
            console.log("Misses!");
            rollAttacker.innerHTML +=`<br/><span>Misses!</span>`;
        }, 3000);
    }
}

function rollAttack(attackerRolling){
    const hit = rollToHit(attackerRolling);
    let damage = rollToDamage(attackerRolling);

    if(hit - attackerRolling.attack.mod.toHit == 20){
        console.log("CRITICAL HIT!");
        rollAttacker.innerHTML +=`<h3>CRITICAL HIT!</h3>`
        damage = 2 * damage
    }
    return {hit,damage};
}

function rollToDamage(attackerDamage){
    const modToDamage = attackerDamage.attack.mod.toDamage;
    const howManyDices = attackerDamage.attack.damage[0];
    const witchDices = attackerDamage.attack.damage[1];
    let valueOfRoll = 0;

    for(let i = 0; i < howManyDices; i++){
        valueOfRoll += Math.floor(((Math.random() * witchDices) + 1));
    }
    const damage = parseInt(valueOfRoll + modToDamage);

    return damage
}

function rollToHit(attackerToHit){
    const modToHit = attackerToHit.attack.mod.toHit;
    const witchDices = attackerToHit.attack.toHit;

    const valueOfRoll = Math.floor(((Math.random() * witchDices) + 1));
    logD20.innerHTML = `${valueOfRoll}`
    const hit = valueOfRoll + modToHit

    return hit
}