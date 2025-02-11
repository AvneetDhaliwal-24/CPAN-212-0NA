/* Project setup: For the server
1 - new project folder
2 - open an integrated terminal
3 - run these commands:
    npm init -y
    npm i express nodemon
    (optional) -> go into package.json and add "type": "module" to enable import from 
*/

// [Please enable only ONE of these] 
import express from "express"; // if you are using type: module
// const express = require("express"); // if using common JS (Default)
import logger from "./middleware/logger.js";
import auth from "./middleware/auth.js";
//if using type = module in package.json, "./middleware/logger.js" this must have .js extension added to the file

const app = express();
const PORT = process.env.PORT || 8000;

// middlelware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//in express, we pass variable in this specific order -> (req, res, next)


// app.use(logger); // adds whatever is passed to the use method, add this to all the routes/endpoint. This is application wide so it runs everywhere


// routes
app.get("/", logger, (req, res ) => {
    res.send("Welcome to our server");
});

app.get("/about", logger, (req, res) => {
    res.send("Welcome to the about page");
});

app.get("/login",  (req, res) => {
    res.send("We have recieved your request - login");
});


app.post("/login", (req, res) => {
    res.send("We stole your informmation");
});

app.get("/fetchData", auth, (req, res) => {
    res.send("Hi Avneet, Here is your profile data");
});



app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

app.use("", (req, res) => { //catch all statement
    res.status(404).send("Page not found");
});
