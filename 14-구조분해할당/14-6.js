// ① 두 변수 값 바꾸기 (swap)
// 1) let으로 a = 1, b = 2 선언
// 2) [a, b] = [b, a] 형태로 값 바꾸기
// 3) a, b 출력 → 2 1

let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b);


// ② 함수가 여러 값을 배열로 돌려줄 때 (React useState와 같은 형태)
// 1) 함수 useCounter 선언
//    → [0, () => console.log('증가')] 반환
function useCounter() {
    return [0, () => console.log('증가')];
}

// 2) 구조 분해로 [count, increase] 받기
const [count, increase] = useCounter();
console.log(count);
increase();


// ③ 반복문에서 객체 구조 분해
// 1) 상수 users 만들기 → [{ name: 'Kim', age: 20 }, { name: 'Lee', age: 30 }]
const users = [
    { name: 'Kim', age: 20, city: 'Jeju' }, 
    { name: 'Lee', age: 30 }
]

// 2) for...of에서 const { name, age }로 꺼내며 `${name}(${age})` 출력 → Kim(20) / Lee(30)
for(const {name, age, city='Seoul'} of users) {
    console.log(`${name}, ${age}, ${city}`);
}