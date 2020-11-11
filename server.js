// require node dependencies 
const express = require('express'); 
const mongoose = require('mongoose'); 
const logger = require('morgan');
const bodyParser = require('body-parser');

// ceate an express app 
const app = express(); 

// use middleware to handle data parsing as well as to render static files 
app.use(express.urlencoded({ extended: true})); 
app.use(express.json()); 
app.use(express.static('public')); 

// use and bring in logger 
app.use(logger("dev"));

// require the models folder 
const db = require('./models'); 

// require the routes folder 
app.use(require('./routes/api-route.js')); 
app.use(require('./routes/html-route.js')); 

// make the Mongo connection 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useUnifiedTopology: true });

// set up a port 
const PORT = process.env.PORT || 8080; 
// listen in on port 
app.listen(PORT, function  () {
    console.log('Listening on Server PORT ' + PORT);
})
