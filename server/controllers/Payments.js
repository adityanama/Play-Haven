const { instance } = require("../config/razorpay");
const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const { paymentSuccessEmail } = require("../mail/templates/paymentSuccessEmail")
const crypto = require("crypto")


exports.capturePayment = async (req, res) => {
    const { games, total: total_amount } = req.body;

    console.log("games => ", games, total_amount)

    if (!games.length) {
        return res.status(400).json({ message: "Game IDs are required" });
    }

    console.log("payemnt => ", games)

    const currency = "INR";

    const options = {
        amount: total_amount * 100,
        currency,
        receipt: Math.random(Date.now()).toString(),
    }

    try {
        const paymentResponse = await instance.orders.create(options);
        console.log(paymentResponse);
        return res.status(200).json({
            success: true,
            data: paymentResponse
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Payment failed" });
    }

}

exports.verifySignature = async (req, res) => {
    const razorpay_order_id = req.body?.razorpay_order_id
    const razorpay_payment_id = req.body?.razorpay_payment_id
    const razorpay_signature = req.body?.razorpay_signature
    const games = req.body?.games

    console.log("verfiynf = ", req.body)
    const userId = req.user.id

    if (
        !razorpay_order_id ||
        !razorpay_payment_id ||
        !razorpay_signature ||
        !userId
    ) {
        return res.status(200).json({ success: false, message: "Payment Failed" })
    }

    let body = razorpay_order_id + "|" + razorpay_payment_id

    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_SECRET)
        .update(body.toString())
        .digest("hex")

    if (expectedSignature === razorpay_signature) {
        const user = await User.findById(userId)

        games.forEach(game => {
            game.purchaseOn = Date.now();
        });

        const newarr = games.concat(user.games);
        user.games = newarr

        await user.save();
        console.log(user.games)
        return res.status(200).json({ success: true, message: "Payment Verified" })
    }

    return res.status(200).json({ success: false, message: "Payment Failed" })
}


exports.sendPaymentSuccessEmail = async (req, res) => {
    const { paymentId, amount } = req.body

    const userId = req.user.id
    console.log("emaiil -> ", req.body)

    if (!paymentId || !amount || !userId) {
        return res
            .status(400)
            .json({ success: false, message: "Please provide all the details" })
    }

    try {
        const user = await User.findById(userId)

        await mailSender(
            user.email,
            `Payment Received`,
            paymentSuccessEmail(
                `${user.firstName} ${user.lastName}`,
                amount / 100,
                paymentId
            )
        )
    } catch (error) {
        console.log("error in sending mail", error)
        return res
            .status(400)
            .json({ success: false, message: "Could not send email" })
    }
}