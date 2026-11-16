// 1. [1, 2, 3, 3, 4, 5]로 Set 만들기
// 2. 6이 있는지 확인  → false
// 3. 3 삭제
// 4. 6 추가

// 5. set 출력  → Set(5) { 1, 2, 4, 5, 6 }
// 6. 크기 출력  → 5

const set = new Set([1, 2, 3, 3]);
console.log(set.has(6));
console.log(set.delete(3));
console.log(set);
console.log(set.size);


// 7. 배열 numbers = [1, 2, 2, 3, 4, 4, 5] 만들기
const numbers = [1,2,3,4,4,5];

// 8. Set + spread로 중복 제거한 배열 uniqueNumbers 만들기
const uniqueNumbers = [...new Set(numbers)];

// 9. uniqueNumbers 출력  → [1, 2, 3, 4, 5]
console.log(uniqueNumbers);