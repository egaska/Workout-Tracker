const mongoose = require("mongoose");

const schema = mongoose.schema;

const workoutSchema = new schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Please enter an exercise type.",
      },
      name: {
        type: String,
        trim: true,
        required: "Please enter an exercise name.",
      },
      duration: {
        type: Number,
        required: "Please enter the exercise duration in minutes",
      },
      weight: {
        type: Number,
        default: 0
      },
      reps: {
        type: Number,
        default: 0
      },
      sets: {
        type: Number,
        default: 0
      },
      distance: {
        type: Number,
        default: 0
      },
    },
  ],
  totalDuration: {
    type: Number,
    default: 0,
  }
});

const workout = mongoose.model("Workout", workoutSchema);

module.exports = workout;