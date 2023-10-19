const Book = require("./model");

const addBook = async (req, res) => {
  const newBook = await Book.create(req.body);

  res.send(newBook);
};

const findAllBooks = async (req, res) => {
  const allBooks = await Book.findAll();
  res.send(allBooks);
};

const findBookByAuthor = async (req, res) => {
  const findByAuthor = await Book.findAll({
    author: req.params.author,
  });
  res.send(findByAuthor);
};

const deleteBookByTitle = async (req, res) => {
  const deleteByTitle = await Book.destroy({
    where: {
      title: req.params.title,
    },
  });
  res.send(deleteByTitle);
};

const deleteAll = async (req, res) => {
  const deleteAllEntries = await Book.destroyAll();
  res.send(deleteAllEntries);
};

const updateOnTitle = async (req, res) => {
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
  res.send(updateViaTitle);
};

module.exports = {
  addBook,
  findAllBooks,
  findBookByAuthor,
  deleteBookByTitle,
  deleteAll,
  updateOnTitle,
};
