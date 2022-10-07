const express = require("express");


// module.exports = function(app) { 
//     //Error response for invalid CSRF Tokens
//     app.use((err, req, res, next) => {
//         console.log("TEST ERROR TEST");
//         if (err.code === 'EBADCSRFTOKEN') 
//         {
//             res.status(403)
//             res.send("Invalid CSRF Token!")
//         } 
//         else 
//         {
//             console.log("ERROR LOL");
//             next();
//         }
//     });
// };


