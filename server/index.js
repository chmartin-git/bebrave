const express = require("express");
const app = express();

app.get("/api/test", (req,res) => {
    res.render("index.ejs");
})
        .get('/:other', (req,res) => {
            res.redirect(`/${req.params.other}`);
        })
        .listen(3001);
