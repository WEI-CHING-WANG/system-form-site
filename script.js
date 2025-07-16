const API_URL = 'https://c51s3uxotb.execute-api.ap-northeast-1.amazonaws.com/myDeployment/callmygraph'

const response = await fetch(API_URL, {
            method: 'GET', // 指定 HTTP 方法
            headers: {
                'Content-Type': 'application/json',
                // 如果您需要傳遞身份驗證 token (例如 Cognito ID Token)，可以在這裡添加
                // 'Authorization': `Bearer ${yourAuthToken}`
            }
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
