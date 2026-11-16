// 1. 배열 numbers = [1, 2, 3, 4, 5] 만들기

// 2. 모든 값 ×2 (map)  → [2, 4, 6, 8, 10]
// 3. 2보다 큰 값만 (filter)  → [3, 4, 5]
// 4. 전체 합계 (reduce, 시작값 0)  → 15
// 5. 4보다 큰 값이 하나라도 있나? (some)  → true
// 6. 모두 0보다 큰가? (every)  → true


const numbers = [1, 2, 3, 4, 5];

numbers.map(number => {
    console.log(number * 2);
});

console.log(numbers.filter(number => number > 2));
console.log(numbers.reduce((sum, x) => sum + x, 0));
console.log(numbers.some(x => x > 4 ));
console.log(numbers.every(x => x > 0 ));
