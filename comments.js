//Create web server
const express = require('express');
const app = express();
const port = 3001;

//Create a route for the app
app.get('/', (req, res) => {
    res.send('Hello World')
})

//Start the web server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})