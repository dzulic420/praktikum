var assert = require('assert');
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
const arabRoman = require("../arabRoman");

describe('arab to roman', function() {
    it('arabRoman should be a function', function () {
       arabRoman();
    });
    it("arabski -> rimski I", function() {
        assert.strictEqual(arabRoman(1), "I"); 
    });
    it("arabski -> rimski IV", function() {
       assert.strictEqual(arabRoman(2), "II"); 
    });
    it("arabski -> vrati rimski IV", function() {
        assert.strictEqual(arabRoman(3), "III"); 
     });
     it("arabski -> vrati rimski IV", function() {
        assert.strictEqual(arabRoman(4), "IV"); 
     });
     it("arabski -> vrati rimski IV", function() {
        assert.strictEqual(arabRoman(5), "V"); 
     });
     it("arabski -> vrati rimski IV", function() {
        assert.strictEqual(arabRoman(6), "VI"); 
     });
});