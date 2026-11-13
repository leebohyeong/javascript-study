const fruites = ["Apple", "Banana", "Orange"];
const [first, second, third] = fruites;

console.log(first);
console.log(second);
console.log(third);

/*  ------------------  */ 

const numbers = [1, 2, 3, 4, 5];
const [num0, ,num2] = numbers;

console.log(num0);
console.log(num2);


/*  ------------------  */ 

const colors = ['red', 'green', 'black'];
const [first1, second1, third1='blue'] = colors;
console.log(first1);
console.log(second1);
console.log(third1);