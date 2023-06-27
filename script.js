let weather = {
    apiKey: "5ce1ec080c0ab5e46cec9f15b566c619",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
            .then((response) => response.json())
            .then((data) => this.displayWeather(data))
        //  .then((headers) => this.displayWeather(headers));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/weather/?" + name + "')"
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};
document.querySelector(".search button").addEventListener("click", function () { weather.search(); });
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});
weather.fetchWeather("Gliwice");
// #curl "http://worldtimeapi.org/api/timezone/Europe/Warsaw"
// {
//   "abbreviation": "CEST",
//   "client_ip": "157.158.161.91",
//   "datetime": "2022-05-30T07:47:07.934354+02:00",
//   "day_of_week": 1,
//   "day_of_year": 150,
//   "dst": true,
//   "dst_from": "2022-03-27T01:00:00+00:00",
//   "dst_offset": 3600,
//   "dst_until": "2022-10-30T01:00:00+00:00",
//   "raw_offset": 3600,
//   "timezone": "Europe/Warsaw",
//   "unixtime": 1653889627,
//   "utc_datetime": "2022-05-30T05:47:07.934354+00:00",
//   "utc_offset": "+02:00",
//   "week_number": 22
// }