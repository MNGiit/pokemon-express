// Load Express
const express = require('express');

// Create Express app
const app = express();

// Set View Engine to jsx // Middleware
app.set('view engine', 'jsx');
// Create Engine
app.engine('jsx', require('express-react-views').createEngine());
// Will execute before the completion of the req-resCycle
// app.use((req, ers, next) => {
//     console.log('I run for all routes');
//     next();
// })
// Parses url encoded data to be used within application
// app.use(express.urlencoded({extended:false}));


// Set views
app.set('views', './views') // doesn't work without this

// Set model
const pokemon = require('./models/pokemon.js'); //NOTE: it must start with ./ if it's just a file, not an NPM package

// Root
app.get('/pokemon', function(req, res){
    // res.send('<h1>Hello Pokemon!</h1>'); // without jsx
    // res.render('Index.jsx');
    // res.send(fruits);
    res.render('Index.jsx', {pokemon: pokemon})
})

// New
app.get('/pokemon/new', function(req, res){
    res.render('New.jsx')
})

// Show
app.get('/pokemon/:id', function(req, res) {
    // res.render('Show', {fruits: fruits[req.params.indexOfFruitsArray]});
    res.render('Show.jsx', {pokemon: pokemon[req.params.id]});

})

// Listen
app.listen(3000, () => {
    console.log("Listening port 3000");
})

