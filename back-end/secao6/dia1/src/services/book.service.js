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
  const books = await Book.create({ title, author, pageQuantity });
  return books;
}

module.exports = {
  getAll,
  getId,
  createBook,
};



//Exercício 9: No service BooksService crie um método create que recebe um objeto com os atributos title, author, pageQuantity 
//e salve um novo livro utilizando o model Book.

