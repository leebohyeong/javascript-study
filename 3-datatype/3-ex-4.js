const calculator = {
    add(a, b) {
        return a + b;
    },

    substract(a, b) {
        return a - b;
    },

    multiply(a, b) {
        return a * b;
    },

    division(a, b) {
        return a / b;
    },

    mod(a, b) {
        return a % b;
    }
}

console.log(calculator.add(3, 4));
console.log(calculator.substract(7, 4));
console.log(calculator.multiply(3, 4));
console.log(calculator.division(3, 4));
console.log(calculator.mod(3, 4));