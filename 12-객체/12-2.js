// 1) new Object()로 빈 객체 car 만들기
const car = new Object();

// 2) 점 표기법으로 속성 추가: people "홍길동", brand "기아", model "카니발"
car.people = '홍길동';
car.brand = '기아';
car.model = '카니발';

// 3) drive 메서드 추가
//    → `나는 ${this.people}이고, 내가 타는 차는 ${this.brand} ${this.model}이야` 출력
car.drive = function() {
    console.log(`나는 ${this.people}이고, 내가 타는 차는 ${this.brand} ${this.model}이야`);
}

// 4) car.drive() 호출
car.drive();

// 5) Object.values(car), Object.keys(car) 출력해서 비교하기
console.log(Object.values(car))
console.log(Object.keys(car))

