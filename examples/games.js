const axios = require('axios');

async function getRandomPokemon() {
    try {
        const randomId = Math.floor(Math.random() * 150) + 1;
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        console.log('Pokemon:', {
            name: response.data.name,
            height: response.data.height,
            weight: response.data.weight,
            types: response.data.types.map(t => t.type.name)
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function getRickAndMortyCharacter() {
    try {
        const randomId = Math.floor(Math.random() * 100) + 1;
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${randomId}`);
        console.log('Rick and Morty Character:', {
            name: response.data.name,
            status: response.data.status,
            species: response.data.species,
            origin: response.data.origin.name
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function shuffleDeck() {
    try {
        const response = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
        console.log('New Shuffled Deck:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function getXKCDComic() {
    try {
        const response = await axios.get('https://xkcd.com/info.0.json');
        console.log('Latest XKCD:', {
            title: response.data.title,
            img: response.data.img,
            alt: response.data.alt
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function runAllGameAPIs() {
    console.log('=== GAMES & COMICS API EXAMPLES ===\n');
    await getRandomPokemon();
    console.log('\n---\n');
    await getRickAndMortyCharacter();
    console.log('\n---\n');
    await shuffleDeck();
    console.log('\n---\n');
    await getXKCDComic();
}

if (require.main === module) {
    runAllGameAPIs();
}

module.exports = { getRandomPokemon, getRickAndMortyCharacter, shuffleDeck, getXKCDComic };
