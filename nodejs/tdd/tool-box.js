'use strict';
function addition (n1, n2) {
    return n1 + n2;
}

module.exports = {
    addition,
    soustraction: (number1, number2) => number1 - number2,
    multiplication: (number1, number2) => number1 * number2
}