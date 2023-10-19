const { DataTypes } = require("sequelize");
const Author = require("./model");
const Book = require("../books/model");

const addAuthorOb = async (req, res) => {
  const addAuthor = await Author.create({
    authorName: req.body.authorName,
  });
  res.send(addAuthor);
};

const getAuthor = async (req, res) => {
  const getAllAuthors = await Author.findAll();
  res.send(getAllAuthors);
};

const booksByAuthor = async (req, res) => {
  const getBooksByAuthor = await Author.findAll({
    where: {
      authorName: req.params.authorName,
    },
  });
  const booksByAuthor = await Book.findAll({
    where: {
      author: req.params.authorName,
    },
  });
  const successRes = {
    message: "success",
    getBooksByAuthor,
    booksByAuthor,
  };
  res.send(successRes);
};

module.exports = {
  addAuthorOb,
  booksByAuthor,
  getAuthor,
};
