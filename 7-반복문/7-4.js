// 1) name: 'Alice', age: 25, city: 'Seoul'을 가진 객체를 상수 person에 넣기
const person = {
    name: 'Alice',
    age: 25,
    city: 'Seoul'
}

// 2) for...in으로 person의 key를 하나씩 꺼내기
//    → key + ": " + person[key] 출력
// 출력:
// name: Alice
// age: 25
// city: Seoul


for(key in person) {
    console.log(key + ':' + person[key]);
}
