// Load tasks on page load
document.addEventListener("DOMContentLoaded", loadTasks);

// Add new task
function addTask() {
  let taskInput = document.getElementById("taskInput");
  let task = taskInput.value.trim();

  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  addTaskToDOM(task);
  saveTask(task);

  taskInput.value = ""; // reset input
}

// Add task to UI
function addTaskToDOM(task) {
  let ul = document.getElementById("taskList");
  let li = document.createElement("li");

  li.innerHTML = `
    <span onclick="toggleComplete(this)">${task}</span>
    <button class="delete-btn" onclick="deleteTask(this)">X</button>
  `;

  ul.appendChild(li);
}

// Toggle completed task
function toggleComplete(el) {
  el.parentElement.classList.toggle("completed");
}

// Delete task
function deleteTask(btn) {
  let li = btn.parentElement;
  li.remove();
  removeTaskFromStorage(li.firstElementChild.innerText);
}

// ===== Local Storage Functions =====

function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => addTaskToDOM(task));
}

function removeTaskFromStorage(taskToRemove) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(task => task !== taskToRemove);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
