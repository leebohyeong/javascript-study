
const fetchData=new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('데이터 로드 완료')
    },2000)
})
console.log('데이터 요청중')

fetchData.then((message)=>{
    console.log(message);
    
})