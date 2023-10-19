const { Router } = require("express");
const authorRouter = Router();

const { addAuthorOb, booksByAuthor, getAuthor } = require("./controllers");

// adds an author to the db
authorRouter.post("/", addAuthorOb);

// gets the authors
authorRouter.get("/", getAuthor);

// gets a single author by name and there books
authorRouter.get("/:authorName", booksByAuthor);

module.exports = authorRouter;
