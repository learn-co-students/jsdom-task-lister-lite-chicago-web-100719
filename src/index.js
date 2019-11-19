document.addEventListener("DOMContentLoaded", () => {

const form = document.getElementById("create-task-form")
const list = document.getElementById("list");
  
function addToDoItem(){
  event.preventDefault()
  const newitem = document.getElementById("new-task-description")
  let task = document.createElement('li');
  let button = document.createElement('button')
  task.innerHTML = newitem.value
  button.innerHTML = "X"
  list.appendChild(task)
  task.appendChild(button)
  button.addEventListener("click", removeToDoItem)
  newitem.value = ""
}


function removeToDoItem(){
  event.target.parentElement.remove()
}


form.addEventListener("submit", addToDoItem)





});
