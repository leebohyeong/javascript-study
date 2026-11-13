// 1) 함수 printUser 선언 (매개변수 자리에서 { name, age }로 구조 분해)
//    → `Name: ${name}, Age: ${age}` 출력

function printUser({name, age, city='busan'}) {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}

// 2) 상수 user 만들기 → name: 'Alice', age: 25
const user = {
    name: 'Alice',
    age: 25,
    city: 'Seoul'
}

// 3) printUser(user) 호출 → "Name: Alice, Age: 25"

printUser(user);