async function getLatestS3ObjectUrl() {
    // 請替換為您的 API Gateway 調用 URL
    const apiUrl = 'YOUR_API_GATEWAY_INVOKE_URL'; // 例如: https://xxxxxx.execute-api.ap-southeast-1.amazonaws.com/prod

    try {
        const response = await fetch(apiUrl, {
            method: 'GET', // 根據您的 API Gateway 配置選擇 HTTP 方法
            headers: {
                'Content-Type': 'application/json',
                // 如果您的 API Gateway 設定了授權，這裡可能需要添加授權標頭，例如：
                // 'Authorization': 'Bearer YOUR_AUTH_TOKEN'
            },
        });

        if (!response.ok) {
            // 如果響應狀態碼不是 2xx
            const errorData = await response.json();
            throw new Error(`HTTP 錯誤! 狀態: ${response.status}, 訊息: ${errorData.message || JSON.stringify(errorData)}`);
        }

        const data = await response.json();
        console.log('從 Lambda 獲取到的最新 S3 物件資訊:', data);

        const latestObjectUrl = data.latest_object_url;
        if (latestObjectUrl) {
            console.log('最新 S3 物件的 URL:', latestObjectUrl);
            // 在這裡您可以將 URL 用於您的前端應用程式，例如：
            // document.getElementById('latestObjectImage').src = latestObjectUrl;
            return latestObjectUrl;
        } else {
            console.log('未找到最新物件 URL。');
            return null;
        }

    } catch (error) {
        console.error('調用 Lambda 函數時發生錯誤:', error);
        // 處理錯誤，例如向用戶顯示錯誤訊息
        return null;
    }
}
getLatestS3ObjectUrl();
var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getFullYear() 
                + ("0" + (currentdate.getMonth() + 1)).slice(-2)
                + ("0" + currentdate.getDate()).slice(-2)   
                + currentdate.getHours() 
                + currentdate.getMinutes();
document.getElementById('output').innerHTML = datetime+latestObjectUrl;
