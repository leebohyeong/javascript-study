let person = {
    name: 'kim',
    age: 30,
    greet() {
        console.log('내 이름은'+this.name+'입니다.');
    }
}

let person2 = person;

console.log(person);
console.log(typeof person);

person.hobby = 'game';
console.log(person);

person.hobby = 'coding';
console.log(person);

console.log(person2);
person2.age = 22;

console.log(person2);
console.log(person);

person.greet();
console.log(5 + 5 + '5');