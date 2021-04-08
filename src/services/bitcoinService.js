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
        const rate = (coins/res.data).toLocaleString('en-US',{style:'currency', currency:'USD'})
        return(rate)
    } catch (err) {
        throw err;
    }
}

async function getMarketPrice() {
    try {
        let marketPrice = storageService.load('MarketPrice')
        if(marketPrice) return Promise.resolve(marketPrice);
        const res = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true');
        marketPrice = res.data.values.map(({x,y})=> {return {x:(new Date(x*1000).toLocaleDateString(['ban', 'id'])), y:y.toFixed(2)}})
        storageService.store('MarketPrice', marketPrice)

        return marketPrice;
    } catch (err) {
        throw err;
    }
}
async function getConfirmedTransactions() {
    try {
        let confirmedTransactions = storageService.load('getConfirmedTransactions')
        if(confirmedTransactions) return Promise.resolve(confirmedTransactions);
        const res = await axios.get('https://api.blockchain.info/charts/transactions-per-second?timespan=5weeks&rollingAverage=8hours&format=json&cors=true');
        confirmedTransactions = res.data.values.map(({x,y})=> {return {x:(new Date(x*1000).toLocaleDateString(['ban', 'id'])), y:y.toFixed(2)}})
        storageService.store('confirmedTransactions', confirmedTransactions)
        return confirmedTransactions;

    } catch (err) {
        throw err;
    }

}
