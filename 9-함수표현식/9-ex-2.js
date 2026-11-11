// 1) 상수 checkLength에 이름이 check인 함수 넣기 (매개변수 str)
//    → str.length가 10보다 크면 '길다', 아니면 '짧다' 반환

const checkLength = function check(str) {
    return str.length > 10 ? '길다' : '짧다'
} 

console.log(checkLength('hello javascript'));



// 2) checkLength('hello'), checkLength('hello javascript') 호출 결과 출력하기