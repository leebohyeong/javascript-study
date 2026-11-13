function sum(...numbers) {
    //    → numbers = [1, 2, 3, 4, 5] (배열로 받음)

    // return numbers.reduce((acc, cur) => {
    //     return acc + cur
    // }, 0);

    return numbers.reduce((acc, cur) => acc + cur, 0);
}
console.log(sum(1,2,3,4,5));

// 
function multiply(num, ...args) {
    return args.map(arg => arg * num);
}
console.log(multiply(3, 1, 2, 3, 4, 5));

//
const [first, second, ...rest] = [1,2,3,4,5]
console.log(first);
console.log(second);
console.log(rest);

    