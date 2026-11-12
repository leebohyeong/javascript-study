const user = {
    name: '지민',
    age: 22,
    city: '서울'
}

for(let key in user) {
    console.log(`${key}: ${user[key]}`)
}

console.log(Object.entries(user));

const {name, age, city} = user;
console.log(name, age, city);

const title = 'Js';
const book = {title, price:20000};

console.log(book);