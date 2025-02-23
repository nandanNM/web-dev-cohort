/**
 * Write your challenge solution here
 */
const button = document.getElementById("toggleButton");
const bulb = document.getElementById("bulb");
const state = document.getElementById("status");

button.addEventListener("click", () => {
  if (bulb.classList.contains("off")) {
    bulb.classList.remove("off");
    button.innerText = "Turn Off";
    state.innerHTML = "Status: On";
  } else {
    bulb.classList.add("off");
    button.innerText = "Turn On";
    state.innerHTML = "Status: Off";
  }
});
