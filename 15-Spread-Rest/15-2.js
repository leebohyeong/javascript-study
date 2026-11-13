function sum(a, b, c, d = 4) {
    return a + b + c + d;
}

const numbers = [1, 2, 3];

sum(...numbers);

console.log(sum(...numbers));