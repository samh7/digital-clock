const main = document.querySelector(".main");
const hoursDiv1 = document.querySelector(".hours-1");
const hoursDiv2 = document.querySelector(".hours-2");
const minutesDiv1 = document.querySelector(".minutes-1");
const minutesDiv2 = document.querySelector(".minutes-2");

const secondsDiv1 = document.querySelector(".seconds-1");
const secondsDiv2 = document.querySelector(".seconds-2");

window.addEventListener("load", function () {
  let currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const [firstHour, lastHour] = splitInteger(hours);
  const [firstMinute, lastMinute] = splitInteger(minutes);
  const [firstSecond, lastSecond] = splitInteger(seconds);

  hoursDiv1.innerHTML = `${firstHour}`;
  hoursDiv2.innerHTML = `${lastHour}`;

  minutesDiv1.innerHTML = `${firstMinute}`;
  minutesDiv2.innerHTML = `${lastMinute}`;

  secondsDiv1.innerHTML = `${firstSecond}`;
  secondsDiv2.innerHTML = `${lastSecond}`;
});
function updateTime() {
  let currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const [firstHour, lastHour] = splitInteger(hours);
  const [firstMinute, lastMinute] = splitInteger(seconds);
  const [firstSecond, lastSecond] = splitInteger(minutes);

  updateTimeDiv(
    minutesDiv1,
    minutesDiv2,
    Number(firstSecond),
    Number(lastSecond)
  );

    updateTimeDiv(hoursDiv1, hoursDiv2, Number(firstHour), Number(lastHour));
  //   updateTime(secondsDiv1, secondsDiv2, Number(firstSecond), Number(lastSecond));
  //   updateTime(secondsDiv1, secondsDiv2, Number(firstSecond), Number(lastSecond));
  updateTimeDiv(
    secondsDiv1,
    secondsDiv2,
    Number(firstMinute),
    Number(lastMinute)
  );
}
console.log(splitInteger(3));

function updateTimeDiv(div1, div2, firstTime, lastTime) {
  if (Number(div2.innerHTML) !== lastTime) {
    console.log("siusybdia");

    console.log("siusybdia");
    if (Number(lastTime) === 0) {
      div2.classList.add("is-changing");
      window.clearTimeout();
      timeout = window.setTimeout(function () {
        div2.innerHTML = `${lastTime}`;
        div2.classList.remove("is-changing");
      }, 500);

      div1.classList.add("is-changing");
      window.clearTimeout();
      timeout = window.setTimeout(function () {
        div1.innerHTML = `${firstTime}`;
        div1.classList.remove("is-changing");
      }, 500);
    } else {
      div2.classList.add("is-changing");
      window.clearTimeout();
      timeout = window.setTimeout(function () {
        div2.innerHTML = `${lastTime}`;
        div2.classList.remove("is-changing");
      }, 500);
    }
    window.clearTimeout();
  }
}
function splitInteger(num) {
  if (num < 10) return `0${num}`.split("");
  return `${num}`.split("");
}

setInterval(updateTime, 1000);
