const todoform = document.querySelector("#todoform");
const todoList = document.querySelector('#results');
const todoInput = document.querySelector('input[name="todo"]');
const currenTodDoList = JSON.parse(localStorage.getItem("todo")) || [];

if(currenTodDoList !== null){
    for(let i=0; i<currenTodDoList.length; i++){
        const toDoItem = document.createElement("li");
        toDoItem.innerText = currenTodDoList[i].toDo;
        toDoItem.classList.add('todo');
        if (currenTodDoList[i].Completed){
            toDoItem.classList.add('completed');
        }
        const completeBtn = document.createElement('button');
        completeBtn.innerText = 'Complete';

        const removeBtn = document.createElement('button');
        removeBtn.innerText = 'Remove';
        toDoItem.append(completeBtn);
        toDoItem.append(removeBtn)
        todoList.append(toDoItem);
    }
}
todoform.addEventListener('submit', function(e){
    e.preventDefault();

    const newToDo = document.createElement('li');
    newToDo.innerText = todoInput.value;
    newToDo.classList.add('todo');
    todoInput.value = '';
    newToDo.Completed = false;
    currenTodDoList.push({toDo:newToDo.innerText, Completed: false});
    localStorage.setItem("todo", JSON.stringify(currenTodDoList));
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
            e.target.Completed = true;
        } else if (e.target.innerText === 'Remove') {
            e.target.parentElement.remove();
        }
    }
})