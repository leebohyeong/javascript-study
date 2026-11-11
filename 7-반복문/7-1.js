// 1) 변수 result에 빈 문자열 '' 넣기

let result = '';


// 2) for문: i를 0부터 9까지 1씩 증가
//    → result에 i와 ', '를 이어 붙이기

for(let i = 0; i < 10; i++) {
    result = result+i+',';
}


// 3) 반복이 끝난 뒤 result 출력하기
//0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 

console.log(result);
