/* css blur effect */

const mainBlur = document.querySelector(".main");
const todoBlur = document.querySelector(".todo-form input");
const diaryBlur = document.querySelector(".diary-form textarea");

function todoMouseOver() {
    mainBlur.style.filter = "blur(10px)";
}

function todoMouseOut() {
    mainBlur.style.filter = "none";
}

todoBlur.addEventListener("focus", todoMouseOver);
todoBlur.addEventListener("blur", todoMouseOut);

diaryBlur.addEventListener("focus", todoMouseOver);
diaryBlur.addEventListener("blur", todoMouseOut);