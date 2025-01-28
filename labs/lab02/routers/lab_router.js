/*
/name
/greeting
/add
/calculate
*/
import express from "express";

const router = express.Router();


//checking if in routes
router.get("/", (req, res) => {
    res.send("Welcome to the lab router file");
});

//name routes
router.get("/name", (req, res) => {
    res.send("Avneet Dhaliwal");
});

//greeting routes
router.get("/greeting", (req, res) => {
    res.send("Hello from Avneet Dhaliwa, Student Number: n01639589");
});

//add routes
router.get("/add/:x/:y", (req, res) => {
    // let {x, y} = req.params;
    let x = parseFloat(req.params.x);
    let y = parseFloat(req.params.y)
    res.send(`${x + y}`);
});

//calculate routes
router.get("/calculate/:a/:b/:operations", (req, res) => {
    let a = parseFloat(req.params.a);
    let b = parseFloat(req.params.b);
    //+, -, *, /
    let operation = req.params.operations;

    let result = 0;
    

    switch (operation) {
        case "+":
            result = a + b;
            break;

        case "-":
            result = a - b;
            break;

        case "*":
            result = a*b;
            break;

        case "/": //-> %2F
            if(b === 0){
                res.send("Division by zero is not possible. Please check the denominator and try again");
            }
            else{
                result = a/b;
            }
            break;

        case "**":
            result = a ** b;
            break;

        default:
            res.send("Invalid operator");
            break;
    }

    res.send(`${result}`);
});

export default router;