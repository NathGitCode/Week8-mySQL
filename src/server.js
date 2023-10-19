require("dotenv").config();
const express = require("express");
const Book = require("./books/model");
const Author = require("./author/model");
const Genre = require("./genre/model");
const bookRouter = require("./books/routes");
const authorRouter = require("./author/routes");
const genreRouter = require("./genre/routes");

const port = process.env.PORT || 5001;

const app = express();
app.use(express.json());
app.use("/books", bookRouter);
app.use("/authors", authorRouter);
app.use("/genres", genreRouter);

const syncTables = async () => {
  await Author.hasMany(Book);
  await Book.belongsTo(Author);

  await Genre.hasMany(Book);
  await Book.belongsTo(Genre);

  await Book.sync({ alter: true });
  await Author.sync({ alter: true });
  await Genre.sync({ alter: true });
};

app.get("/health", (req, res) => {
  res.status(200).json({ message: "API is healthy" });
});

app.listen(port, () => {
  syncTables();
  console.log("Server is listening");
});
