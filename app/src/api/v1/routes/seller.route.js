const express = require('express');
const { sendOrderNotification, sendStatusNotification } = require('../controllers/seller.controller');
const router = express.Router()

router.post('/order', sendOrderNotification)
router.post('/status',sendStatusNotification)

module.exports = router