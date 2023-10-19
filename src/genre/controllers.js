const Book = require("../books/model");
const Genre = require("./model");

const addGenreDb = async (req, res) => {
  try {
    const addGenre = await Genre.create(req.body);
    res.status(201).json({ message: "success", addGenre });
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};

const findAllGenres = async (req, res) => {
  try {
    const allGenres = await Genre.findAll();
    res.status(201).json({ message: "success", allGenres });
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};

const booksByGenre = async (req, res) => {
  try {
    const getBooksByGenre = await Genre.findOne({
      where: {
        genreName: req.params.genreName,
      },
      include: Book,
    });
    res.status(201).json({ message: "success", getBooksByGenre });
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};

module.exports = {
  addGenreDb,
  booksByGenre,
  findAllGenres,
};
