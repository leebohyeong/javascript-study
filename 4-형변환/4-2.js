// 1) Number()로 문자열 '123'을 숫자로 바꾸고 typeof로 확인하기
const str1 = '5';
console.log(Number(str1))
console.log(typeof Number(str1))


// 2) String()으로 숫자 123을 문자열로 바꾸고 typeof로 확인하기
const num1 = 123;
console.log(String(num1))
console.log(typeof  String(num1))

// 3) Boolean()으로 1, 0, '' 을 true/false로 바꿔 출력하기
const bool1 = 0;
const bool2 = 1;
console.log(Boolean(bool1));
console.log(Boolean(bool2));

// 4) parseInt('12px'), parseFloat('3.14m') 출력해 보기 → 앞의 숫자만 읽음
const str2 = '12px';
const str3 = '3.14m';
console.log(parseInt(str2));
console.log(parseInt(str3));
console.log(parseFloat(str3));