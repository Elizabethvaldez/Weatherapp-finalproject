let currentTime = new Date();

console.log(currentTime.getDay());
console.log(currentTime.getMonth());
console.log(currentTime.getFullYear());
console.log(currentTime.getTime());

let h3 = document.querySelector("h3");

let date = currentTime.getDate();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
if (minutes < 10) {
  minutes = `0${currentTime.getMinutes()}`;

}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wesnesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let day = days[currentTime.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

let month = months[currentTime.getMonth()];

h3.innerHTML = `${day} ${month} ${date}, ${hours}: ${minutes}`;

function updateCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  console.log(cityInput);
  document.getElementById("h2id").innerHTML = `${cityInput.value}`;

  searchCity(cityInput.value);
}

let changeCity = document.querySelector("#city-change");
changeCity.addEventListener("submit", updateCity);

function searchCity(city) {
  let apiKey = "4fa727ee5409426a28535ff64d53a98f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(`${apiUrl}`).then(showTemperature);
}

function showTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temp");
  temperatureElement.innerHTML = `${temperature}°C`;
  let temperatureDescription = document.querySelector("#temp-description");
  temperatureDescription.innerHTML = response.data.weather[0].description;
  console.log(`${temperature}°C`);
  console.log(`${response.data.weather[0].description}`);
}

function showPosition(position) {
  let h2 = document.querySelector("#h2id");
  h2.innerHTML = `${navigator.geolocation.getCurrentPosition}`;
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}
