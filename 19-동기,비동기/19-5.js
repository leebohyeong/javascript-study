const fetchData = async() => {
    
    console.log('데이터 요청중');


    await new Promise((resolve) => setTimeout(resolve), 2000);

    console.log('데이터 로드 완료');
}

fetchData();