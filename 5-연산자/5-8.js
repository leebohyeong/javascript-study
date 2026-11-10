// 1) 변수 nickname에 null 넣기
// 2) nickname ?? '손님' 출력하기 → '손님' (값이 없으면 기본값)
// 3) name이 '홍길동'인 객체를 상수 user에 넣기
// 4) user.address?.city 출력하기 → undefined (오류 없이 지나감)

const nickname = null;
console.log(nickname ?? '손님');

const user = {
    name: '홍길동',
    // address: {
    //     city:'test'
    // }
};

console.log(user.address?.city);