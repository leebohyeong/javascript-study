// 변수 `num1`에 저장된 숫자의 구구단을 출력하세요.
// 예를 들어, `num1`이 `3`일 경우, 3단을 출력합니다.

let num1 = 3;
let result = 0;

for(let i = 1; i <= 9; i++) {
    result = num1 * i;
    console.log(`${num1} x ${i} = ${result}`);
}



