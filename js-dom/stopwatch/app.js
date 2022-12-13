let sec = 00,
  min = 00,
  hour = 00;

setInterval(function () {
  sec++;
  if (sec == 60) {
    min++;
    sec = 0;
  } else if (min == 60) {
    hour++;
    min = 0;
  } else if (hour == 12) {
    sec = 0;
    min = 0;
    hour = 0;
  }
  document.getElementById("time").innerHTML = `${
    hour < 10 ? "0" : ""
  }${hour}: ${min < 10 ? "0" : ""}${min}: ${sec}`;
}, 100);
