const BookService = require('../services/book.service');

const getAll = async (req, res) => {
  try {
    const books = await BookService.getAll();
    return res.status(200).json(books);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Ocorreu um erro'});
  }
}

module.exports = {
  getAll,
};