 const s3name = sessionStorage.getItem('s3name'); 
 var currentdate = new Date(); 
 var datetime = "Last Sync: " + currentdate.getFullYear() 
                + ("0" + (currentdate.getMonth() + 1)).slice(-2)
                + ("0" + currentdate.getDate()).slice(-2)   
                + currentdate.getHours() 
                + currentdate.getMinutes();
 document.getElementById('output').innerHTML = datetime+s3name;
