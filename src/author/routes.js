const { Router } = require("express");
const authorRouter = Router();

const { addAuthorOb, booksByAuthor, getAuthor } = require("./controllers");

// adds an author to the db
authorRouter.post("/author", addAuthorOb);

authorRouter.get("/author", getAuthor);

// gets a single author by name and there books
authorRouter.get("/books/author/:authorName", booksByAuthor);

module.exports = authorRouter;
