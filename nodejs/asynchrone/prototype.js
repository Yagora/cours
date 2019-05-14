'use strict';

const obj1 = {
    cle: 1
}

class animal {
    constructor() {
    }
    get type() {
        return 'animal';
    }
}

class yorkmouth extends animal {
    constructor(hornes) {
        super();
        this._hornes = hornes;
    }
    get hornes() {
        return this._hornes;
    }
}

const y1 = new yorkmouth(3);

const objRef = obj1;

const obj2 = Object.create(obj1);

obj1.cle = 'titi';
objRef.cle = 'saucisse';
console.log('saucisse')
console.log(obj1)
console.log(obj2.__proto__.__proto__.__proto__)
console.log(objRef)

console.log(y1.__proto__)



