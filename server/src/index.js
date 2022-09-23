/*
    ExpressJS Server File
*/

//Imports
const express = require('express');
const helmet = require('helmet'); //http security headers
const cors = require('cors') //Allow CORS
var logger = require('morgan'); //logging middleware
const os = require('os'); //Adds access to the OS
//import routers 
const APIrouter = require("./routes/APIrouter.js");
require('dotenv').config(); //Load the .env config file

//Get the info about the machine the server is running on
const MACHINE_INFO = {
	//return the computer’s operating system.
	OSname: os.type(),
	//return the operating system CPU architecture.
	CPUarchitecture: os.arch(),
	//return the hostname of the operating system.
	hostname: os.hostname(),
  	// Initial memory usage
    initialMemory: process.memoryUsage().heapUsed,
  	// Current free memory available (in bytes)
    freeMemAvailable: os.freemem(),
  	//return information about the network interfaces of the computer, such as IP and MAC address.
    networkInfo: os.networkInterfaces(),
  	//return the system uptime, in seconds.
	upTime: os.uptime(),
};

// Get the info about system directories
const DIRECTORY_INFO = {
    //return the current user’s home directory.
	homeDirectory: os.homedir(),
    //return the current working directory
    currentWorkingDirectory: process.cwd(),
    // return the directory that this file is executed in
    directoryOfThisFile: __dirname
};

//Set base url
var BASE_URL = process.env.BASE_URL || "http://localhost";

//Set cors headers and config
var corsOptions = {
    origin: "http://localhost:3000"
};

//Initialize expressJS
const app = express();
//Initialize express router
const router = express.Router();
//Set port
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

//Set mode
var MODE = process.env.NODE_ENV || "development";

//Normalize a port into a number, string, or false.
function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

function defaultPortWarning() {
	if (port === 3000) {
		return `Warning: The set port is the default port: ${port}. This may cause errors in non-local deployments.`;  
	}
	return `Success: The set port is ${port} which is not the default port.`;
}

// =================================================================

//Enable All CORS Requests
app.use(cors(corsOptions));
//Set http security headers
app.use(helmet());
//Enable logging middleware based on mode
if (MODE === "development") {
    app.use(logger('dev'));
} 
else if (MODE === "production") {
    app.use(logger('common'));
}
//For parsing application/json
app.use(express.json());
//mount the API Router
//All routes will go to URL:PORT/api 
app.use("/api", APIrouter);

// =================================================================

//Start server
app.listen(port, () => {
    console.log("============");
    console.log(`Starting server...`);
    console.log(`${defaultPortWarning()}`);
    console.log(`ExpressJS server started...`);
    console.log(`Mode: ${MODE}`);
    console.log(`Listening on "${BASE_URL}:${port}"...`);
    console.log("------------"); 
    console.log(`Use CTRL+C to stop the server...`);
});

module.exports = router;
