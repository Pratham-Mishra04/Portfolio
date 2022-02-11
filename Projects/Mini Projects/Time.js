
function checkmonth(num){
    main=["January","February","March","April","March","May","June","July","August","September","October","November","December"];
    return main[num];
}

function checkday(num){
    main=["Sunday","Monday","Tueday","Wednesday","Thursday","Friday","Saturday"];
    return main[num];       
}

function set(){
    var total=new Date();
    var seconds=total.getSeconds();
    var minutes=total.getMinutes();
    var hours=total.getHours();
    var month=total.getMonth();
    var day=total.getDay();
    var year=total.getFullYear();
    var date=total.getDate();
    var etime=document.querySelector("#time");
    var eday=document.querySelector("#day"); 
    var totaltime= hours.toString()+":"+minutes.toString()+":"+seconds.toString();
    var totalday= checkday(day)+", "+checkmonth(month)+" "+date.toString()+", "+year.toString();
    etime.textContent="Current Time is "+totaltime;
    eday.textContent="on "+totalday;
}

setInterval(set,1000);
