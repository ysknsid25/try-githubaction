module.exports = function fizzbuzz(v) {
    if (v % 15 === 0) {
        return "FizzBuss";
    }
    if (v % 3 === 0) {
        return "Fizz";
    }
    if (v % 5 === 0) {
        return "Buzz";
    }
    return String(v);
};
