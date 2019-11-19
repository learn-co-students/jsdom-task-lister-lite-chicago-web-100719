
document.addEventListener("DOMContentLoaded", function() {
  const formElement = document.getElementById('create-task-form')
  let tasks = document.getElementById('tasks')

  formElement.addEventListener('submit', createNewTask)

});

function createNewTask() {
  event.preventDefault();
  let task = document.getElementById('new-task-description')
  let li = document.createElement('li')
  li.innerText = task.value
  li.innerHTML = `${task.value}`+ ` <button data-description=${task.value} onclick="destroyTask(this.parentElement)">X</button>` 
  tasks.appendChild(li)

  event.target.reset();

}

function destroyTask(element) {
  let li = element
  li.remove()
  
}


