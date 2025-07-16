 const s3name = sessionStorage.getItem('s3name'); 
 var currentdate = new Date(); 
 var datetime = "Last Sync: " + currentdate.getFullYear() 
                + (currentdate.getMonth()+1) 
                + currentdate.getDate()   
                + currentdate.getHours() 
                + currentdate.getMinutes();
 document.getElementById('output').innerHTML = datetime;
