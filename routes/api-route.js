// importing the workout file 
const Workout = require("../models/workout")

// GET/POST/PUT methods 
module.exports = function (app) { 

    app.get("/api/workouts", function (req,res) {  
        Workout.find()
        .then(workouts => {  
            res.json(workouts)
        })
        .catch(err => { 
            res.json(err)
        })
    });

    app.get("/api/workouts/range", function (req,res) {  
        Workout.find()
        .then(workouts => {  
            res.json(workouts)
        })
        .catch(err => { 
            res.json (err)
        })
    });

    app.put("/api/workouts/:id", ({ body,params }, res) => {   
        Workout.findByIdAndUpdate(  
         params.id,
         {$push:{ exercises:body }},
         {new: true, runValidators: true }
        )
        .then(workouts => res.json(workouts))
        .catch(err => { 
            res.json(err)
        })
    });

    app.post("/api/workouts", function (req,res) {    
        Workout.create({})
        .then(workouts => res.json(workouts))
        .catch(err => { 
            res.json(err)
        })
    });

    app.post("/api/workouts/range", function (req,res) {    
        Workout.create({})
        .then(workouts => res.json(workouts))
        .catch(err => { 
            res.json(err)
        })
    });
}
