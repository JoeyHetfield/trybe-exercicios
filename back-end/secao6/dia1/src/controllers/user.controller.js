const BookService = require('../services/book.service');

const error500Message = 'Algo deu errado';

const getAll = async (req, res) => {
  try {
    const books = await BookService.getAll();
    return res.status(200).json(books);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: error500Message });
  }
}

const getId = async (req, res) => {
  try {
    const { id } = req.params;
    const books = await BookService.getId(id);

    if (!books) {
      return res.status(404).json({ message: 'Book not found'});
    } return res.status(200).json(books);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: error500Message });
  }
}

const createBook = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await BookService.createBook(title, author, pageQuantity);
    return res.status(201).json(newBook)
  } catch(err) {
    console.log(err.message);
    res.status(500).json({ message: error500Message });
  }
 }

module.exports = {
  getAll,
  getId,
  createBook,
};