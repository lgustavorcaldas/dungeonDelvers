const arrMonster = [];
const player = {
    "name": "Jorge",
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

arrMonster.push(new Enemies("Rat",4,8,2,{"name": "bite","mod":{"toHit": 0,"toDamage": 0},"toHit": 20,"damage": [1,4]}));

arrMonster.push(new Enemies("Goblin",6,10,1,{"name": "stab","mod":{"toHit": 3,"toDamage": 1},"toHit": 20,"damage": [1,4]}));

arrMonster.push(new Enemies("Wolf",12,13,2,{"name": "bite","mod":{"toHit": 3,"toDamage": 1},"toHit": 20,"damage": [2,4]}));

arrMonster.push(new Enemies("GiantSpider",26,14,3,{"name": "bite","mod":{"toHit": 5,"toDamage": 3},"toHit": 20,"damage": [1,8]}));

arrMonster.push(new Enemies("Owlbear",59,12,1,{"name": "claws","mod":{"toHit": 7,"toDamage": 5},"toHit": 20,"damage": [2,8]}));