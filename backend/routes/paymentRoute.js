const express = require("express");
const {
  processPayment,
  sendStripeApiKey,
} = require("../controllers/paymentController");
const router = express.Router();
const { isUserAuthenticated } = require("../middleware/auth");

router.route("/payment/process").post(isUserAuthenticated, processPayment);

router.route("/stripeapikey").get(isUserAuthenticated, sendStripeApiKey);

module.exports = router;
