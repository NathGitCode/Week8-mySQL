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
bookRouter.post("/", addBook);

// gets all books
bookRouter.get("/", findAllBooks);

// gets a book by author
bookRouter.get("/:author", findBookByAuthor);

// update book on title
bookRouter.put("/:title", updateOnTitle);

// deletes a single book by title
bookRouter.delete("/:title", deleteBookByTitle);

// deletes all books
bookRouter.delete("/deleteall", deleteAll);

module.exports = bookRouter;
