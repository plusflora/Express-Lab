//require modules
const express = require("express");
const path = require('path')

const brandsDB = require('./data/brands-db')

//creates the express app
const app = express();

//configure the app
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
//mount middleware

//mount routes
app.get('/', function(req, res) {
    res.send('<h1>Kiteboarding Brands</h1>')
})

app.get('/home', function(req, res) {
    res.render('home')
})

app.get('/brands', function(req, res) {
    const brands = brandsDB.getAll();
    res.render('brands/index', { brands }) //this is what's making the 'brands' array available. 
})

//tell the app to listen on port 3k
app.listen(3000, function() {
    console.log('listening on port 3000')
})

// this is where I've set up everything to pull from different "directories" or something to write to individual pages. Each one of the 'app.gets' is it's own page
// ie: localhost:3000/home, **/brands, and whatever else I might want to make an option. 
// the brandsDB is pulling data from the module.exports with the file path and what I've specified to be pulled. I think. 