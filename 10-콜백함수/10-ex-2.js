function calculate(a, b, callback) {
    // 여기에 콜백을 활용하여 a와 b를 처리하는 코드를 작성하세요.
    let sum = a + b;
    callback(sum);
}

calculate(5, 3, function(result) {
    console.log("결과:", result);
});
