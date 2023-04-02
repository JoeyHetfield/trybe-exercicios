const BookService = require('../services/book.service');

const error500Message = 'Algo deu errado';

const getAll = async (req, res) => {
  const { author } = req.query;

  try {
    let books;
    if (author) {
      books = await BookService.getByAuthor(author);
    } else {
      books = await BookService.getAll();
    }
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
    const { title, author, pageQuantity, publisher } = req.body;
    const newBook = await BookService.createBook(title, author, pageQuantity, publisher);
    return res.status(201).json(newBook)
  } catch(err) {
    console.log(err.message);
    res.status(500).json({ message: error500Message });
  }
 }

 const updateBook = async (req, res) => {
  try {
    const { title, author, pageQuantity, publisher } = req.body;
    const { id } = req.params;
  
    const updatedBook = await BookService.updateBook(id, { title, author, pageQuantity, publisher } );
    if (!updatedBook) return res.status(404).json({ message: 'Book not found' });

    return res.status(201).json({ message: 'Updated Book!'} )

  } catch(err) {
    console.log(err.message);
    res.status(500).json({ message: error500Message });
  }
 }

 const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const removeBook = await BookService.deleteBook(id);
    if (!removeBook) return res.status(404).json({ message: 'Book not found' });

    res.status(200).json({ message: 'Deleted Book'})

  } catch(err) {
    console.error(err.message);
    res.status(500).json({ message: error500Message });
  }
 }

module.exports = {
  getAll,
  getId,
  createBook,
  updateBook,
  deleteBook
};