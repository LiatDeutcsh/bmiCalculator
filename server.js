const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/main.html");
    console.log(__dirname);
});

app.post("/", function(req, res) {
    const weight = Number(req.body.weight);
    const height = Number(req.body.height);
    const bmi = Math.floor((weight / (height * height)) * 10000);

    res.send("Your bmi is: " + bmi);
});

app.listen(3000, function() {
    console.log("server started on port 3000");
});