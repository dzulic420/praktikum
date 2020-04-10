var assert = require('assert');
const fizzBuzz = require("../fizzBuzz");
describe('fizz buz problem', function () {
    it('fizzBuzz should be a function', function () {
        fizzBuzz();
    });
    it('ako je % 3 ispisi Fizz', function () {
        let result=fizzBuzz(3);
        assert.equal(result,"Fizz")
    });
    it('ako je % 5 ispisi Fizz', function () {
        let result=fizzBuzz(5);
        assert.equal(result,"Buzz")
    });
    it('ako je % 3 i 5 ispisi Fizz Buzz', function () {
        let result=fizzBuzz(15);
        assert.equal(result,"Fizz Buzz")
    });
});
