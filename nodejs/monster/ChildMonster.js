'use strict';
const Common = require('./Common');

module.exports = class ChildMonster extends Common {
    constructor() {
        super(10, 0, 4);
    }
}