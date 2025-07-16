const API_ENDPOINT = 'https://wbleu2ozz7.execute-api.ap-northeast-1.amazonaws.com/default/callmygraph';
const response = fetch(API_ENDPOINT, {
            method: 'GET', // 指定 HTTP 方法
            headers: {'Content-Type': 'application/json'}
        });

alert(response);
       
const s3name = sessionStorage.getItem('s3name'); 
var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getFullYear() 
                + ("0" + (currentdate.getMonth() + 1)).slice(-2)
                + ("0" + currentdate.getDate()).slice(-2)   
                + currentdate.getHours() 
                + currentdate.getMinutes();
document.getElementById('output').innerHTML = datetime;
