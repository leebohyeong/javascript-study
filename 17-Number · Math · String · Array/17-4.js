// 1. 7번부터 17번 앞까지 자르기 (substring)  → "JavaScript"
// 2. 뒤에서 11글자 자르기 (slice)  → "JavaScript!"
// 3. 'JavaScript'를 'World'로 바꾸기  → "Hello, World!" (대소문자 구분)
// 4. "," 기준으로 나누기  → ["Hello", " JavaScript!"]



const str = 'Hello, Javascript!'

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str);
console.log(str.includes('Java'));
console.log(str.startsWith('H'));
console.log(str.endsWith('!'));

console.log(str.substring(7, 17));
console.log(str.slice(-11));
console.log(str.replace('Javascript', 'World'));
console.log(str.split(','));

// 5. "  hi  "의 양쪽 공백 제거  → "hi"
console.log('    hi      '.trim());

// 6. "5"를 2자리로 맞추고 앞을 "0"으로 채우기  → "05"
console.log('5'.padStart(2, '0'));
