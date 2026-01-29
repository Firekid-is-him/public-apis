const axios = require('axios');

async function getAllCountries() {
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        console.log('First 5 Countries:', response.data.slice(0, 5).map(c => ({
            name: c.name.common,
            capital: c.capital?.[0],
            population: c.population
        })));
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function getCountryByName(name = 'Nigeria') {
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
        const country = response.data[0];
        console.log('Country Info:', {
            name: country.name.common,
            capital: country.capital?.[0],
            population: country.population,
            region: country.region,
            currencies: Object.keys(country.currencies || {})
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function getIPInfo() {
    try {
        const response = await axios.get('https://ipapi.co/json/');
        console.log('Your IP Info:', {
            ip: response.data.ip,
            city: response.data.city,
            country: response.data.country_name,
            timezone: response.data.timezone
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function geocodeAddress(query = 'London') {
    try {
        const response = await axios.get('https://nominatim.openstreetmap.org/search', {
            params: {
                q: query,
                format: 'json',
                limit: 1
            },
            headers: {
                'User-Agent': 'FreePublicAPIs/1.0'
            }
        });
        console.log('Geocode Result:', response.data[0]);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function runAllGeocodingAPIs() {
    console.log('=== GEOCODING API EXAMPLES ===\n');
    await getCountryByName('Nigeria');
    console.log('\n---\n');
    await getIPInfo();
    console.log('\n---\n');
    await geocodeAddress('London');
}

if (require.main === module) {
    runAllGeocodingAPIs();
}

module.exports = { getAllCountries, getCountryByName, getIPInfo, geocodeAddress };
