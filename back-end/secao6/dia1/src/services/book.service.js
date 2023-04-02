const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();

  return books;
};

const getId = async (id) => {
  const books = await Book.findByPk(id);
  return books;
}

const createBook = async (title, author, pageQuantity) => {
  const newBook = await Book.create({ title, author, pageQuantity });
  return newBook;
}

const updateBook = async (id, { title, author, pageQuantity }) => {
  const [updatedBook] = await Book.update(
          { title, author, pageQuantity },
      { where: { id } },
  );
  return updatedBook;
}

const deleteBook = async (id) => {
  const delBook = await Book.destroy({ where: { id }}, );
  return delBook;
}

module.exports = {
  getAll,
  getId,
  createBook,
  updateBook,
  deleteBook,
};

