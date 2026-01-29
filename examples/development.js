const axios = require('axios');

async function testHttpBin() {
    try {
        const response = await axios.get('https://httpbin.org/get', {
            params: { test: 'data' }
        });
        console.log('HTTPBin Test:', {
            url: response.data.url,
            args: response.data.args,
            headers: response.data.headers['User-Agent']
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function getPlaceholderData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=3');
        console.log('Placeholder Posts:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function getRandomActivity() {
    try {
        const response = await axios.get('https://www.boredapi.com/api/activity');
        console.log('Random Activity:', {
            activity: response.data.activity,
            type: response.data.type,
            participants: response.data.participants
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function predictGender(name = 'peter') {
    try {
        const response = await axios.get(`https://api.genderize.io?name=${name}`);
        console.log('Gender Prediction:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function predictAge(name = 'michael') {
    try {
        const response = await axios.get(`https://api.agify.io?name=${name}`);
        console.log('Age Prediction:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function predictNationality(name = 'michael') {
    try {
        const response = await axios.get(`https://api.nationalize.io?name=${name}`);
        console.log('Nationality Prediction:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function runAllDevelopmentAPIs() {
    console.log('=== DEVELOPMENT API EXAMPLES ===\n');
    await testHttpBin();
    console.log('\n---\n');
    await getPlaceholderData();
    console.log('\n---\n');
    await getRandomActivity();
    console.log('\n---\n');
    await predictGender('sarah');
    console.log('\n---\n');
    await predictAge('michael');
    console.log('\n---\n');
    await predictNationality('michael');
}

if (require.main === module) {
    runAllDevelopmentAPIs();
}

module.exports = { 
    testHttpBin, 
    getPlaceholderData, 
    getRandomActivity, 
    predictGender, 
    predictAge, 
    predictNationality 
};
