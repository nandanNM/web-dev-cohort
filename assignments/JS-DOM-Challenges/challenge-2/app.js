/**
 * Write your challenge solution here
 */
const text = document.getElementById("mainHeading");
const buttons = document.querySelectorAll(".color-buttons button");
console.log(buttons);
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    console.log("hi");
    if (button.id === "resetButton") {
      text.style.color = "";
    }
    text.style.color = button.innerHTML.toLowerCase();
  });
});
