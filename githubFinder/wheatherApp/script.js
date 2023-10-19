let inputvalue = document.querySelector("#cityinput");
let btn = document.querySelector("#add");
let city = document.querySelector("#cityoutput");
let desc = document.querySelector("#description");
let temp = document.querySelector("#temp");
let wind = document.querySelector("#wind");
// Get your own free OWM API key at https://www.openweathermap.org/appid - please do not re-use mine!
apik = "3045dd712ffe6e702e3245525ac7fa38";

function convertIntoCelcius(val) {
  return Math.round((val - 273.15) * 10) / 10;
}

btn.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputvalue.value +
      "&appid=" +
      apik
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let cityName = data.name;
      let description = data["weather"]["0"]["description"];
      let tempearture = data.main.temp;
      let windSpeed = data.wind.speed;
      console.log(cityName, description, tempearture, windSpeed);

      city.innerText = `City:- ${cityName}`;
      desc.innerText = `Description:${description}`;
      temp.innerText = `Temperature:${convertIntoCelcius(tempearture)} C`;
      wind.innerText = `Wind Speed:${windSpeed} Km/h`;
    });
});
