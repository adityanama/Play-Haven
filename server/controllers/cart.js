const Cart = require("../models/Cart")
const User = require("../models/User")

exports.addToCart = async (req, res) => {
    const { game } = req.body;

    const id = req.user.id
    const user = await User.findById(id)

    const email = user.email

    const exist = await Cart.findOne({ email })

    if (exist) {
        const cart = await Cart.findOne({ email })


        if (cart.games.some((val) => val.id === game.id)) {
            return res.status(200).json({success:false, message: "Already in cart" })
        }

        cart.games.push(game)
        await cart.save()

        return res.status(200).json({ success: true, message: "Game added to cart" })
    } else {
        const cart = new Cart({ email, games: [game] })
        await cart.save()
        return res.status(200).json({success:true, message: "Game added to cart" })
    }
}

exports.removeFromCart = async (req, res) => {
    const { game } = req.body
    const id = req.user.id

    const user = await User.findById(id)
    const email = user.email

    const cart = await Cart.findOne({ email })
    cart.games = cart.games.filter((item) => item.id !== game.id)
    await cart.save()
    
    return res.status(200).json({
        message: "Game removed from cart", cart: cart.games
    })
}

exports.resetCart = async (req, res) => {
    const id = req.user.id
    const user = await User.findById(id)
    const email = user.email
    const cart = await Cart.findOne({ email })
    cart.games = []
    await cart.save()

    return res.status(200).json({
        message: "All Games Removed"
    })
}

exports.getGames = async (req, res) => {
    const id = req.user.id
    const user = await User.findById(id)
    const email = user.email
    const cart = await Cart.findOne({ email })

    console.log(cart)

    return res.status(200).json({ games: cart.games })
}

exports.getTotalGames = async(req, res) => {
    const id = req.user.id
    const user = await User.findById(id)
    const email = user.email
    const cart = await Cart.findOne({ email })

    console.log(cart)

    return res.status(200).json({ total : cart.games.length })
}