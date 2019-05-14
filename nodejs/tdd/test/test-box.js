'use strict';

const expect = require('chai').expect;
const toolBox = require('../tool-box')

describe('Je test ma tool box', function () {
    it('je teste ma fonction addition', function () {
        expect(toolBox.addition(2,2)).to.eql(4)
        expect(toolBox.addition(5,6)).to.not.eql(3)
    });
    it('je teste ma fonction soutraction', function () {
        expect(toolBox.soustraction(4,1)).to.eql(3)
        expect(toolBox.soustraction(20,6)).to.not.eql(4)
    });
    it('je teste ma fonction multiplication', function () {
        expect(toolBox.multiplication(2,2)).to.eql(4)
        expect(toolBox.multiplication(5,6)).to.not.eql(4)
    });
});