const express = require("express");
const router = express.Router();

const {addToCart,removeFromCart,resetCart, getGames} = require("../controllers/cart")
const { auth } = require("../middlewares/auth");

router.post("/addtocart", auth,addToCart)
router.post("/removefromcart", auth, removeFromCart)
router.post("/resetcart", auth, resetCart)
router.get("/getgames", auth, getGames)

module.exports = router