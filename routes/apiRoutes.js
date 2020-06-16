
let db = require("../models");

module.exports = function(app){
    console.log(app);

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

        //Creates a new workout
        app.post("/api/workouts", async (req, res)=> {
            try{
                const response = await db.Workout.create({type: "workout"})
                res.json(response);
            }
            catch(err){
                console.log("error occurred creating a workout: ", err)
            }
        })

};