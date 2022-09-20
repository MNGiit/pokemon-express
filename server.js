// Load Express
const express = require('express');

// Create Express app
const app = express();

// Require dotenv
require('dotenv').config(); // Per Scholas notes said to put it at top of the file, but so far no errors

// Connect Express to Mongo
const mongoose = require('mongoose');

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
// Important for Create Route
app.use(express.urlencoded({extended:false})); // Per Scholas has it on extended: true


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
    res.render('New.jsx');
})

// Create
app.post('/pokemon', (req, res)=>{
    // res.send(req.body); // test to see if it works
    pokemon.push(req.body);
    res.redirect('/pokemon');
})

// Show
app.get('/pokemon/:id', function(req, res) {
    // res.render('Show', {fruits: fruits[req.params.indexOfFruitsArray]});
    res.render('Show.jsx', {pokemon: pokemon[req.params.id]});

})

// Edit

// Delete


// Connecting with Mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

// Listen
app.listen(3000, () => {
    console.log("Listening port 3000");
})

