const person = {
    name: '홍길동',
    age: 30,
    'like cat': true,
    greet() {
        console.log(`나는 ${this.name}이고, 내 나이는 ${this.age}살 입니다.`);
    }
}

person.greet();
console.log(person.name);
console.log(person.age);
console.log(person['like cat']);

