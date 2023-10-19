const Book = require("./model");

const addBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(201).json({ message: "success", newBook });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      res.status(412).json({ message: error.message, error });
      return;
    }
    res.status(500).json({ message: error.message, error });
  }
};

const findAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.findAll();

    if (allBooks.length >= 1) {
      res.status(201).json({ message: "success", allBooks });
      return;
    }

    res.status(404).json({ message: "failure" });
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};

const findBookByAuthor = async (req, res) => {
  try {
    const findByAuthor = await Book.findAll({
      author: req.params.author,
    });
    res.status(201).json({ message: "success", findByAuthor });
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};

const deleteBookByTitle = async (req, res) => {
  try {
    const deleteByTitle = await Book.destroy({
      where: {
        title: req.params.title,
      },
    });
    res.status(201).json({ message: "success", deleteByTitle });
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }

  res.send(deleteByTitle);
};

const deleteAll = async (req, res) => {
  try {
    const deleteAllEntries = await Book.destroyAll();
    res.status(201).json({ message: "success", deleteAllEntries });
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};

const updateOnTitle = async (req, res) => {
  try {
    const updateViaTitle = await Book.update(
      {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
      },
      {
        where: {
          title: req.params.title,
        },
      }
    );
    res.status(201).json({ message: "success", updateViaTitle });
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};

module.exports = {
  addBook,
  findAllBooks,
  findBookByAuthor,
  deleteBookByTitle,
  deleteAll,
  updateOnTitle,
};
