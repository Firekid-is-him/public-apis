const axios = require('axios');

async function getRandomQuote() {
    try {
        const response = await axios.get('https://api.quotable.io/random');
        console.log('Random Quote:', {
            quote: response.data.content,
            author: response.data.author
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function getKanyeQuote() {
    try {
        const response = await axios.get('https://api.kanye.rest');
        console.log('Kanye Quote:', response.data.quote);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function getAdvice() {
    try {
        const response = await axios.get('https://api.adviceslip.com/advice');
        console.log('Random Advice:', response.data.slip.advice);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function getDadJoke() {
    try {
        const response = await axios.get('https://icanhazdadjoke.com/', {
            headers: { 'Accept': 'application/json' }
        });
        console.log('Dad Joke:', response.data.joke);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function runAllQuoteAPIs() {
    console.log('=== QUOTES & PERSONALITY API EXAMPLES ===\n');
    await getRandomQuote();
    console.log('\n---\n');
    await getKanyeQuote();
    console.log('\n---\n');
    await getAdvice();
    console.log('\n---\n');
    await getDadJoke();
}

if (require.main === module) {
    runAllQuoteAPIs();
}

module.exports = { getRandomQuote, getKanyeQuote, getAdvice, getDadJoke };
