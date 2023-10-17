const { DataTypes } = require("sequelize");
const Book = require("./model");

const addBook = async (req, res) => {
  const newBook = await Book.create({
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
  });
  console.log(newBook);

  const successResponse = {
    message: "success",
    newBook: newBook,
  };

  res.send(successResponse);
};

const findAllBooks = async (req, res) => {
  const allBooks = await Book.findAll();
  const successResponse = {
    message: "allbooks",
    allBooks: allBooks,
  };
  res.send(successResponse);
};

const findBookByAuthor = async (req, res) => {
  const findByAuthor = await Book.findAll({
    where: {
      author: req.params.author,
    },
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
  addBook: addBook,
  findAllBooks: findAllBooks,
  findBookByAuthor: findBookByAuthor,
  deleteBookByTitle: deleteBookByTitle,
  deleteAll: deleteAll,
  updateOnTitle: updateOnTitle,
};
