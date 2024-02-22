const BookModel = require('../models/bookModel');

const createBook = async (req, res) => {
  const { title, author } = req.body;

  const newBook = await BookModel.create({ title, author });
  res.json(newBook);
};

const getALLBooks = async (req, res) => {
  const ALLBooks = await BookModel.find();
  res.json(ALLBooks);
};

const getSingleBook = async (req, res) => {
  const { bookId } = req.params;
  try {
    const singleBook = await BookModel.findById(bookId);
    res.json(singleBook);
  } catch (error) {
    res.status(404).json({ message: 'Book not found' });
  }
};

const updateBook = async (req, res) => {
  const { bookId } = req.params;
  const { title, author } = req.body;
  try {
    const updateBook = await BookModel.findByIdAndUpdate(
      bookId,
      { title, author },
      { new: true }
    );
    res.json(updateBook);
  } catch (error) {
    res.status(404).json({ message: 'Book not found' });
  }
};

const deleteBook = async (req, res) => {
  const { bookId } = req.params;
  try {
    const deletedBook = await BookModel.findByIdAndDelete(bookId);
    res.json(deletedBook);
  } catch (error) {
    res.status(404).json({ message: 'Book not found' });
  }
};

module.exports = {
  createBook,
  getALLBooks,
  updateBook,
  getSingleBook,
  deleteBook,
};

