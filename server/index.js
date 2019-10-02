const express = require("express");
const app = express();

app.get("/api/test", (req,res) => {
    res.render("index.ejs");
}).listen(3001);

