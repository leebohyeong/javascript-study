// 1) result1에 5 == '5' 결과, result2에 5 === '5' 결과 넣기
// 2) result1 && result2 출력하기 → false
// 3) result1 || result2 출력하기 → true
// 4) !true 출력하기 → false

let result1 = (5 == '5');
console.log(result1);

let result2 = (5 === '5');
console.log(result2);

console.log(result1 && result2);
console.log(result1 || result2);

console.log(!true);
console.log(!false);