document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form")
  const taskInput = document.getElementById("new-task-description")
  const taskUl = document.getElementById("tasks")

  taskForm.addEventListener("submit", function(event) {
    event.preventDefault()
    const taskLi = document.createElement("li")
    taskLi.innerText = taskInput.value
    taskUl.appendChild(taskLi)
    event.target.reset()
  })
});
