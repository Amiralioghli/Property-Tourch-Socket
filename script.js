let btn = document.querySelector(".switch");
let bulbTop = document.querySelector(".bulb-top");
let bulbBottom = document.querySelector(".bulb-bottom");

let isOpen = false;

btn.addEventListener("click", function () {
  if (isOpen) {
    btn.classList.remove("on");
    bulbBottom.classList.remove("bulbOn");
    bulbTop.classList.remove("bulbOn");
  } else {
    btn.classList.add("on");
    bulbTop.classList.add("bulbOn");
    bulbBottom.classList.add("bulbOn");
  }
  isOpen = !isOpen;
});
