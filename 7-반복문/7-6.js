// 1) for문: i를 0부터 9까지 반복
// 2) i가 5이면 break로 반복문 중단
// 3) i 출력
// 출력: 0, 1, 2, 3, 4


for(let i = 0; i < 10; i++) {
    if(i == 5) {
        // break;
        continue;
    }
    console.log(i);
}