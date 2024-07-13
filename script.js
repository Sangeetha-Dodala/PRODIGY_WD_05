document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const location = document.getElementById('locationInput').value;
    if (location) {
        getWeather(location);
    } else {
        alert('Please enter a location');
    }
});

function getWeather(location) {
    const apiKey = 'd83fe024ac41ef6bac6cb942ef52caf3'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                // Display the actual error message returned by the API
                alert(`Error: ${data.message}`);
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again later.');
        });
}

function displayWeather(data) {
    document.getElementById('locationName').textContent = data.name;
    document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind').textContent = `Wind Speed: ${data.wind.speed} m/s`;

    document.getElementById('weatherInfo').classList.remove('hidden');
}
