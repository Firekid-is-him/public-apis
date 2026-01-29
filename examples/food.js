const axios = require('axios');

async function getRandomMeal() {
    try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
        const meal = response.data.meals[0];
        console.log('Random Meal:', {
            name: meal.strMeal,
            category: meal.strCategory,
            area: meal.strArea,
            instructions: meal.strInstructions.substring(0, 100) + '...'
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function getRandomCocktail() {
    try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const drink = response.data.drinks[0];
        console.log('Random Cocktail:', {
            name: drink.strDrink,
            category: drink.strCategory,
            glass: drink.strGlass,
            instructions: drink.strInstructions
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function getAllFruits() {
    try {
        const response = await axios.get('https://www.fruityvice.com/api/fruit/all');
        console.log('First 5 Fruits:', response.data.slice(0, 5).map(f => ({
            name: f.name,
            calories: f.nutritions.calories,
            sugar: f.nutritions.sugar
        })));
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function getBeers() {
    try {
        const response = await axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=5');
        console.log('Beers:', response.data.map(b => ({
            name: b.name,
            tagline: b.tagline,
            abv: b.abv
        })));
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function runAllFoodAPIs() {
    console.log('=== FOOD & DRINK API EXAMPLES ===\n');
    await getRandomMeal();
    console.log('\n---\n');
    await getRandomCocktail();
    console.log('\n---\n');
    await getAllFruits();
    console.log('\n---\n');
    await getBeers();
}

if (require.main === module) {
    runAllFoodAPIs();
}

module.exports = { getRandomMeal, getRandomCocktail, getAllFruits, getBeers };
