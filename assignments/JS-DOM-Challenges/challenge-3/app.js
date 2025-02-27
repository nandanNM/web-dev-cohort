/**
 * Write your challenge solution here
 */
const inputs = document.querySelectorAll(".form-group input");
const bioInput = document.getElementById("bioInput");
const outPutsIds = ["nameDisplay", "jobDisplay", "ageDisplay", "bioDisplay"];

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    const field = document.getElementById(`${outPutsIds[index]}`);
    field.innerText = input.value || "Not provided";
  });
});
bioInput.addEventListener("input", () => {
  const field = document.getElementById(`${outPutsIds[3]}`);
  field.innerText = bioInput.value || "Not provided";
});
