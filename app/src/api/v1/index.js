const express = require("express");
const router = express.Router();

// require("../v1/config/mongodb");

const sellerRoute = require('./routes/seller.route.js')
const customerRoute = require('./routes/customer.route')
const adminRoute = require('./routes/admin.route')


router.use("/seller", sellerRoute);
router.use("/customer", customerRoute);
router.use("/admin", adminRoute);

module.exports = router;
