/* today's diary */

const diaryForm = document.querySelector(".diary-form");
const diaryInput = document.querySelector(".diary-form textarea");
const diaryCon = document.querySelector(".diary-con");
const diaryInner = document.querySelector(".diary-inner");
const deleteButton = document.querySelector(".diary-con button");

const DIARY_KEY = "diary"
const HIDDEN_KEY_VER2 = "hidden";

function onDiarySubmit(event) {
    event.preventDefault();

    const diary = diaryInput.value;
    diaryInput.value = null;

    localStorage.setItem(DIARY_KEY, diary);

    diaryForm.classList.add(HIDDEN_KEY_VER2);

    onPaintDiary(diary);
}

function onPaintDiary(diary) {
    diaryForm.classList.add(HIDDEN_KEY_VER2);
    diaryCon.classList.remove(HIDDEN_KEY_VER2);

    diaryInner.innerText = `${diary}`;

    deleteButton.addEventListener("click", onDiaryDelete);
}

function onDiaryDelete() {
    diaryCon.classList.add(HIDDEN_KEY_VER2);
    diaryForm.classList.remove(HIDDEN_KEY_VER2);

    localStorage.removeItem(DIARY_KEY);
}

const savedDiary = localStorage.getItem(DIARY_KEY);

if(savedDiary === null) {
    diaryForm.addEventListener("submit", onDiarySubmit);
} else {
    onPaintDiary(savedDiary);
}