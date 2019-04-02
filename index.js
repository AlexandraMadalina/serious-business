var curentDate = new Date ();

var open = document.getElementById("table").rows[curentDate.getDay()+1].cells[2].innerHTML;
var close = document.getElementById("table").rows[curentDate.getDay()+1].cells[4].innerHTML;

var timeNow = curentDate.getHours() + ":" + curentDate.getMinutes();


if(open<=timeNow && timeNow<close){
    document.getElementById("status").innerHTML= "Open";
}else{
    document.getElementById("status").innerHTML= "Close";
}
console.log(status);