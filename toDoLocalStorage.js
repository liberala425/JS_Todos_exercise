const todoform = document.querySelector("#todoform");
const todoList = document.querySelector('#results');
const todoInput = document.querySelector('input[name="todo"]');
const currenTodDoList = JSON.parse(localStorage.getItem("todo")) || [];

if(currenTodDoList.length !== 0){
    for(let i=0; i<currenTodDoList.length; i++){
        const toDoItem = document.createElement("li");
        const ToDoText = document.createElement('span');
        ToDoText.innerText = currenTodDoList[i].val;
        toDoItem.classList.add('todo');
        toDoItem.append(ToDoText);
        if (currenTodDoList[i].Completed){
            toDoItem.classList.add('completed');
        } else{
            const completeBtn = document.createElement('button');
            completeBtn.innerText = 'Complete';
            toDoItem.append(completeBtn);
        }

        const removeBtn = document.createElement('button');
        removeBtn.innerText = 'Remove';
        
        
        toDoItem.append(removeBtn)
        todoList.append(toDoItem);
    }
}
todoform.addEventListener('submit', function(e){
    e.preventDefault();

    const newToDo = document.createElement('li');
    const newToDoText = document.createElement('span');
    newToDoText.innerText = todoInput.value;
    newToDo.classList.add('todo');
    todoInput.value = '';
    newToDo.Completed = false;
    currenTodDoList.push({val:newToDoText.innerText, Completed: false});
    localStorage.setItem("todo", JSON.stringify(currenTodDoList));
    const completeBtn = document.createElement('button');
    completeBtn.innerText = 'Complete';

    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    newToDo.append(newToDoText);
    newToDo.append(completeBtn);
    newToDo.append(removeBtn)
    todoList.append(newToDo);

})

todoList.addEventListener('click', function(e){
    const parsedList = JSON.parse(localStorage.todo);
    if(e.target.tagName === 'BUTTON'){
        if(e.target.innerText === 'Complete') {
            e.target.parentElement.classList.add('completed');
            
            e.target.Completed = true;
            for(let i=0; i<parsedList.length; i++){
                if(e.target.parentElement.firstChild.innerText == parsedList[i]['val']){
                    parsedList[i]['Completed'] = true;
                }
            }
            e.target.remove(); //remove the "Complete button"
        } else if (e.target.innerText === 'Remove') {
            console.log(e.target.parentElement);
            for(let i=0; i<parsedList.length; i++){  
                if(e.target.parentElement.firstChild.innerText == parsedList[i]['val']){
                    parsedList.splice(i, 1);
                    //console.log(parsedList);
                    e.target.parentElement.remove();
                }
            }
        }
    localStorage.removeItem('todo');
    localStorage.setItem("todo", JSON.stringify(parsedList));
    }
})

