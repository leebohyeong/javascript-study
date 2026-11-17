const jsonStr = '{ "name": "홍길동", "age": 20 }';
const badJsonStr = '{ name: "홍길동", age: 20 }'; // 오류

function parseJson(str) {
    
    try {
        const obj = JSON.parse(str);
        console.log('이름:' , obj.name);

    } catch (error) {
        console.error('Json 파싱 실패', error.message);
    }

}

parseJson(jsonStr);
// parseJson(badJsonStr);