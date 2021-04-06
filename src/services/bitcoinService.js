import {storageService} from './storageService'
export default {
    getRate,
    getMarketPrice,
    getConfirmedTransactions,
};

const axios = require('axios');
async function getRate(coins) {
    try {
        const res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${1}`);
        const rate = coins/res.data
        return (rate.toFixed(2));
    } catch (err) {
        throw err;
    }
}

async function getMarketPrice() {
    try {
        let marketPrice = storageService.load('MarketPrice')
        if(marketPrice) return Promise.resolve(marketPrice);
        const res = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true');
        storageService.store('MarketPrice', res.data)
        return res.data;
    } catch (err) {
        throw err;
    }
}
async function getConfirmedTransactions() {
    try {
        let getConfirmedTransactions = storageService.load('getConfirmedTransactions')
        if(getConfirmedTransactions) return Promise.resolve(getConfirmedTransactions);
        const res = await axios.get('https://api.blockchain.info/charts/transactions-per-second?timespan=5weeks&rollingAverage=8hours&format=json&cors=true');
        storageService.store('getConfirmedTransactions', res.data)
        return res.data;

    } catch (err) {
        throw err;
    }

}
