function processUserInput(callback) {
    let name = "홍길동";
    // 여기에 콜백 함수를 호출하는 코드를 작성하세요.
    callback(name)
}

processUserInput(function(name) {
    console.log("안녕하세요, " + name + "님!");
});
