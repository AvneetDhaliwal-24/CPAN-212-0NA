import express from "express";
import User from "../models/user.js";
import bcrypt from "bcryptjs";

const router = express.Router();

/*
    1. register
        1. Parse the information
        2. Hash the password
        3. Save


    2. login
*/

//register
router.post("/register", (req, res) => {
    const { email, password } = req.body;

    // res.json({email, password});

    //encrypt the password

    bcrypt.hash(password, 10).then((hashedPassword) => {
        let newUser = new User({ email, password: hashedPassword });
        newUser.save().then(() => {
            res.json({ message: "You're registered." });
        });
    });
});


//login - post() method due to sensitive information
router.post("/login", (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email: email }).then((userAccount) => {
        // res.json(userAccount);
        if(!userAccount){
            return res.status(400).json({message: "No account found"});
        }
        bcrypt.compare(password, userAccount.password).then((compareResults) => {
            // res.json({message: compareResults});
            if(compareResults){
                return res.json({message: "You have logged in"});
            }
        })
    }).catch((err) => {
        console.log(err);
        res.json({message: "Account not found"});
    });
})

export default router;