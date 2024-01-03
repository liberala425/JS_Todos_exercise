const todoform = document.querySelector("#todoform");
const ul = document.querySelector('#results');
const todoInput = document.querySelector('input[name="todo"]');

todoform.addEventListener('submit', function(e){
    e.preventDefault();

    const li = document.createElement('li');
    li.innerText = todoInput.value;
    li.classList.add('todo');
    todoInput.value = '';
    const completeBtn = document.createElement('button');
    completeBtn.innerText = 'Complete';

    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    li.append(completeBtn);
    li.append(removeBtn)
    ul.append(li);

})


ul.addEventListener('click', function(e){
    if(e.target.tagName === 'BUTTON'){
        if(e.target.innerText === 'Complete') {
            e.target.parentElement.classList.add('completed');
            e.target.remove(); //remove the "Complete button"
        } else if (e.target.innerText === 'Remove') {
            e.target.parentElement.remove();
        }
    }
})