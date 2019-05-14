'use strict';

function fizzbuzz (number) {
    let string = '';
    if (number % 3 === 0) {
        string += 'Fizz'
    }
    if (number % 5 === 0) {
        string += 'Buzz'
    }
    return string;
}


module.exports = {
    myFunc: (number) => number*2,
    fizzbuzz
}