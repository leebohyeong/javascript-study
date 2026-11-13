// 1) 상수 original 만들기 → { name: 'Kim', info: { age: 20 } }
const original = { name: 'Kim', info: { age: 20 } };
// 2) spread로 복사해 copy 만들기
const copy = { ...original };


// 3) copy.name을 'Lee'로 바꾸기   → ⭕ 원본 영향 없음
copy.name = 'Lee';   
// 4) copy.info.age를 99로 바꾸기 → ❌ 안쪽 객체는 같은 것을 가리킴
copy.info.age = 99;     
// 5) original.info.age 출력 → 99
console.log(original.info.age); 

// 6) 안쪽까지 완전히 복사하려면 structuredClone(original) 사용
const deep = structuredClone(original);