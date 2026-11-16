// 1. 배열 arr = [1, 2, 3, 4, 5] 만들기
// 2. 끝에 6 추가하고 반환값 출력  → 6 (추가된 후의 ‘길이’)
// 3. 끝 요소 제거하고 반환값 출력  → 6 (제거된 값)
// 4. 앞에 0 추가하고 반환값 출력  → 6 (길이)
// 5. 앞 요소 제거하고 반환값 출력  → 0

const arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr.length);

arr.pop();
console.log(arr);

arr.unshift(0);
console.log(arr);

arr.shift();
console.log(arr);