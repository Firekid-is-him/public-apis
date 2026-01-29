const axios = require('axios');

async function getBitcoinPrice() {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        console.log('Bitcoin Price:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function getAllCryptos() {
    try {
        const response = await axios.get('https://api.coinlore.net/api/tickers/');
        console.log('Top Cryptocurrencies:', response.data.data.slice(0, 5));
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function getCoinCapAssets() {
    try {
        const response = await axios.get('https://api.coincap.io/v2/assets?limit=5');
        console.log('CoinCap Assets:', response.data.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function getBitcoinFees() {
    try {
        const response = await axios.get('https://mempool.space/api/v1/fees/recommended');
        console.log('Bitcoin Network Fees:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

async function runAllCryptoAPIs() {
    console.log('=== CRYPTOCURRENCY API EXAMPLES ===\n');
    await getBitcoinPrice();
    console.log('\n---\n');
    await getAllCryptos();
    console.log('\n---\n');
    await getCoinCapAssets();
    console.log('\n---\n');
    await getBitcoinFees();
}

if (require.main === module) {
    runAllCryptoAPIs();
}

module.exports = { getBitcoinPrice, getAllCryptos, getCoinCapAssets, getBitcoinFees };
