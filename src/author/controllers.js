const Author = require("./model");
const Book = require("../books/model");

const addAuthorOb = async (req, res) => {
  try {
    const addAuthor = await Author.create(req.body);
    res.status(201).json({ message: "success", addAuthor });
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};

const getAuthor = async (req, res) => {
  try {
    const getAllAuthors = await Author.findAll();
    res.status(201).json({ message: "success", getAllAuthors });
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};

const booksByAuthor = async (req, res) => {
  try {
    const getBooksByAuthor = await Author.findOne({
      where: {
        authorName: req.params.authorName,
      },
      include: Book,
    });
    res.status(201).json({ message: "success", getBooksByAuthor });
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};

module.exports = {
  addAuthorOb,
  booksByAuthor,
  getAuthor,
};
