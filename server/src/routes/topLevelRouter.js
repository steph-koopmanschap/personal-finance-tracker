const express = require('express');

//Create the top level router
// The base URL for this router is URL:PORT/
const topLevelRouter = express.Router();

topLevelRouter.get('/', (req, res, next) => {
    console.log("testing /");
    res.status(200).send({ message: "<h1>SERVER WORKS!</h1>"});
});

module.exports = topLevelRouter;
