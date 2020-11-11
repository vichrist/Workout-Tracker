// require mongoose dependency 
const mongoose = require('mongoose');
// create a new schema 
const Schema = mongoose.Schema;
// create a schema object with restrictions to data types 
const ExerciseSchema = new Schema({
    type: String,
    name: String,
    distance: Number,
    duration: Number,
    weight: Number,
    sets: Number,
    reps: Number
});
const Exercise = mongoose.model("Exercise", ExerciseSchema);
module.exports = Exercise;