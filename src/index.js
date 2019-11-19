document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById('create-task-form')
  const list = document.getElementById('tasks')

  input.addEventListener('submit', createNewTask)

});

function createNewTask() {
  event.preventDefault();
  let task = document.getElementById('new-task-description')
  let li = document.createElement('li')
  li.innerText = task.value
  li.innerHTML = `${task.value}`+ `<button data-description =${task.value} onclick= "destroyTask()" >X</button>` 
  list.appendChild(li)

  event.target.reset();

}


function destroyTask() {

let li = document.querySelector('li')
li.remove()

}