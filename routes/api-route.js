// require the models folder 
const db = require('../models')

// create the function and execute the routes if called on 
module.exports = (app) => {

//GET ROUTE that will find workouts and render all to the page 
    app.get("/api/workoutChoices", (req, res) => {
        db.Workout.find({}, (err, workoutChoices) => {
            if(err) {
                console.log("Error ", err);
            } else {
                res.json(workoutChoices)
            }
        });
    });
    
//PUT ROUTE that will allow user to modify a workout -- here we are restructuring 
    app.put("/api/workouts/:changeWorkout", ({ params, body }, res) => {
        db.Workout.findOneAndUpdate({ _id: params.id},
                                    {$push: {excercises:body }},
                                    { upsert: true, useFindandModify:false},
                                    changeWorkout => {
                                        res.json(changeWorkout);
                                    })
    });

// POST ROUTE that will allow user to add a workout
    app.post('/api/workout', (req,res) => {
        db.Workout.create({}).then(Workout => {
            res.json(Workout);
        });
    });
}



