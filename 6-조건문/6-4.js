const age = 25;
const hasID = false;

// if(age >= 18) {
//     if(hasID) {
//         console.log('You are allowed to enter.');
//     } else {
//         console.log("You need an ID to enter.");
//     }
// } else {
//     console.log(`당신의 나이는 ${age}입니다. 18세 미만입니다.`)
// }

if(age >= 18 && hasID) {
    console.log('You are allowed to enter.');
    
} else {
    console.log("You need an ID to enter.");
}