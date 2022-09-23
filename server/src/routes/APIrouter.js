const express = require('express');

// Create the api router.
// The base URL for this router is URL:PORT/api/
const APIrouter = express.Router();

APIrouter.get('/', (req, res, next) => {
    res.status(200).send({ message: "<h1>HELLO WORLD</h1>"});
});

module.exports = APIrouter;
