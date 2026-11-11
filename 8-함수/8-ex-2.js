// 숫자를 매개변수로 받아 짝수인지 홀수인지 판별하는 함수 checkEvenOdd를 작성하세요.

function checkEvenOdd(num) {
    if(num%2 == 0) {
        return '짝수입니다.'
    } else {
        return '홀수입니다.'
    }
}

console.log(checkEvenOdd(8));