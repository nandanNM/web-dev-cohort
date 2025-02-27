/**
 * Write your challenge solution here
 */
const button = document.getElementById("toggleButton");
const bulb = document.getElementById("bulb");
const state = document.getElementById("status");
const body = document.querySelector("body");

button.addEventListener("click", () => {
  if (bulb.classList.contains("off")) {
    bulb.classList.remove("off");
    body.classList.remove("dark-mode");
    button.innerText = "Turn Off";
    state.innerHTML = "Status: On";
  } else {
    bulb.classList.add("off");
    button.innerText = "Turn On";
    body.classList.add("dark-mode");
    state.innerHTML = "Status: Off";
  }
});
