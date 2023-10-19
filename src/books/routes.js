const { Router } = require("express");
const bookRouter = Router();

const {
  addBook,
  findAllBooks,
  findBookByAuthor,
  deleteBookByTitle,
  deleteAll,
  updateOnTitle,
} = require("./controllers");

// adds a book to the DB
bookRouter.post("/books", addBook);

// gets all books
bookRouter.get("/books", findAllBooks);

// gets a book by author
bookRouter.get("/books/:author", findBookByAuthor);

// update book on title
bookRouter.put("/books/:title", updateOnTitle);

// deletes a single book by title
bookRouter.delete("/books/:title", deleteBookByTitle);

// deletes all books
bookRouter.delete("/books/deleteall", deleteAll);

module.exports = bookRouter;
