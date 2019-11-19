document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const ul = document.querySelector('#tasks');
  const formEl = document.querySelector('#create-task-form')
  formEl.addEventListener('submit', function(event){
    event.preventDefault();
    // grab input value
    const input = document.querySelector('#new-task-description');
    
    const li = document.createElement('li');
    li.innerHTML = input.value;

    const deletBtn = document.createElement('button');
    deletBtn.innerText = 'X';
    deletBtn.className = 'removeButton'
    li.append(deletBtn);

    ul.append(li);
    input.value = "";

    });

    ul.addEventListener('click', function(event) {
      if (event.target.className === 'removeButton') {
        console.log(event.target.parentNode);
        event.target.parentNode.remove();
      }
      
    })
    
});
