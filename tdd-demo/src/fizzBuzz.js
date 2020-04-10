function fizzBuzz(b) {
    let a = []
    if (b % 3 == 0) {
        a.push('Fizz')
    }
    if (b % 5 == 0) {
        a.push('Buzz')
    }
    if (b % 3 == 0 && b % 5 == 0) {
        return a.join(" ")
    }
    return a;
}

module.exports = fizzBuzz;