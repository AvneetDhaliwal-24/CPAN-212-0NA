//server file

import express from "express";
import dotenv from "dotenv";


dotenv.config();

const app = express(); //

//CRUD -> server is set up to do these things

//methods -> GET(READ), POST(CREATE), PUT(UPDATE), DELETE

app.get("/", (req, res) => {
    // res.sendFile
    // res.download

    res.send("Welcome to the server - GET")
}); //equivalent to writing if(http.url === "/")

app.post("/", (req, res) => {
    res.send("Welcome to the server -- POST");
});

app.put("/", (req, res) => {
    res.send("Welcome to the server -- PUT")
});

app.delete("/", (req, res) => {
    res.send("Welcome to the server - DELETE")
});

// /search <- endpoint
app.get("/search", (req, res) => {
    console.log(req.url);
    console.log(req.headers);
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);
    // console.log(req.url);
    res.send("You came to the search route");
});



// /search <- endpoint
app.get("/item/:itemID/:otherID", (req, res) => {
    console.log(req.url);
    console.log(req.headers);
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);
    // console.log(req.url);
    res.send("You came to the item route");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
    // console.log(`http://12.0.0.1:${PORT}`)
});