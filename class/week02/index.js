// const server = require("http");

import http from "http";
import fs from "fs";




const app = http.createServer((req, res) => {
    if (req.url === "/"){
        let webpage = fs.readFileSync('./homepage.html');
        res.end(webpage);
    }
    else if(req.url === "/about"){
        res.end("About page");
    }
    else if(req.url === "/services"){
        res.end("Service page");
    }
    else if(req.url === "/contact"){
        res.end("Contact page");
    }
    else if(req.url === "/user/account/id"){
        res.end("My name is Avneet");
    }
    else{
        res.end("Page not found");
    }
});



const PORT = 8000;
app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`)
});

