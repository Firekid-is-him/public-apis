const axios = require('axios');

async function getWeatherOpenMeteo(latitude = 52.52, longitude = 13.41) {
    try {
        const response = await axios.get(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );
        console.log('Current Weather:', {
            temperature: response.data.current_weather.temperature,
            windspeed: response.data.current_weather.windspeed,
            weathercode: response.data.current_weather.weathercode
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function get7TimerWeather(lon = 113.17, lat = 23.09) {
    try {
        const response = await axios.get(
            `http://www.7timer.info/bin/api.pl?lon=${lon}&lat=${lat}&product=astro&output=json`
        );
        console.log('7Timer Weather:', response.data.dataseries.slice(0, 3));
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function runAllWeatherAPIs() {
    console.log('=== WEATHER API EXAMPLES ===\n');
    console.log('Berlin Weather:');
    await getWeatherOpenMeteo(52.52, 13.41);
    console.log('\n---\n');
    console.log('Guangzhou Astro Weather:');
    await get7TimerWeather(113.17, 23.09);
}

if (require.main === module) {
    runAllWeatherAPIs();
}

module.exports = { getWeatherOpenMeteo, get7TimerWeather };
