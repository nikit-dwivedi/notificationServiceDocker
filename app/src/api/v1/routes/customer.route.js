const express = require('express');
const { sendOrderNotification } = require('../controllers/customer.controller');
const router = express.Router()

router.post('/order', sendOrderNotification)

module.exports = router