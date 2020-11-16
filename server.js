// pulling in dependencies 
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// created express app 
const app = express();

// setting up port 
const PORT = process.env.PORT || 8080;

// bringing in middleware 
app.use(morgan("dev"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

// creating Mongoose connection 
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/Fitness-Tracker',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
// access to routes 
require("./routes/api-route")(app);
require("./routes/html-route")(app);

// setting up port to listen 
app.listen(PORT,function(){ 
    console.log(`Lstening on Port ${PORT}`);
});