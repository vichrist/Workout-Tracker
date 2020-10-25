// require in mongoose 
const mongoose = require('mongoose');
// create a schema 
const Schema = mongoose.Schema;
// create schema object 
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ],
    totalDuration: {
        type: Number,
        default: 0
    } 
});
const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;

