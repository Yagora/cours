'use strict';

function getRandomNumberBetween(min, max) {
    const floorMin = Math.floor(min);
    const floorMax = Math.floor(max);

    return Math.floor(Math.random() * (floorMax - floorMin)) + floorMin;
}

module.exports = class Common {
    constructor(pointOflife, damageMin, damageMax) {
        this._pointOflife = pointOflife;
        this._damageMin = damageMin;
        this._damageMax = damageMax;
    }
    get pointOflife() {
        return _pointOflife;
    }
    takeDamage(damages) {
        this._pointOflife -= damages;
    }
    attaque() {
        return getRandomNumberBetween(this._damageMin, this._damageMax)
    }
    isAlive() {
        return this._pointOflife > 0;
    }
}