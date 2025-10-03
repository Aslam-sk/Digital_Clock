const hourEle = document.getElementById("hour");
const minutesEle = document.getElementById("minutes");
const secondsEle = document.getElementById("seconds");
const timeFormatEle = document.getElementById("time-format");

function updateClock() {
  let hour = new Date().getHours();
  let min = new Date().getMinutes();
  let second = new Date().getSeconds();
  let ampm = "AM";

  if (hour > 12) {
    hour = hour - 12;
    ampm = "PM";
  }

  hour  = hour < 10 ? "0" + hour : hour;
  min  = min < 10 ? "0" + min : min;
  second  = second < 10 ? "0" + second : second;

  hourEle.innerText = hour;
  minutesEle.innerText = min;
  secondsEle.innerText = second;
  timeFormatEle.innerText = ampm;

  setTimeout(() => {
    updateClock();
  });
}
updateClock();
