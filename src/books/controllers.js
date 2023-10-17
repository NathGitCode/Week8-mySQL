const Book = require("./model");

const addBook = async (req, res) => {
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!");
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
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!");
  const allBooks = await Book.findAll();
  const successResponse = {
    message: "allbooks",
    allBooks: allBooks,
  };
  res.send(successResponse);
};

module.exports = {
  addBook: addBook,
  findAllBooks: findAllBooks,
};
