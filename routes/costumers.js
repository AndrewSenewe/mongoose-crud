const express = require('express')
      router = express.Router(),
      conn = require('../controllers/costumerController')
//
//
router.get('/', conn.findAllCostumers)

router.post('/', conn.createCostumer)

router.put('/:id', conn.updateCostumer)

router.delete('/:id', conn.deleteCostumer)
//
module.exports = router;