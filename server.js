const express = require("express");
const fs = require("fs");

const app = express();

const path = __dirname;

app.listen(3000);

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile("./index.html", { root: path });
});

app.get("/index.html", (req, res) => {
    res.redirect("/");
})

app.get("/new_movies/", (req, res) => {
    res.sendFile("./new_mov/index.html", {root:path});
});

app.get("/pop_franch/", (req, res) => {
    res.sendFile("./pop_franch/index.html", {root:path});
});

app.use((req, res) => {
    res.status(404).send("404 Not Found. <br> <a href=\"/\">Back to Home</a>");
});

