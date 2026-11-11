// 1) 상수 factorial에 이름이 calc인 함수 넣기 (매개변수 n)
//    → n이 1 이하면 1, 아니면 n * calc(n - 1) 반환 (자기 자신 호출)

const factorial = function calc(n) {
    return n <= 1 ? 1 : n * calc(n - 1)
}

// 2) factorial(5) 출력 → 120
console.log(factorial(5));

// 3) 밖에서 calc(5) 호출해 보기 → ReferenceError (밖에서는 calc 이름 사용 불가)
