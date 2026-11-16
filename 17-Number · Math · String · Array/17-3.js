// 1. min ~ max 사이 정수를 돌려주는 함수 getRandom(min, max) 만들기
//    (Math.random, Math.floor 사용 / max도 포함되게)

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// 2. 50 ~ 100 사이 랜덤 정수 출력

console.log(getRandom(50, 100));