function greet(name = 'Guest') {
    return `안녕하세요, ${name}님!`
}

console.log(greet());
console.log(greet('홍길동'));