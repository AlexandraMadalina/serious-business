window.onload = changeStatus();

function changeStatus() {

  var currentDate = new Date();

  var open = document.getElementById("table").rows[currentDate.getDay() + 1].cells[2].innerHTML;
  var close = document.getElementById("table").rows[currentDate.getDay() + 1].cells[4].innerHTML;

  var timeNow = currentDate.getHours() + ":" + currentDate.getMinutes();


  if (open <= timeNow && timeNow < close) {
    document.getElementById("status").innerHTML = "Open";
  } else {
    document.getElementById("status").innerHTML = "Close";
  }


}



function closeEarly() {

  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = twoDigits(m);

  var close = document.getElementById("table").rows[today.getDay() + 1].cells[4];
close.style.backgroundColor = "rgba(52, 58, 64, 0.5)"

  document.getElementById("table").rows[today.getDay() + 1].cells[4].innerHTML = h + ":" + m;
}

function twoDigits(i) {
  if (i < 10) {
    i = "0" + i
  };
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = twoDigits(m);
  s = twoDigits(s);
  document.getElementById("clock").innerHTML =
    h + ":" + m + ":" + s;

}

setInterval(startTime, 500);