const express = require('express');
const router = express.Router();
const cryptoController = require('../controllers/cryptoController');

// Route to fetch data from the API and store it in the database
router.get('/fetch-data', cryptoController.fetchCryptoData);

// Route to get stored data from the database
router.get('/cryptos', cryptoController.getCryptoData);

module.exports = router;
