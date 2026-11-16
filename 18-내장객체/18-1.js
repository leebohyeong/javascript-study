// 1. 현재 날짜·시간을 now에 저장하고 출력
// 2. 연도 출력
// 3. 월 출력 (0부터 시작하므로 +1)
// 4. 일 출력
// 5. 시 출력
// 6. 분 출력
// 7. 초 출력

const now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());


const myDate = new Date('2026-12-25');
console.log(myDate);
console.log(myDate.toDateString());


// 1. 오늘 날짜를 futureDate에 저장
// 2. 일(getDate)에 7을 더해서 다시 설정 (setDate)

// 3. 일주일 뒤 날짜 출력
let futureDate = new Date();
futureDate.setDate(futureDate.getDate()+7);

console.log(futureDate);