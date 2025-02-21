const button = document.getElementById("calculate");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const result = document.querySelector(".result");
button.addEventListener("click", () => {
  if (!weight.value || !height.value) {
    result.innerHTML = "00.00";
    alert("Please enter both weight and height");
  }
  const heightValue = parseFloat(height.value);
  const weightValue = parseFloat(weight.value);
  const heightInMeters = heightValue / 100;
  const bmi = weightValue / (heightInMeters * heightInMeters);
  result.innerHTML = `${bmi.toFixed(1)} ${getBMICategory(bmi)}`;
});

function getBMICategory(bmi) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal weight";
  if (bmi < 30) return "Overweight";
  return "Obese";
}
