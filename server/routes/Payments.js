const express = require("express");
const router = express.Router();

const { capturePayment, verifySignature, sendPaymentSuccessEmail } = require("../controllers/Payments");
const { auth} = require("../middlewares/auth");

router.post("/capturePayment", auth, capturePayment);
router.post("/verifySignature", auth,verifySignature);
router.post("/sendPaymentSuccessEmail", auth, sendPaymentSuccessEmail)

module.exports = router