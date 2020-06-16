
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require ("path");


const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
require("./routes/apiRoutes")(app);

  //To index
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "./public/index.html"));
  });

  //To exercise
  app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/exercise.html"));
  });

  //To stats
  app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/stats.html"));
  });


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
