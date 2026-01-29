const axios = require('axios');

async function getRandomDog() {
    try {
        const response = await axios.get('https://random.dog/woof.json');
        console.log('Random Dog:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function getRandomFox() {
    try {
        const response = await axios.get('https://randomfox.ca/floof/');
        console.log('Random Fox:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function getDogFact() {
    try {
        const response = await axios.get('https://dog-api.kinduff.com/api/facts');
        console.log('Dog Fact:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function getCatFact() {
    try {
        const response = await axios.get('https://catfact.ninja/fact');
        console.log('Cat Fact:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function runAllAnimalAPIs() {
    console.log('=== ANIMALS API EXAMPLES ===\n');
    await getRandomDog();
    console.log('\n---\n');
    await getRandomFox();
    console.log('\n---\n');
    await getDogFact();
    console.log('\n---\n');
    await getCatFact();
}

if (require.main === module) {
    runAllAnimalAPIs();
}

module.exports = { getRandomDog, getRandomFox, getDogFact, getCatFact };
