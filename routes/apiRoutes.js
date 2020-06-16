let db = require("../models");

module.exports = function(app){

    //Get all workouts
    app.get("/api/workouts", (req, res) => {
        db.workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    //Add new exercise
    app.put("/api/workouts/:id", (req, res) => {

        db.workout.findOneAndUpdate(
            { _id: req.params.id },
            {
                $inc: { totalDuration: req.body.duration },
                $push: { exercises: req.body }
            },
            { new: true }).then(dbWorkout => {
                res.json(dbWorkout);
            }).catch(err => {
                res.json(err);
            });

    });


};