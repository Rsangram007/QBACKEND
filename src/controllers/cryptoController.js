const axios = require('axios');
const Crypto = require('../models/Crypto');

// Fetch top 10 cryptocurrencies and store them in the database
exports.fetchCryptoData = async (req, res) => {
    try {
        const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
        const data = Object.values(response.data);

        // Clear existing data
        await Crypto.destroy({ where: {}, truncate: true });

        // Store top 10 results in the database
        for (let item of data) {
            await Crypto.create({
                name: item.name,
                last: item.last,
                buy: item.buy,
                sell: item.sell,
                volume: item.volume,
                base_unit: item.base_unit
            });
        }

        res.json({
            message: 'Data fetched and stored successfully',
            data: data
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
};

// Get stored cryptocurrency data from the database
exports.getCryptoData = async (req, res) => {
    try {
        const cryptos = await Crypto.findAll();
        res.json(cryptos);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data from the database');
    }
};
