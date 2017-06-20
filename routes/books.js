const express = require('express'),
      router = express.Router(),
      conn = require('../controllers/bookController')

router.get('/', conn.findAllBook)

router.post('/', conn.createBook)

router.put('/:id', conn.updateBook)

router.delete('/:id', conn.deleteBook)


module.exports = router;