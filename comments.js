// Create web server
// 1. Create web server
// 2. Add a route for the path "/"
// 3. Return the text "Hello World"
// 4. Listen on port 3000

// 1. Create web server
const express = require('express');
const app = express();
const port = 3000;

// 2. Add a route for the path "/"
// 3. Return the text "Hello World"
app.get('/', (req, res) => res.send('Hello World!'));

// 4. Listen on port 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// Run the server
// node comments.js
// Go to http://localhost:3000 in your browser
// You should see the text "Hello World"