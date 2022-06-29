const express = require("express")
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet")
const morgan = require("morgan")
const todoRoute = require("./routes/todoRoutes")
const {json} = require("express");

const app = express();

app.use(json());

dotenv.config();

mongoose.connect(process.env.MONGO_URL,
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => {
        console.log("Connected to MongoDB")
    });


app.use("/", todoRoute)

app.get("/", (req, res) => {
    res.send("Todo created")
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})