const addColor = document.getElementById("add-color");
const colorInput = document.getElementById("color-input");
const container = document.getElementById("button-box");
colorInput.value = "#";
const createColorButtonHandler = () => {
  return () => {
    if (!colorInput.value) {
      alert("Must provide a hex code");
      return;
    }
    const button = document.createElement("button");
    button.classList.add("color-button");
    button.innerText = "Change Color";
    button.style.backgroundColor = colorInput.value;
    container.appendChild(button);

    console.log(button);
  };
};

// Closure to handle changing the body color
const createBodyColorChangeHandler = () => {
  return (e) => {
    const body = document.querySelector("body");
    if (e.target.classList.contains("color-button")) {
      body.style.backgroundColor = e.target.style.backgroundColor;
    }
  };
};

addColor.addEventListener("click", createColorButtonHandler());
container.addEventListener("click", createBodyColorChangeHandler());
