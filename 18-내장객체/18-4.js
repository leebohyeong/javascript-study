// 1. 빈 Map 만들기
// 2. "name" → "Alice" 저장
// 3. "age" → 25 저장
// 4. "name" 값 가져오기  → "Alice"
// 5. "age" 키가 있는지  → true
// 6. 크기  → 2

// 7. for...of + 구조분해 [key, value]로 모두 출력
//    → name Alice
//    → age 25

let map = new Map();

map.set("name", "alice");
map.set("age", 25);

console.log(map.get('name'));
console.log(map.get('age'));
console.log(map.size);
console.log(map);

for(const [key, value] of map) {
    console.log(key, value);
}