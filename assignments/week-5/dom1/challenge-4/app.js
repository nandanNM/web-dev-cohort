const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const emptyList = document.querySelector(".empty-list");
function addTask(text) {
  if (!text) {
    alert("write some latter");
  }
  const li = document.createElement("li");
  li.classList.add("task-item");
  const span = document.createElement("span");
  span.classList.add("task-text");
  const checkBox = document.createElement("input");
  checkBox.classList.add("complete-checkbox");
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");
  checkBox.type = "checkbox";
  span.textContent = text.trim();
  li.appendChild(checkBox);
  li.appendChild(span);
  li.appendChild(deleteButton);

  return li;
}

addButton.addEventListener("click", () => {
  const value = taskInput.value;
  const liElement = addTask(value);
  taskList.appendChild(liElement);
  taskInput.value = "";
  // console.log(taskList);
  updateState();

  emptyList.style.display = "none";
});

taskList.addEventListener("click", (e) => {
  // the closest funcation also add retun the element by ther parent in this case li

  const parentElement = e.target.closest(".task-item");
  if (e.target.classList.contains("delete-button")) {
    parentElement.remove();
  }
  if (e.target.classList.contains("complete-checkbox")) {
    parentElement.classList.toggle("completed");
  }
  updateState();
});

function updateState() {
  const tasks = document.querySelectorAll("#taskList li");
  const compleTasks = document.querySelectorAll("#taskList .completed");
  // console.log(compleTasks);
  totalTasks.innerText = `Total tasks: ${tasks.length - 1}`;
  completedTasks.innerText = `Completed: ${compleTasks.length}`;
  if (taskList.children.length === 1) {
    emptyList.style.display = "block";
  }
}
