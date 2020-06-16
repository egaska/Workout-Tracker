
let db = require("../models");

module.exports = function(app){
    console.log(app);

    //Get all workouts
    app.get("/api/workouts", (req, res) => {

        db.workout.find({}).then(dbWorkout => {
            dbWorkout.forEach(workout => {
                var total = 0;
                workout.exercises.forEach(e => {
                    total += e.duration;
                });
                workout.totalDuration = total;

            });

            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    });

        //Creates a new workout
        app.post("/api/workouts", ({ body }, res) => {
            db.workout.create(body).then((dbWorkout => {
                res.json(dbWorkout);
            })).catch(err => {
                res.json(err);
            });
        });

        //Add exercise
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
    
    
        //Gets the workouts in a range of time
        app.get("/api/workouts/range", (req, res) => {

            db.workout.find({}).then(dbWorkout => {
                console.log("ALL WORKOUTS");
                console.log(dbWorkout);
    
                res.json(dbWorkout);
            }).catch(err => {
                res.json(err);
            });
    
        });
};