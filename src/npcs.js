const arrMonster = [];
const player = {
    "name": "Chesterfield",
    "hitPoints": 32,
    "armorClass": 13,
    "speed": 1,
    "attack":{
        "name": "sword",
        "mod":{
            "toHit": 5,
            "toDamage": 3
        },
        "toHit": 20,
        "damage": [1,8]
        }
};

class Enemies{
    constructor(_nome,_hitPoints,_armorClass,_speed,_attack){
        this.name = _nome;
        this.hitPoints = _hitPoints;
        this.armorClass = _armorClass;
        this.speed = _speed;
        this.attack = _attack;
    };
};

arrMonster.push(new Enemies("Rat",6,8,2,{"name": "bite","mod":{"toHit": 2,"toDamage": 0},"toHit": 20,"damage": [1,4]}));

arrMonster.push(new Enemies("Goblin",12,12,1,{"name": "stab","mod":{"toHit": 4,"toDamage": 1},"toHit": 20,"damage": [1,4]}));

arrMonster.push(new Enemies("Wolf",18,14,2,{"name": "bite","mod":{"toHit": 5,"toDamage": 1},"toHit": 20,"damage": [2,4]}));

arrMonster.push(new Enemies("GiantSpider",36,20,3,{"name": "bite","mod":{"toHit": 7,"toDamage": 3},"toHit": 20,"damage": [1,8]}));

arrMonster.push(new Enemies("Owlbear",42,22,1,{"name": "claws","mod":{"toHit": 10,"toDamage": 5},"toHit": 20,"damage": [2,9]}));

arrMonster.push(new Enemies("Manticore",56,25,2,{"name": "claws","mod":{"toHit": 12,"toDamage": 7},"toHit": 20,"damage": [3,10]}));

arrMonster.push(new Enemies("Behemoth",70,26,3,{"name": "claws","mod":{"toHit": 14,"toDamage": 8},"toHit": 20,"damage": [4,10]}));

arrMonster.push(new Enemies("Dragon",100,28,1,{"name": "claws","mod":{"toHit": 16,"toDamage": 9},"toHit": 20,"damage": [6,12]}));