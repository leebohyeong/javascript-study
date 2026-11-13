// 1) 상수 users 만들기 → [{ name: "John", age: 30 }, { name: "Jane", age: 25 }]
const users = [
    { name: "John", age: 30 }, 
    { name: "Jane", age: 25 }
]

// 2) [ { }, { } ] 모양으로 구조 분해
//    → 첫 번째 객체의 name은 firstUserName, 두 번째 객체의 name은 secondUserName

const [{name:firstUserName}, {name:secondUserName}] = users;
console.log(firstUserName);
console.log(secondUserName);
 

// 3) firstUserName, secondUserName 출력 → "John" / "Jane"