/* login */

const html = document.querySelector("html");
const body = document.querySelector("body");
const container = document.querySelector(".container");

const loginBox = document.querySelector(".login-box");
const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");

const nameBox = document.querySelector(".name-box");
const namePoint = document.querySelector(".name-point");

const todoBox = document.querySelector(".todo-box");
const fortuneBox = document.querySelector(".fortune-box");
const diaryBox = document.querySelector(".diary-box");

const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);

const HIDDEN_KEY = "hidden";
const HEIGHT_KEY = "height-key";

function onLoginSubmit(event) {
    event.preventDefault();

    const username = loginInput.value;
    loginInput.value = null;

    localStorage.setItem(USERNAME_KEY, username);

    loginBox.classList.add(HIDDEN_KEY);

    onPaintGreetings(username);
}

function onPaintGreetings(username) {
    const element = [nameBox, todoBox, fortuneBox, diaryBox];
    
    for(let i = 0; i < 4; i++) {
        element[i].classList.remove(HIDDEN_KEY);
    }

    loginBox.classList.add(HIDDEN_KEY);

    namePoint.innerText = `${username}`;

    html.classList.remove(HEIGHT_KEY);
    body.classList.remove(HEIGHT_KEY);
    container.classList.remove(HEIGHT_KEY);
}

if(savedUsername === null) {
    html.classList.add(HEIGHT_KEY);
    body.classList.add(HEIGHT_KEY);
    container.classList.add(HEIGHT_KEY);

    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    onPaintGreetings(savedUsername);
}