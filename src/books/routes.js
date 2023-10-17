const { Router } = require("express");
const bookRouter = Router();

const Book = require("./model");

const { addBook, findAllBooks } = require("./controllers");

// adds a book to the DB
bookRouter.post("/books", addBook);

// gets all books
bookRouter.get("/books", findAllBooks);

// gets a book by author
bookRouter.get("");

// update book on title
bookRouter.put("");

// deletes a single book by title
bookRouter.delete("");

// deletes all books
bookRouter.delete("");

module.exports = bookRouter;
