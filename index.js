const express = require("express");
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.set("view engine", "ejs");

app.listen(3000, () => console.log("Server Up and running"));