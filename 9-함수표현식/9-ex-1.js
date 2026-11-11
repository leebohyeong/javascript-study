// 1) 상수 diff에 함수 표현식 넣기 (매개변수 a, b)
//    → 삼항 연산자로 큰 수에서 작은 수를 뺀 값 반환

const diff = function(a, b) {
    return a > b ? a - b : b - a
}   

// 2) diff(3, 10) 호출 결과 출력하기
console.log(diff(3, 10));

// (도전) 화살표 함수 버전 diff2 만들기 (힌트: Math.abs)

const diff2 = (a, b) => Math.abs(a - b);
console.log(diff2(3, 10))