/* clock */

const clockBox = document.querySelector(".clock-box p");

// padStart는 String일 때 사용 가능 (= 두자릿수로 만들고 싶을 때 앞에 0 추가)
function onClock() {
    const date = new Date();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    clockBox.innerText = `${hours} : ${minutes}`;
}

onClock();

// 함수를 1초마다 갱신
setInterval(onClock, 1000);