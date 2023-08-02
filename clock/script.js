let digital = document.querySelector(".digital");
let s = document.querySelector(".p_s");
let m = document.querySelector(".p_m");
let h = document.querySelector(".p_h");

updateClock = () => {
  let now = new Date();
  let getSeconds = now.getSeconds();
  let getMinutes = now.getMinutes();
  let getHours = now.getHours();

  let sDeg = (360 / 60) * getSeconds - 90;
  let nDeg = (360 / 60) * getMinutes - 90;
  let hDeg = (360 / 12) * getHours - 90;
  s.style.transform = `rotate(${sDeg}deg)`;
  m.style.transform = `rotate(${nDeg}deg)`;
  h.style.transform = `rotate(${hDeg}deg)`;
  digital.innerHTML = `${fixZero(getHours)}: ${fixZero(getMinutes)}: ${fixZero(
    getSeconds
  )}`;
};

fixZero = (time) => {
  return time < 10 ? `0${time}` : time;
};
setInterval(updateClock, 1000);
