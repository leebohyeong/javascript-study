let id = 'admin';
let pw = '1234';

if(id == 'admin' && pw == "1234") {
    console.log('로그인 성공');
} else if(id == 'admin') {
    console.log('비밀번호 오류');
} else {
    console.log('없는 아이디');
}