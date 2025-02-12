# weatherApp

The weather app was created using JavaScript, HTML, and CSS. This app allows users to search for a city and get current weather information such as temperature, humidity, and wind speed.

![image](https://github.com/user-attachments/assets/f7bae286-4295-4a89-800a-f3196a7f27d3)


## Features

- Search for a city to view the weather
- Displays temperature, humidity, wind speed, and UV index
- Fetches weather data from the OpenWeatherMap API

## Prerequisites

Before running this project, make sure you have the following installed:
- **Node.js** (includes npm)
  - You can download it from [https://nodejs.org](https://nodejs.org)

You can check if you have Node.js installed by running:
```bash
node -v
npm -v
```

## Setup & Installation

### Clone the repository

Clone the repository to your local machine and navigate into the project directory:
```bash
git clone https://github.com/Mayokun-Sofowora/weatherApp.git
cd weatherApp
```

### Install dependencies

This project uses dotenv to manage environment variables (API keys). To install the required npm package, run:
```bash
npm install
```

### Set up your API key

1. Sign up for an API key from OpenWeatherMap
2. Create a `.env` file in the root of the project and add the following line:
```ini
API_KEY=your_openweathermap_api_key
```
Replace `your_openweathermap_api_key` with the key you received from OpenWeatherMap.

### Run the project

You can run the project using a local server to avoid issues with API requests.

#### Option 1: Use http-server (recommended)

If you have http-server installed globally, navigate to your project directory and run:
```bash
npm install -g http-server
```

After installation, start the server by running:
```bash
http-server
```

This will start a local server with output similar to:
```bash
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://192.168.0.10:8080
Hit CTRL-C to stop the server
```

#### Option 2: Open index.html directly

Alternatively, you can open the `index.html` file directly in your browser by double-clicking it. However, using a local server is recommended for better dynamic content handling.

### Access the app

Open your browser and navigate to:
```
http://localhost:8080
```

## How to Use

1. Open the app in your browser
2. Enter a city name in the search bar and press the search button to get weather data
3. The app will display the current temperature, humidity, wind speed, and UV index for the city

## Project Structure

- `index.html`: The main HTML file containing the structure of the app
- `style.css`: The CSS file that handles the styling of the app
- `script.js`: JavaScript file responsible for fetching weather data and handling interactions
- `.env`: Stores environment variables, such as the API key for OpenWeatherMap

## Notes

- This app uses the OpenWeatherMap API to fetch weather data. Make sure to get an API key and add it to the `.env` file
- If you want to modify the app to fetch data from another weather API, just replace the API URL and adjust the data processing in the `script.js` file

## Troubleshooting

### Error: API request failed
- Make sure you've set up your `.env` file correctly and that your API key is valid

### Weather data not displaying
- Ensure the API response contains the expected data and that the JavaScript is correctly processing it

### Key Improvements:

1. **Setup Instructions**: Added detailed steps to install dependencies, set up environment variables, and run the app.
2. **API Key Setup**: Clearly outlined how to obtain and configure the OpenWeatherMap API key.
3. **Local Server Instructions**: Recommended using `http-server` for running the app locally, but also included the option to open the HTML file directly in the browser.
4. **Notes on Troubleshooting**: Provided helpful troubleshooting tips in case the app doesn’t work as expected.
5. **Project Structure**: Included an overview of the project structure so users understand the organization of files.
