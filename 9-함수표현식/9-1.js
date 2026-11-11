// 1) add1(1, 2)를 먼저 출력하고, 그 아래에 함수 선언식 add1 만들기
//    → 3 ⭕ 선언식은 위에서 호출 가능

// 2) add2(1, 2)를 먼저 출력하고, 그 아래에 함수 표현식 const add2 만들기
//    → ReferenceError ❌ 표현식은 정의 전 호출 불가


console.log(add1(1, 2));  // 3 ⭕ 선언식은 위에서 호출 가능
function add1(a, b) { return a + b; }

console.log(add2(1, 2));  // ReferenceError ❌ 표현식은 정의 전 호출 불가
const add2 = function (a, b) { return a + b; };