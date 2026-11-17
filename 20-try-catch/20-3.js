
const getUser = async(id) => {

    try {
        const resonse = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        
        if(!resonse.ok) {
            throw new Error(`요청 실패 상태코드 ${resonse.status}`)
        }

        const user = await resonse.json();
        // console.log(user);
        console.log('이름:' , user.name);

    } catch (error) {
        console.error('사용자 정보를 불러오지 못했습니다.', error.message);
    }finally {
        console.log('로딩 종료');
    }

}

getUser(1);