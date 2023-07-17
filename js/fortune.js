/* today's fortune */

const fortuneNum = document.querySelector(".fortune-num");
const fortuneColor = document.querySelector(".fortune-color");
const fortuneDir = document.querySelector(".fortune-dir");
const fortuneName = document.querySelector(".fortune-name");
const fortuneRefresh = document.querySelector(".fortune-top button");

const color = ['빨간색', '분홍색', '남색', '회색', '흰색', '파란색', '보라색'];
const direction = ['동쪽', '서쪽', '남쪽', '북쪽'];
const conso = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

function onSetFortune() {
    const fortune = localStorage.getItem("fortune");

    if(fortune == null) {
        onFortune();
    } else {
        const [random, randomColor, randomDir, randomName] = fortune.split(",");

        fortuneNum.innerText = random;
        fortuneColor.innerHTML = `<span>행운의 색상</span> ${randomColor}`;
        fortuneDir.innerHTML = `<span>행운의 방향</span> ${randomDir}`;
        fortuneName.innerHTML = `<span>행운의 이름</span> ${randomName}`;
    }

    fortuneRefresh.addEventListener("click", onRefresh);
}

function onFortune() {
    const random = Math.floor(Math.random() * 51) + 50;
    
    const randomColor = Math.floor(Math.random() * color.length);
    const randomDir = Math.floor(Math.random() * direction.length);
    const randomName = Math.floor(Math.random() * conso.length);

    fortuneNum.innerText = random;
    fortuneColor.innerHTML = `<span>행운의 색상</span> ${color[randomColor]}`;
    fortuneDir.innerHTML = `<span>행운의 방향</span> ${direction[randomDir]}`;
    fortuneName.innerHTML = `<span>행운의 이름</span> ${conso[randomName]}`;

    const randomArray = [random, color[randomColor], direction[randomDir], conso[randomName]];

    localStorage.setItem("fortune", randomArray);
}

function onRefresh() {
    localStorage.removeItem("fortune");

    onSetFortune();
}

onSetFortune();
