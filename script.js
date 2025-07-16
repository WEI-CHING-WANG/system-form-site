 const s3name = sessionStorage.getItem('s3name'); 
 var currentdate = new Date(); 
 var datetime = "Last Sync: " + currentdate.getDate() 
                + (currentdate.getMonth()+1) 
                + currentdate.getFullYear()   
                + currentdate.getHours() 
                + currentdate.getMinutes();
 document.getElementById('output').innerHTML = datetime;
