// 전역 변수 count를 0으로 만들고, 호출할 때마다 1씩 증가시키고 현재 값을 출력하는 함수 increase()를    만드세요. 3번 호출하면 1, 2, 3이 출력되어야 합니다.
// 1) 전역 변수 count에 0 넣기
let count = 0;

// 2) 함수 increase 선언
//    → count 1 증가
//    → count 출력
function increase() {
    count++;
    return console.log(count);
}

// 3) increase()를 3번 호출 → 1, 2, 3
increase();
increase();
increase();