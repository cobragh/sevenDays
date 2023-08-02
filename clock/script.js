let digital = document.querySelector(".digital");
let s = document.querySelector(".p_s");
let m = document.querySelector(".p_m");
let h = document.querySelector(".p_h");

updateClock = () => {
  let now = new Date();
  let getSeconds = now.getSeconds();
  let getMinutes = now.getMinutes();
  let getHours = now.getHours();

  digital.innerHTML = `${getHours.toString()}: ${getMinutes.toString()}: ${getSeconds.toString()}`;
};

setInterval(updateClock, 1000);
