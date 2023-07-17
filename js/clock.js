/* clock */

const clockBox = document.querySelector(".clock-box p");

function onClock() {
    const date = new Date();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    clockBox.innerText = `${hours} : ${minutes}`;
}

onClock();

setInterval(onClock, 1000);