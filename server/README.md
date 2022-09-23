# Getting Started with the server for the personal finance tracker

In the project ./server/ directory, you can run:

### `npm start`

Runs the server the default port 3003.
Open [http://localhost:3003/api](http://localhost:3003/api) to view it in your browser.

To change the port of the server change the .env file. 
See sample.env for more about this.

It is reccomended to use port 3003 so that the react client can run on port 3000. 
If both the server and client run on the same port there is going to be an error.

## Server does not work with the browser

The server has been designed to work the client, not with the browser.
You can use the program "POSTMAN" to function as an alternative client for development and testing purposes.
