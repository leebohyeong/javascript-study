// 1) 배열을 상수 numbers에 넣기
const numbers = [1,2,3,4,5,6,7,8,9,10];
// 2) numbers.forEach로 값(num)을 하나씩 꺼내기


numbers.forEach(number => {
    if(number % 2 == 0) {
        console.log(number);
    }
})

// 3) if: num이 짝수면 출력
