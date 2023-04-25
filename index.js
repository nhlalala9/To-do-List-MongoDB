const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");


dotenv.config();


app.use("/static", express.static("public"));

app.use(express.urlencoded({ extended: true }));


//connection to db
// mongoose.set("useFindAndModify", false);


// mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
// console.log("Connected to db!");

app.listen(3000, () => console.log("Server is running without error"));

// })

app.set("view engine", "ejs");

// GET Method

app.get('/', (req, res) => {
    res.render('todo.ejs');
});

// POST Method
app.post('/', (req, res) => {
    console.log(req.body);
});
