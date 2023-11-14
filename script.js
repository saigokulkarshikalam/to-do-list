// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("tasks");
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
            <button onclick="toggleComplete(this)">Mark Complete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

// Function to delete a task
function deleteTask(button) {
    const li = button.parentElement;
    const taskList = document.getElementById("tasks");
    taskList.removeChild(li);
}

// Function to edit a task
function editTask(button) {
    const li = button.parentElement;
    const taskText = li.querySelector(".task-text").textContent;

    const taskInput = document.getElementById("taskInput");
    taskInput.value = taskText.trim();

    deleteTask(button);
}

// Function to mark a task as complete or incomplete
function toggleComplete(button) {
    const li = button.parentElement;
    const taskText = li.querySelector(".task-text");

    if (button.textContent === "Mark Complete") {
        taskText.classList.add("completed");
        button.textContent = "Mark Incomplete";
    } else {
        taskText.classList.remove("completed");
        button.textContent = "Mark Complete";
    }
}