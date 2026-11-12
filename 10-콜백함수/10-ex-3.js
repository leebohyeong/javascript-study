function delayedMessage(callback) {
    // 2초 후에 "완료!"를 출력하는 코드를 작성하세요.
    setTimeout(function() {
        callback('완료');
    }, 2000)
}

delayedMessage(function(message) {
    console.log(message);
});
