// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

// Define a port for the server to listen on
const port = 3000;

// Set up a basic route that responds to GET requests
app.get('/', (req, res) => {
    res.send('Hello, welcome to the Node.js server!');
});

// Another route for handling a different URL path
app.get('/about', (req, res) => {
    res.send('This is the about page!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});