const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll({
    order: [['title', 'ASC']],
  });

  return books;
};

const getId = async (id) => {
  const books = await Book.findByPk(id);
  return books;
}

const getByAuthor = async (author) => {
  const books = await Book.findOne({ where: { author },
  order: [['title', 'ASC']],
})
  return books
}

const createBook = async (title, author, pageQuantity, publisher ) => {
  const newBook = await Book.create({ title, author, pageQuantity, publisher });
  return newBook;
}

const updateBook = async (id, { title, author, pageQuantity, publisher }) => {
  const [updatedBook] = await Book.update(
          { title, author, pageQuantity, publisher },
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
  getByAuthor,
};

