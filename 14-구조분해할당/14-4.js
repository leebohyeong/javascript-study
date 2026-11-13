// 1) 상수 student 만들기
//    → name: "Tom", grades: { math: 90, science: 85 }
const student = {
    name: "Tom",
    grades: { math: 90, science: 85 }
}


// 2) 구조 분해로 name과, grades 안의 math, science 꺼내기
//    → grades: { math, science } 모양
const {name, grades, grades:{math, science}} = student;



// 3) name, math, science 출력 → "Tom" / 90 / 85

console.log(name);
console.log(grades);
console.log(math);
console.log(science);