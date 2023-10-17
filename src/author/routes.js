const { Router } = require("express");
const authorRouter = Router();

const Author = require("./model");

// adds an author to the db
authorRouter.post("/author");

// gets a single author by name and there books
authorRouter.get("/author");

module.exports = authorRouter;
