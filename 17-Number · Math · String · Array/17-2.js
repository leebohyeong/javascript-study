// 1. 4.7 반올림  → 5
console.log(Math.round(4.4));

// 2. 4.7 내림  → 4
console.log(Math.floor(4.7));

// 3. 4.3 올림  → 5
console.log(Math.ceil(4.1));

// 4. -10의 절대값  → 10
console.log(Math.abs(-10));

// 5. 0 ~ 1 사이 랜덤 값 출력
console.log(Math.random());

// 6. 2의 3제곱  → 8 (= 2 ** 3)
console.log(Math.pow(2, 3));

// 7. 16의 제곱근  → 4
console.log(Math.sqrt(16));

// 8. 3, 9, 1 중 가장 큰 값  → 9
console.log(Math.max(3, 9 , 1));

// 9. 배열 [3, 9, 1]의 최댓값 (spread 사용)  → 9
console.log(Math.max(...[3, 9, 1]));
