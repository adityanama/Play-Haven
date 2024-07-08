const express = require("express");
const app = express();

const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const paymentRoutes = require("./routes/Payments");
const cartRoutes = require("./routes/Cart");

const database = require("./config/database");
const { cloudinaryConnect } = require("./config/cloudinary");
const cookieparser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
require("dotenv").config();

const port = process.env.PORT || 4000;
database.dbConnect();

app.use(express.json());
app.use(cookieparser());
app.use(cors())

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp"
}));

cloudinaryConnect();

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/cart", cartRoutes);

app.get("/", (req, res) => {
    res.send(`<h1> Welcome to Server </h1>`);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})