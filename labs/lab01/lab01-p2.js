/*
home page -> fetch command
about us
contact
login
register
details
search page
*/

import http from "http";
import fs from "fs";
import path from "path";

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

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});