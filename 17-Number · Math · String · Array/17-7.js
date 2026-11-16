// 1. 배열 fruits = ["Banana", "Apple", "Orange"] 만들기
// 2. 정렬  → ["Apple", "Banana", "Orange"] (원본도 바뀜)
// 3. 뒤집기  → ["Orange", "Banana", "Apple"]

// 4. 배열 scores = [40, 100, 1, 5] 만들기
// 5. 그냥 sort()  → [1, 100, 40, 5] ❌ 문자열 기준
// 6. 오름차순 (a - b)  → [1, 5, 40, 100] ⭕
// 7. 내림차순 (b - a)  → [100, 40, 5, 1]

// 8. 한글 정렬: ["다람쥐", "가지", "나비"]를 localeCompare로  → ["가지", "나비", "다람쥐"]
const fruits = ["Banana", "Apple", "Orange"]
console.log(fruits.sort());
console.log(fruits.reverse());


const scores = [40, 100, 1, 5]


console.log(scores.sort())
console.log(scores.sort((a,b)=>a-b))
console.log(scores.sort((a,b)=>b-a))

console.log( ["다람쥐", "가지", "나비"].sort((a,b)=>a.localeCompare(b)))

