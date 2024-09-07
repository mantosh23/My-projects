const inputBox = document.querySelector(".input-box");
const searchBtn = document.querySelector("#search-btn");
const weather_img = document.querySelector(".weather-img");
const temp = document.querySelector(".temp");
const description = document.querySelector(".description");
const humidity = document.querySelector("#humidity");
const wind_speed = document.querySelector("#wind-speed");
const location_not_found = document.querySelector(".location-not-found");
const weather_body = document.querySelector(".weather-body");
const container = document.querySelector(".container");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");

let tl = gsap.timeline();

function randomColor(){
  let red = Math.floor(Math.random()*255);
  let green = Math.floor(Math.random()*255);
  let blue = Math.floor(Math.random()*255);

  let color = `rgba(${red},${green},${blue},0.4)`;
  // console.log(color);
  return color;
}

setInterval(() => {
  body.style.backgroundColor = randomColor();
}, 2000);

function animate(){
  gsap.from(".temp",{
    opacity:0,
    duration:2,
  });
  gsap.from(".description",{
    opacity:0,
    duration:2,
  });

  gsap.from(".weather-body img",{
    opacity:0,
    duration:2,
  })

  gsap.from(".humidity",{
    opacity:0,
    duration:2,
    x:-5
  });

  gsap.from(".wind",{
    opacity:0,
    duration:2,
    x:5
  })
}

let str = inputBox.value.trim();

async function checkWeather(city){
  const api_key = "2106b51a6a00b3b2db331a0aa5c0d37b";
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weather_data = await fetch(url).then(res => res.json());

  // console.log(weather_data);

  
  if(weather_data.cod === '404'){
    location_not_found.style.display = "flex";
    weather_body.style.display = "none";
    overlay.style.backgroundColor = "transparent";
    console.log(weather_data.cod);
     inputBox.placeholder = "Enter your location"
    container.style.backgroundColor = "#fff";
    container.style.backgroundImage = "none";
    return weather_data.cod;
  }

  else if(weather_data.message === "Nothing to geocode"){
    inputBox.val= str;
    weather_body.style.display = "none";
    inputBox.placeholder = "Please enter your location"
    location_not_found.style.display = "none";
    overlay.style.backgroundImage = none;
  }

  inputBox.placeholder = "Enter your location"
  temp.innerHTML = `${Math.round(weather_data.main.temp-273.15)}<sup>&deg;C</sup>`;
  description.innerHTML = `${weather_data.weather[0].description}`;
  wind_speed.innerHTML = `${weather_data.wind.speed} km/h`;
  humidity.innerHTML = `${weather_data.main.humidity}`;

  weather_body.style.display = "flex";
  location_not_found.style.display = "none";
  overlay.style.backgroundColor = "#1f1f1f94";

  animate();
  body.style.color="white";

  switch(weather_data.weather[0].main){
    case 'Clouds':
      weather_img.src = "assests/cloud.png";
      container.style.backgroundImage = "url(assests/cloud-bg.avif)";
      break;
    case 'Clear':
      weather_img.src = "assests/clear.png";
      container.style.backgroundImage = "url(assests/clear-bg.jpg)";
      break;
    case 'Rain':
      weather_img.src = "assests/rain.png";   
      container.style.backgroundImage = "url(assests/rain-bg.avif)";
      break; 
    case 'Haze':
      weather_img.src = "assests/haze.png";  
      container.style.backgroundImage = "url(assests/haze-bg.avif)"; 
      break;   
    case 'Mist':
      weather_img.src = "assests/mist.png";   
      container.style.backgroundImage = "url(assests/mist-bg.avif)";
      break;   
    case 'Snow':
      weather_img.src = "assests/snow.png"; 
      container.style.backgroundImage = "url(assests/snow-bg.avif)";  
      break;   
  }
}

searchBtn.addEventListener('click',()=>{
  checkWeather(inputBox.value);
})

inputBox.addEventListener('keypress',(e)=>{
  if(e.code==='Enter'){
    checkWeather(inputBox.value);
  }
})