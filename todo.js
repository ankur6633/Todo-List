//Selectors
const todoInput =document.querySelector(".todo-input");
const todoButton =document.querySelector(".todo-button");
const todoList =document.querySelector(".todo-list");



//Event Listeners
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);


//Functions
function addTodo(e){
    e.preventDefault();

    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create li
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todoInput.value;

    todoDiv.appendChild(newTodo);

    //Check Mark Button
    const completedButton = document.createElement("button");
    completedButton.classList.add("complete-btn");
    completedButton.innerText = "mark";

    todoDiv.appendChild(completedButton);

    //Check Trash Button
    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.innerText = "trash";

    todoDiv.appendChild(trashButton);

    //APPEND  to the List
    todoList.appendChild(todoDiv);

    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;

    if(item.classList[0]==="trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        // todo.remove();

        todo.addEventListener("transitionend",function(){
            todo.remove();
        });
    }



    //CHECK MARK
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }


}


