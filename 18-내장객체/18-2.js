// 1. 객체 obj = { name: "Alice", age: 25 } 만들기
// 2. JSON 문자열로 바꿔 jsonStr에 저장 (JSON.stringify)
// 3. jsonStr 출력  → '{"name":"Alice","age":25}'

const obj = { name: "Alice", age: 25 };

const jsonStr = JSON.stringify(obj);
console.log(jsonStr);

const jsonObj = JSON.parse(jsonStr);
console.log(jsonObj);
