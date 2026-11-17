function divide(a, b) {

    try{

        if(b==0) {
            throw new Error('0으로 나눌 수 없습니다.')
        }

        console.log('결과 :', a/b);

    } catch(err) {
        console.error('에러 발생 :', err.message);
    } finally{
        console.log('연산 시도 종료');
    }

}

divide(10, 0);