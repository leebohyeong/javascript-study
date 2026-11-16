// 1. 10이 NaN인지 확인  → false
// 2. NaN이 NaN인지 확인  → true
// 3. 10.5가 정수인지 확인  → false
console.log(Number.isNaN(10));
console.log(Number.isNaN(NaN));
console.log(Number.isInteger(10.5));

// 1. 123.454를 소수점 2자리로  → "123.45" (문자열 반환)
// 2. 123.4545555를 전체 유효숫자 5자리로  → "123.45"
// 3. 1234567에 천 단위 쉼표 넣기  → "1,234,567" ⭐

console.log((123.456).toFixed(2));
console.log((1237.456456456).toPrecision(5));
console.log((1237456).toLocaleString());
