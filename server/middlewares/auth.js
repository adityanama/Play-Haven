const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization") || req.cookies.token || req.body.token;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token is Missing",
            })
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decoded);
            req.user = decoded;
        }
        catch (error) {
            return res.status(401).json({
                success: false,
                message: "Invalid Token",
            })
        }

        next();

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: error.message,
        })
    }
}