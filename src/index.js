const unList = document.querySelector('ul');

document.addEventListener("DOMContentLoaded", () => {
const formElement = document.getElementById('create-task-form')
formElement.addEventListener('submit', function(event) {
    event.preventDefault()
    const input = document.getElementById("new-task-description").value;
    const listElement = document.createElement('li');
    const removeButton = document.createElement('button');
    removeButton.innerHTML = "Remove"
    removeButton.className = "removeButton"
    listElement.innerHTML = input;
    unList.append(listElement);
    listElement.append(removeButton);

    event.target.reset()
    });

    unList.addEventListener('click', function(event){
      if(event.target.className === "removeButton")
      debugger;
      event.target.parentNode.remove()
    })

});
