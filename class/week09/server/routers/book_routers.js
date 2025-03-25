import express from "express";
import Book from "../models/book.js";//db.books.function()

const router = express.Router();

//1, fetch all
router.get("/", (req, res) => {
    //1. fetch from db
    //2. send to client

    Book.find().then((results) => {
        res.json(results);
    });
});

//2. fetch for single product by id
router.get("/find/:id", (req, res) => {
    //1. fetch from db
    //2. send to client

    Book.findById(req.params.id).then((results) => {
        console.log
        res.json(results);
    });
});

//3. Search
router.get("/search", (req, res) => {
    //1. fetch from db
    //2. send to client

    // res.send("in search route");

    let filters = {};

    // query:
    if (req.query.title) {
        filters.title = req.query.title;
    }

    if (req.query.pages) {
        let pages = parseInt(req.query.pages);

        if (req.params.logicalOperators) {
            switch (req.params.logicalOperators) {
                case gte:
                    filters.pages = { $gte: { pages } }
                    break;

                default:
                    filters.pages = pages;
                    break;
            }
        }
        // filters.pages = pages;
    }

    Book.find(filters).then((results) => {
        res.json(results);
    })
});


//4. update
router.put("/:id", (req, res) => {
    // Book.    
    Book.findByIdAndUpdate(req.params.id).then(() => {
        res.json({message: "update successful"})
    })
});


//4. update
router.delete("/:id", (req, res) => {
    // Book.    
    Book.findByIdAndDelete(req.params.id).then(() => {
        res.json({message: "delete successful"})
    })
});


//create
router.post("/save", (req, res) => {
    const {title, author, publisher, pages} = req.body;

    let newBook = new Book({
        title, author, publisher, pages
    });

    newBook.save().then(() => {
        res.json({message: "Data saved"});
    });
})
export default router;