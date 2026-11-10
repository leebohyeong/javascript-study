// 1) if (userName)으로 userName이 truthy인지 확인하기
//    → 값이 있으면 `${userName}님 환영합니다`, 빈 문자열이면 '이름을 입력하세요' 출력

let userName = '';

if(userName) {
    console.log(`${userName}님 환영합니다.`);
} else {
    console.log('이름을 입력해하세요.')
}


// 2) userName에 이름을 넣고 다시 실행해 보기

userName = '홍길동';

if(userName) {
    console.log(`${userName}님 환영합니다.`);
} else {
    console.log('이름을 입력해하세요.')
}
