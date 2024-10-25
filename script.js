let weather = {
    apiKey: "5ce1ec080c0ab5e46cec9f15b566c619",
    unsplashKey: "dIGdxm2Z6tbiE3Q2YiOQDTgvEqtnv-oAmzfPUKiIx6M",

    async fetchWeather(city) {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
            );
            if (!response.ok) throw new Error("City not found");
            const data = await response.json();
            this.displayWeather(data);
        } catch (error) {
            alert(error.message);
        }
    },
    async fetchBackground(description, location) {
        try {
            const response = await fetch(`https://api.unsplash.com/photos/random?query=${description},${location}&client_id=${this.unsplashKey}`);
            const data = await response.json();
            document.body.style.backgroundImage = `url('${data.urls.regular}')`;
        } catch (error) {
            console.error("Error fetching background image:", error.message);
            document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?weather')"; // Fallback
        }
    },
    displayWeather(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        this.fetchBackground(description, name);

        const weatherType = data.weather[0].main.toLowerCase();

        const backgroundUrls = {
            clear: "url('https://source.unsplash.com/1600x900/?sunny')",
            clouds: "url('https://source.unsplash.com/1600x900/?cloudy')",
            rain: "url('https://source.unsplash.com/1600x900/?rainy')",
            snow: "url('https://source.unsplash.com/1600x900/?snowy')",
        };

        document.body.style.backgroundImage = backgroundUrls[weatherType] || "url('https://source.unsplash.com/1600x900/?weather')";

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}.png`;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = `${temp}°C`;
        document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
        document.querySelector(".wind").innerText = `Wind speed: ${speed} km/h`;
    
        document.querySelector(".weather").classList.remove("loading");

        const timezone = data.timezone >= 0 ? `Etc/GMT-${data.timezone / 3600}` : `Etc/GMT+${-data.timezone / 3600}`;
        this.fetchTime(timezone);
    },
    async fetchTime(timezone) {
        try {
            const response = await fetch(`http://worldtimeapi.org/api/timezone/${timezone}`);
            if (!response.ok) throw new Error("Time data not available");
            const timeData = await response.json();
            const date = new Date(timeData.datetime);
            const formattedDate = date.toLocaleString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
            });
            document.querySelector(".date").innerText = formattedDate;
        } catch (error) {
            console.error("Error fetching time:", error.message);
        }
    },
    search() {
        const searchBar = document.querySelector(".search-bar");
        this.fetchWeather(searchBar.value);
        searchBar.value = ""; // Clear input after search
    }
};

document.querySelector(".search button").addEventListener("click", function () { 
    weather.search(); 
});
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        weather.search();
    }
});

// Load initial weather data
weather.fetchWeather("Gliwice");
