const Author = require("./model");
const Book = require("../books/model");

const addAuthorOb = async (req, res) => {
  const addAuthor = await Author.create(req.body);
  res.send(addAuthor);
};

const getAuthor = async (req, res) => {
  const getAllAuthors = await Author.findAll();
  res.send(getAllAuthors);
};

const booksByAuthor = async (req, res) => {
  const getBooksByAuthor = await Author.findOne({
    where: {
      authorName: req.params.authorName,
    },
    include: Book,
  });

  const successRes = {
    message: "success",
    getBooksByAuthor,
  };
  res.send(successRes);
};

module.exports = {
  addAuthorOb,
  booksByAuthor,
  getAuthor,
};
