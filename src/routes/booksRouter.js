const express =  require ('express');

const { updateBook,createBook ,getALLBooks, getSingleBook,
    deleteBook }= require('../controllers/bookControllers');

const router = express.Router()

router.get('/', getALLBooks );
router.get('/:bookId',getSingleBook);
router.post('/', createBook);
router.put('/:bookId',  updateBook);

router.delete('/:bookId',  deleteBook);

module.exports = router