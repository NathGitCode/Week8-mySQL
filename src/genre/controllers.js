const Book = require("../books/model");
const Genre = require("./model");

const addGenreDb = async (req, res) => {
  const addGenre = await Genre.create(req.body);
  res.send(addGenre);
};

const findAllGenres = async (req, res) => {
  const allGenres = await Genre.findAll();
  res.send(allGenres);
};

const booksByGenre = async (req, res) => {
  const getBooksByGenre = await Genre.findOne({
    where: {
      genreName: req.params.genreName,
    },
    include: Book,
  });

  const successRes = {
    message: "success",
    getBooksByGenre,
  };
  res.send(successRes);
};

module.exports = {
  addGenreDb,
  booksByGenre,
  findAllGenres,
};
