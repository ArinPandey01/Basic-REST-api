const express = require('express');
const router = express.Router();
const {logger} = require('../middleware/logger');
const { getAllBooks, getBookById, postbook, updatebook, deletebook } = require('../controllers/bookControllers');
router.get('/', logger, getAllBooks);

router.get('/:id', logger, getBookById);

router.post('/', logger, postbook);

router.put('/:id', logger, updatebook);

router.delete('/:id', logger, deletebook);

module.exports=router;