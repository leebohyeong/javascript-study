// 상수 person 객체 만들기
//    → name: "Lizb", age: 27, hobby: "테니스", job: "FE Developer"
//    → "like cat": true (공백 포함 키는 따옴표로 감싸기)

const person = {
  name: "Lizb",
  age: 27,
  hobby: "테니스",
  job: "FE Developer",
  "like cat": true,  // 공백 포함 속성은 문자열로 접근해야 함
};

console.log(person.name);
console.log(person.age);
console.log(person.hobby);
console.log(person.job);
console.log(person['like cat']);

const property = 'age';
console.log(person[property]);


// 1) 새 속성 추가: favoriteFood → "떡볶이" (점 표기법)
// 2) 새 속성 추가: pet → "강아지" (대괄호 표기법)

// 3) 기존 속성 job을 "Educator"로 수정
// 새로운 속성 추가
person.favoriteFood = "떡볶이";
person["pet"] = "강아지";

// 기존 속성 수정
person.job = "Educator";
delete person.job;
delete person.favoriteFood;

console.log(person);


//속성 존재 여부 확인 (in 연산자)
console.log('name' in person);
console.log('city' in person);

console.log(Object.keys(person));
console.log(Object.values(person));