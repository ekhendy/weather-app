let now = new Date();
let date = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];
let today = document.querySelector(".today");
function formatDate() {
  today.innerHTML = `${day}, ${date} ${month}, ${year}`;
}
formatDate();
let time = document.querySelector(".time");
function formatTime() {
  time.innerHTML = `${hour}:${minutes}`;
}
formatTime();

let form = document.querySelector("#city-search");
let searchInput = document.querySelector("#search-input");
let h1 = document.querySelector("h1");
function citySearch(event) {
  event.preventDefault();
  h1.innerHTML = `${searchInput.value}`;
  let apiKey = "55aafc03209b22601e8e8c1b2d96bad0";
  let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
  function showTemp(response) {
    let currentTemp = Math.round(response.data.main.temp);
    let tempHeading = document.querySelector("#temp");
    tempHeading.innerHTML = currentTemp;
  }
  axios
    .get(`${apiUrl}${searchInput.value}&units=metric&appid=${apiKey}`)
    .then(showTemp);
}

form.addEventListener("submit", citySearch);

let temp = document.querySelector("#temp");
let celsius = document.querySelector("#celsius");
function displayC(event) {
  event.preventDefault();
  temp.innerHTML = (("#temp" - 32) * 5) / 9;
}
celsius.addEventListener("click", displayC);
let fahrenheit = document.querySelector("#fahrenheit");
function displayF(event) {
  event.preventDefault();
  temp.innerHTML = ("#temp" * 9) / 5 + 32;
}
fahrenheit.addEventListener("click", displayF);
