var currentDate = new Date ();

var open = document.getElementById("table").rows[currentDate.getDay()+1].cells[2].innerHTML;
var close = document.getElementById("table").rows[currentDate.getDay()+1].cells[4].innerHTML;

var timeNow = currentDate.getHours() + ":" + currentDate.getMinutes();


if(open<=timeNow && timeNow<close){
    document.getElementById("status").innerHTML= "Open";
}else{
    document.getElementById("status").innerHTML= "Close";
}
console.log(status);