// dependencies 
const path = require("path");

//HTML get routes exported in the form of a function 
module.exports = function (app) { 

  app.get("/", function (req, res) {    
      res.sendFile(path.join(__dirname,"../public/index.html"));
  });
    
  app.get("/exercise", function (req, res) {   
      res.sendFile(path.join(__dirname,"../public/exercise.html"));
  });

  app.get("/stats", function (req, res) {   
      res.sendFile(path.join(__dirname,"../public/stats.html"));
  });
}; 
