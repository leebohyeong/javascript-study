let student = {
    name: '이대우',
    age: 25,
    inStudent: true
};

console.log('이름: '+ student.name);
console.log('나이: '+ student.age);
console.log('학생인가? '+ Boolean(student.inStudent));

student.age = 26;
student.city = "상봉동";

console.log(student);