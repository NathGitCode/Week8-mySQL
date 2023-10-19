const { Router } = require("express");
const genreRouter = Router();

const { addGenreDb, booksByGenre, findAllGenres } = require("./controllers");

genreRouter.post("/", addGenreDb);

genreRouter.get("/", findAllGenres);

genreRouter.get("/:genreName", booksByGenre);

module.exports = genreRouter;
