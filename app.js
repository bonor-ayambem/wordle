const fs = require("fs");

const express = require("express");
const path = require("path");

// var Canvas = require("canvas");
// global.Image = Canvas.Image;

let app = express();

let publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

let words = fs.readFileSync('words.csv').toString().split("\n");

app.get("/load", (req, res) => {
    const ansIndex = Math.floor(Math.random() * (652)) + 1;
    let answer = words[ansIndex];
    res.send(answer);
})

app.get("/addWord", (req, res) => {
    res.send(req.query.newWord);
})

app.get("/resetStats", (req, res) => {
    res.send();
})

app.listen(3000, () => console.log("Starting up Wordle Client"));