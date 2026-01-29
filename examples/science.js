const axios = require('axios');

async function getNASAApod() {
    try {
        const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
        console.log('NASA Astronomy Picture of the Day:', {
            title: response.data.title,
            date: response.data.date,
            explanation: response.data.explanation.substring(0, 150) + '...',
            url: response.data.url
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function getSpaceXLatestLaunch() {
    try {
        const response = await axios.get('https://api.spacexdata.com/v4/launches/latest');
        console.log('Latest SpaceX Launch:', {
            name: response.data.name,
            date: response.data.date_utc,
            success: response.data.success,
            details: response.data.details
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function getNumberFact(number = 42) {
    try {
        const response = await axios.get(`http://numbersapi.com/${number}`);
        console.log(`Fact about ${number}:`, response.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function getISSLocation() {
    try {
        const response = await axios.get('http://api.open-notify.org/iss-now.json');
        console.log('ISS Current Location:', {
            latitude: response.data.iss_position.latitude,
            longitude: response.data.iss_position.longitude,
            timestamp: response.data.timestamp
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function calculateMath(operation = 'simplify', expression = '2^2+2(2)') {
    try {
        const response = await axios.get(`https://newton.vercel.app/api/v2/${operation}/${encodeURIComponent(expression)}`);
        console.log('Math Result:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function runAllScienceAPIs() {
    console.log('=== SCIENCE & MATH API EXAMPLES ===\n');
    await getNASAApod();
    console.log('\n---\n');
    await getSpaceXLatestLaunch();
    console.log('\n---\n');
    await getNumberFact(42);
    console.log('\n---\n');
    await getISSLocation();
    console.log('\n---\n');
    await calculateMath('simplify', '2^2+2(2)');
}

if (require.main === module) {
    runAllScienceAPIs();
}

module.exports = { getNASAApod, getSpaceXLatestLaunch, getNumberFact, getISSLocation, calculateMath };
