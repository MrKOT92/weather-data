
const latitude = 52.52;
const longitude = 13.41;

async function WeatherData() {
    try {
        
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        const weatherData = await response.json();

        const { temperature, windspeed } = weatherData.current_weather;

        document.querySelector('.weather-container h2').textContent = 'Weather in your location';
        document.getElementById('temperature').textContent = temperature;
        document.getElementById('wind-speed').textContent = windspeed;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

WeatherData();
