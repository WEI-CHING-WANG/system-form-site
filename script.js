const API_URL = 'https://c51s3uxotb.execute-api.ap-northeast-1.amazonaws.com/myDeployment/callmygraph'
fetch(API_URL)
     .then(response => response.json())
    .then(data => {
        console.log('Fetched data:', data);
        console.log('Post title:', data.title);
    })
    .catch(error => {
        console.error('Error:', error);
    });

const s3name = sessionStorage.getItem('s3name'); 
 var currentdate = new Date(); 
 var datetime = "Last Sync: " + currentdate.getFullYear() 
                + ("0" + (currentdate.getMonth() + 1)).slice(-2)
                + ("0" + currentdate.getDate()).slice(-2)   
                + currentdate.getHours() 
                + currentdate.getMinutes();
 document.getElementById('output').innerHTML = datetime+s3name;
