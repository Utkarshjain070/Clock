
           
setInterval(() => {
  let a = new Date();
    let hour = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    let date = a.getDate();
    let Month = a.getMonth() + 1;
    
    let yr = a.getFullYear();
    if (sec<=9) {
        sec = "0"+sec;
    }

    document.getElementById("date").innerHTML = date + "/" + Month + "/" + yr;
    document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;
  }, 1000);
  
