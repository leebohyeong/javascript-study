const login = new Promise((resolve, reject) => {
    // const success = false;
    const success = true;

    setTimeout(()=>{
        success ? resolve('로그인 성공') : reject('비밀번호 오류');
    }, 3000);
});


login.then(msg => console.log(msg))
    .catch(err => console.log('err :', err))
    .finally(() => console.log('요청 종료'));