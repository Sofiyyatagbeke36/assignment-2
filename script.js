const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        const taskSpan = document.createElement("span");
        taskSpan.textContent = task.text;

        if (task.completed) {
            taskSpan.classList.add("completed");
        }

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "✅";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑️";

        completeBtn.addEventListener("click", function () {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
            displayTasks();
        });

        deleteBtn.addEventListener("click", function () {
            tasks.splice(index, 1);
            saveTasks();
            displayTasks();
        });

        li.appendChild(taskSpan);
        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({
        text: taskText,
        completed: false
    });

    saveTasks();
    displayTasks();

    taskInput.value = "";
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

addTaskBtn.addEventListener("click", addTask);

displayTasks();
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});