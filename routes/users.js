const express = require("express")
const router = express.Router()

const { list, get, create, update, destroy} = require("../controllers/user.controllers")

router.get('/',list)
router.get('/:id',get)
router.post('/',create)
router.put('/:id',update)
router.patch('/:id',update)
router.delete('/:id',destroy)
 

module.exports = router