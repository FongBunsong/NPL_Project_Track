const express = require('express')
const { getLoans } = require('../controllers/loanController')

const router = express.Router()

router.get('/', getLoans)

module.exports = router
