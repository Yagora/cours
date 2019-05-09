'use strict';
const Joueur = require('./Joueur');
const ChildMonster = require('./ChildMonster');
const Monster = require('./Monster');

const gamer = new Joueur();
let counter = 0;
let monsterDead = 0;
let childMonsterDead = 0;

while(gamer.isAlive()) {
    const monster = counter % 3 === 0 ? new ChildMonster() : new Monster();
    while(monster.isAlive() && gamer.isAlive()) {
        const gamerDamage = gamer.attaque();
        monster.takeDamage(gamerDamage);
        const monsterDamage = monster.attaque();
        gamer.takeDamage(monsterDamage);
        if (!monster.isAlive()) {
            monster instanceof Monster ? monsterDead++ : childMonsterDead++;
        }
    }
    counter++;
}

console.log('Sorry you are dead')
console.log(`But you killed ${childMonsterDead} child monster and ${monsterDead} monster !`)