const colors = ["Red", "Green", "Blue"];

console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors.length);

// 배열 맨 끝에 추가
colors.push("yellow");
console.log(colors);

// 배열 마지막 요소를 제거
colors.pop();
console.log(colors);

// 요소를 배열 맨 앞에 추가
colors.unshift("purple");
console.log(colors);

// 배열 첫번쨰 요소를 제거
colors.shift();
console.log(colors);

// for문
for(let i=0; i<colors.length; i++) {
    console.log(colors[i]);
}

// forEach문
colors.forEach(color => console.log(color));

// toUpperCase, toLowerCase
const upperColors = colors.map(color => color.toUpperCase());
console.log(upperColors);

colors.map(color => {
    console.log(color.toLowerCase());
})


// concat() 두 개 이상의 배열을 결합하여 새 배열을 반환합니다.
const moreColors = ["Yellow", "Pink"];
const allColors = colors.concat(moreColors);
console.log(allColors);

// slice() 배열의 일부분을 잘라서 새 배열을 반환합니다. (원본 배열은 변경되지 않음)
const slicedColors = colors.slice(1,3);
console.log(slicedColors);  

// splice() 배열의 요소를 추가하거나 삭제합니다.
// 인덱스 1에서 1개 요소 제거 후 "Black" 추가 (원본이 바뀜)
// 'Red', 'Green', 'Blue'
colors.splice(1, 1, "Black");
console.log(colors);

// find() 조건에 맞는 첫 번째 요소를 반환합니다.
const foundColor = colors.find(color => {
    return color == 'Blue'
});
console.log(foundColor);

//filter() 조건에 맞는 모든 요소를 새 배열로 반환합니다.
const longColors = colors.filter(color => {
    return color.length > 3
});
console.log(longColors);



