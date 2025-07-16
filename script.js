const API_ENDPOINT = 'https://wbleu2ozz7.execute-api.ap-northeast-1.amazonaws.com/default/callmygraph';

try {
        // 使用 fetch API 呼叫 API Gateway
        // 由於我們預期是一個 GET 請求，所以不需要傳遞 body
        const response = await fetch(API_ENDPOINT, {
            method: 'POST', // 指定 HTTP 方法
            headers: {
                'Content-Type': 'application/json',
                // 如果您需要傳遞身份驗證 token (例如 Cognito ID Token)，可以在這裡添加
                // 'Authorization': `Bearer ${yourAuthToken}`
            }
        });

        // 檢查 HTTP 狀態碼
        if (!response.ok) {
            // 如果回應狀態碼不是 2xx，則拋出錯誤
            const errorData = await response.json().catch(() => ({})); // 嘗試解析錯誤訊息
            throw new Error(`HTTP 錯誤! 狀態碼: ${response.status} - ${errorData.message || response.statusText}`);
        }

        // 解析 JSON 回應
        const data = await response.json();

        console.log('Lambda 回應資料:', data);

        if (data && data.bucketNames && data.bucketNames.length > 0) {
            statusMessage.textContent = `成功找到 ${data.bucketNames.length} 個 S3 Buckets:`;
            data.bucketNames.forEach(name => {
                const listItem = document.createElement('li');
                listItem.textContent = name;
                bucketList.appendChild(listItem);
            });
        } else {
            statusMessage.textContent = '沒有找到任何 S3 Buckets，或回應格式不正確。';
            statusMessage.className = 'message error';
        }

    } catch (error) {
        console.error('呼叫 API 時發生錯誤:', error);
        statusMessage.textContent = `錯誤：無法取得 S3 Buckets 列表。詳細：${error.message || '未知錯誤。'}`;
        statusMessage.className = 'message error';
        bucketList.innerHTML = '';
    }


 //console.log('Lambda 回應資料:', data);

       
const s3name = sessionStorage.getItem('s3name'); 
var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getFullYear() 
                + ("0" + (currentdate.getMonth() + 1)).slice(-2)
                + ("0" + currentdate.getDate()).slice(-2)   
                + currentdate.getHours() 
                + currentdate.getMinutes();
document.getElementById('output').innerHTML = datetime+data;
