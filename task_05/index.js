document.getElementById("get-weather").addEventListener("click", getWeather);

async function getWeather() {
    const location = document.getElementById("location-input").value || 'sunnyvale'; // Default location if no input
    const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${location}&format=json&u=f`;
    
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '0c51275c82msh4fbb6bff12232ecp185344jsnadf8eb48d98c',
            'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        displayWeather(result);

    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Failed to fetch weather data. Please try again.");
    }
}

function displayWeather(data) {
    if (data && data.location && data.current_observation) {
        document.getElementById("location-name").innerText = `${data.location.city}, ${data.location.country}`;
        document.getElementById("temperature").innerText = `Temperature: ${data.current_observation.condition.temperature}°F`;
        document.getElementById("condition").innerText = `Condition: ${data.current_observation.condition.text}`;
        document.getElementById("humidity").innerText = `Humidity: ${data.current_observation.atmosphere.humidity}%`;

        document.querySelector(".weather-info").style.display = 'block';
    } else {
        alert("Weather data is not available.");
    }
}
