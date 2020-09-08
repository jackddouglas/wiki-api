const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true, useUnifiedTopology: true});

const articleSchema = {
    title: String,
    content: String
};

const Article = new mongoose.model("Article", articleSchema);

app.get("/", (req, res) => {

})

app.listen(3000, () => {
    console.log("Server started on port 3000");
})
