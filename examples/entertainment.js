const axios = require('axios');

async function getChuckNorrisJoke() {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        console.log('Chuck Norris Joke:', response.data.value);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function getRandomFact() {
    try {
        const response = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random');
        console.log('Random Fact:', response.data.text);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function getCorporateBuzzword() {
    try {
        const response = await axios.get('https://corporatebs-generator.sameerkumar.website/');
        console.log('Corporate Buzzword:', response.data.phrase);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function runAllEntertainmentAPIs() {
    console.log('=== ENTERTAINMENT API EXAMPLES ===\n');
    await getChuckNorrisJoke();
    console.log('\n---\n');
    await getRandomFact();
    console.log('\n---\n');
    await getCorporateBuzzword();
}

if (require.main === module) {
    runAllEntertainmentAPIs();
}

module.exports = { getChuckNorrisJoke, getRandomFact, getCorporateBuzzword };
