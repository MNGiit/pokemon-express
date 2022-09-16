// Load Express
const express = require('express');

// Create Express app
const app = express();

// Set View Engine to jsx
app.set('view engine', 'jsx');
// Create Engine
app.engine('jsx', require('express-react-views').createEngine());

// Set views
// app.set('views', './views') // didn't test

// Root
app.get('/', function(req, res){
    res.send('<h1>Hello Pokemon!</h1>'); // without jsx
    // res.render('index.jsx');
})

// Listen
app.listen(3000, () => {
    console.log("Listening port 3000");
})

