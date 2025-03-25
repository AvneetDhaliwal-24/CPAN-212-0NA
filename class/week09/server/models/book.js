import mongoose, { model } from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        publisher: {
            type: String,
            required: true
        },
        pages: {
            type: Number,
            required: true
        },
        release_date: {
            type: String
        },
        ISBN: {
            type: String
        }
    }
);

// model(what_table, what we are going to send over)
const Book = mongoose.model("books", bookSchema);

export default Book;