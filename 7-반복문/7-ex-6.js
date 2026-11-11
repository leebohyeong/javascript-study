//다음 배열에 포함된 과일 이름을 한 줄씩 출력하는 코드를 작성하세요.

let fruits = ["사과", "바나나", "오렌지", "포도"];
// 여기에 코드를 작성하세요.

for(let i=0; i<fruits.length; i++) {
    console.log(`${i+1}. ${fruits[i]}`)
}

for(value of fruits) {
    console.log(value)
}