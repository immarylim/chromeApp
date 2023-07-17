/* today's todoList */

const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-form input");
const todoList = document.querySelector(".todo-list");

let todoArray = [];
const TODO_KEY = "todo";

function onSaveTodo() {
    localStorage.setItem(TODO_KEY, JSON.stringify(todoArray));
}

function onDeleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();

    todoArray = todoArray.filter((toDo) => 
        toDo.id !== parseInt(li.id)
    );

    console.log(todoArray);

    onSaveTodo();
}

function onPaintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.id = newTodo.id;
    li.appendChild(span);
    li.appendChild(button);

    span.innerText = `${newTodo.text}`;
    button.innerText = `X`

    todoList.appendChild(li);

    button.addEventListener("click", onDeleteTodo);
}

function onTodoSubmit(event) {
    event.preventDefault();

    const todo = todoInput.value;
    todoInput.value = null;

    const newTodo = {
        text: todo,
        id: Date.now()
    }

    todoArray.push(newTodo);
    onSaveTodo();

    onPaintTodo(newTodo);
}

todoForm.addEventListener("submit", onTodoSubmit);

const savedTodo = localStorage.getItem(TODO_KEY);

if(savedTodo !== null) {
    const parsedTodo = JSON.parse(savedTodo);

    parsedTodo.forEach((item) => {
        todoArray.push(item);
        onPaintTodo(item);
    });
}