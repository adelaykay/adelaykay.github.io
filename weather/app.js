let body = document.querySelector('body');
let cityForm = document.querySelector('form');
let userInput = document.querySelector('input');
let submit = document.querySelector('button');
let weatherIcon = document.querySelector('.weatherIcon');
let weatherBar = document.querySelector('.weatherBar');
let weatherDesc = document.querySelector('.weatherDesc');
let weatherTemp = document.querySelector('.weatherTemp');
let weatherCity = document.querySelector('.weatherCity');
let key = '7705ccf5c3d8ef75d58f7bfd6c0b99fd';
// console.log(typeof(userInput.value));

//fetch weather data
const getCurrentWeather = () => {
    let weatherData = "";
    let forecastData = "";
    // let lat = 0;
    // let lon = 0;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput.value}&appid=${key}&units=metric`)
    .then(res => res.json())
    .then(data => {
        weatherData = data;
        // console.log(forecastData);
        let lat = data.coord.lat;
        let lon = data.coord.lon;
        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=metric`)
        .then(response => response.json())
        .then(data => {
            forecastData = data;
            // console.log(forecastData);
            displayWeather(weatherData,forecastData);
        })
    });
    localStorage.setItem('locale' , userInput.value.trim());
    console.log('1');
}

//Convert day number to day of week
const getDay = (weatherTime) => {
    let a = new Date(weatherTime * 1000);
    // let day = a.getDate();
    let dayOfWeek = a.toString().slice(0, 3);
    return dayOfWeek;
}

const displayWeather = (weatherData,forecastData) => {
    //Weather Description
    weatherDesc.innerHTML = `${weatherData.weather[0].description}`;
    //Weather Icon
    weatherIcon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
    // console.log(weatherIcon.src);
    //Weather Temperature
    weatherTemp.innerHTML = `${weatherData.main.temp}&#xb0;C`;
    //Weather City
    weatherCity.innerHTML = `${weatherData.name}, ${weatherData.sys.country}`;
    //Weather Background using weather id
    let weatherId = weatherData.weather[0].id;
    // console.log(weatherId);
    if((weatherId>=200)&&(weatherId<300)){
        body.style.background = `url("images/thunder\ day.jpg") fixed center`;
    }
    else if((weatherId>=200)&&(weatherId<600)){
        body.style.background = `url("images/rainy\ day.jpg") fixed center`;
    }
    else if((weatherId>800)){
        body.style.background = `url("images/cloudy\ day.jpg") fixed center`;
    }
    //Current Weather Time
    console.log(getDay(weatherData.dt));
    //Get forecast weather
    const forecastBar = document.querySelector('.forecastBar');
    // console.log(forecastData.daily[0].weather[0].icon)
    for (let index = 1; index < 7; index++) {
        forecastBar.children[index-1].innerHTML = `<div class="col">
        <img src="http://openweathermap.org/img/wn/${forecastData.daily[index].weather[0].icon}@4x.png" alt="#" class="card-img-top" style="width: 70%">
        <p class="card-text">${getDay(forecastData.daily[index].dt)}</p>
      </div>`;
        
    }
    //Display weather information
    weatherBar.style.display = 'block';
    forecastBar.style.display = 'block';
}

// submit.addEventListener('click', getCurrentWeather);
cityForm.addEventListener('submit', e => {
    e.preventDefault();
    getCurrentWeather();
    cityForm.reset();
});

if(localStorage.getItem('locale')){
    userInput.value = localStorage.getItem('locale')
    getCurrentWeather();
    cityForm.reset();
}
