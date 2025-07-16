const API_URL = 'https://wbleu2ozz7.execute-api.ap-northeast-1.amazonaws.com/default/callmygraph';

const response = await fetch(API_URL, {
            method: 'POST', // 指定 HTTP 方法
            headers: { 'Content-Type': 'application/json'}
        });


        // 解析 JSON 回應
const data = await response.json();

 //console.log('Lambda 回應資料:', data);

       
const s3name = sessionStorage.getItem('s3name'); 
var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getFullYear() 
                + ("0" + (currentdate.getMonth() + 1)).slice(-2)
                + ("0" + currentdate.getDate()).slice(-2)   
                + currentdate.getHours() 
                + currentdate.getMinutes();
document.getElementById('output').innerHTML = datetime+data;
