'use strict';
const expect = require('chai').expect;
const project = require('../index');

describe('test', function () {
    it('true should be true', function () {
        expect(true).to.equal(true);
    });
    it('should return double of number', function () {
        expect(project.fizzbuzz(3)).to.eql('Fizz');
        expect(project.fizzbuzz(5)).to.eql('Buzz');
        expect(project.fizzbuzz(15)).to.eql('FizzBuzz');
        expect(project.fizzbuzz(2)).to.eql('');
    });
});

const array = ["toto",'ttt','tytyty']
console.log(array[2]) 


let string;
if(i % 3 === 0) {
    
}