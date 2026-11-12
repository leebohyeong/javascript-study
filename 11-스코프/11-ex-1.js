// 1) 전역 변수 globalMessage 선언 ("Hello Global")

const globalMessage = 'Hello Global';

// 2) 함수 displayMessage 선언
//    → 지역 변수 localMessage 선언 ("Hello Local!")
//    → globalMessage, localMessage 출력

function displayMessage() {
    const localMessage = 'Hello Local!';

    console.log(globalMessage);
    console.log(localMessage);
}

// 3) displayMessage() 호출
displayMessage();

// 4) 함수 밖에서 globalMessage 출력 → 접근 가능
console.log(globalMessage);

// 5) 함수 밖에서 localMessage 출력해 보기 → ReferenceError 발생
console.log(localMessage);
