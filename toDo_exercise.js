const todoform = document.querySelector("#todoform");
const todoList = document.querySelector('#results');
const todoInput = document.querySelector('input[name="todo"]');

todoform.addEventListener('submit', function(e){
    e.preventDefault();

    const newToDo = document.createElement('li');
    newToDo.innerText = todoInput.value;
    newToDo.classList.add('todo');
    todoInput.value = '';
    const completeBtn = document.createElement('button');
    completeBtn.innerText = 'Complete';

    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    newToDo.append(completeBtn);
    newToDo.append(removeBtn)
    todoList.append(newToDo);
    
})


todoList.addEventListener('click', function(e){
    if(e.target.tagName === 'BUTTON'){
        if(e.target.innerText === 'Complete') {
            e.target.parentElement.classList.add('completed');
            e.target.remove(); //remove the "Complete button"
        } else if (e.target.innerText === 'Remove') {
            e.target.parentElement.remove();
        }
    }
})