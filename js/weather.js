/* weather */

const API_KEY = "bd33b77e87a4e05afdfad68fc1b15115";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector(".weather-con-1");
        const temp = document.querySelector(".weather-con-2");
        
        const img = document.querySelector(".weather-img");
        const icon = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

        city.innerText = data.name;
        temp.innerText = `${data.main.temp}℃`;

        img.setAttribute('src', iconUrl);
    });
}

// 위치 찾을 수 없을 때 css도 수정
function onGeoError() {
    alert("위치를 찾을 수 없습니다.");
}

// geolocation API -> 사용자의 현재 위치 정보
// getCurrentPosition() -> 위도, 경도 값
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
