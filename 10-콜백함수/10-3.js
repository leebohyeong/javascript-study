function fetchData(callback) {
    console.log('데이터 요청중 ...');

    
    setTimeout(function(){
        console.log('데이터 수신 완료');
        callback('데이터 결과')
    }, 2000)
}

function processDate(data) {
    console.log('받은 데이터', data);
}

fetchData(processDate);