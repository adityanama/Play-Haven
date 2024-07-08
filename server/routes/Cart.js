const express = require("express");
const router = express.Router();

const {addToCart,removeFromCart,resetCart, getGames, getTotalGames} = require("../controllers/cart")
const { auth } = require("../middlewares/auth");

router.post("/addtocart", auth,addToCart)
router.post("/removefromcart", auth, removeFromCart)
router.post("/resetcart", auth, resetCart)
router.get("/getgames", auth, getGames)
router.get("/gettotalgames", auth, getTotalGames)

module.exports = router