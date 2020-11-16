// import dependencies 
const mongoose = require("mongoose");

// create Mongoose schema 
const Schema = mongoose.Schema;


const workoutSchema = new Schema(
    {
      day: {
        type: Date,
        default: () => new Date()
      },
      exercises: [
        {
          type: {
            type: String,
            trim: true,
            required: "Exercise type?"
          },
          name: {
            type: String,
            trim: true,
            required: "Exercise name?"
          },
          duration: {
            type: Number,
            required: "Duration in minutes?"
          },
          weight: {
            type: Number
          },
          reps: {
            type: Number
          },
          sets: {
            type: Number
          },
          distance: {
            type: Number
          }
        }
      ]
    },
    {
      toJSON: {
        virtuals: true
      }
    }
  );
  
  workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
  });
  
  
  const Workout = mongoose.model("Workout", workoutSchema);
  
  // export this workout schema 
  module.exports = Workout;
