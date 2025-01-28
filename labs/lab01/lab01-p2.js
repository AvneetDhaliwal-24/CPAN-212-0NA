/*
home page -> fetch command
about us
contact
login
register
details
search page
*/

import http from "http"; //importing http for creating server, fs for file system for retrieving or writing data to files and path for paths of files/folders  module
import fs from "fs";
import path from "path";

//creates a server and handles request for different endpoint and returns the result
const app = http.createServer((req, res) => {
    
    if(req.url === "/"){
        // console.log(req);
        res.end("WELCOME TO THE SERVER");
    }
    else if(req.url === "/about"){
        // const webpage = fs.readFileSync("./html/about.html");
        // const webpage = fs.readFileSync(path.join(__dirname, "html", "about.html"));
        const webpage = fs.readFileSync(path.join("html", "about.html"));
        res.end(webpage);
    }
    else if(req.url === "/contact"){
        res.end("Contact us page");
    }
    else if(req.url === "/login"){
        res.end("Login page");
    }
    else if(req.url === "/register"){
        res.end("Register page");
    }
    else if(req.url === "/details"){
        res.end("Details page");
    }
    else if(req.url === "/search"){
        res.end("Search page");
    }
    else{
        res.end("Page not found");
    }
});

//listens for request at port 8000 or the one pre-assigned 
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});