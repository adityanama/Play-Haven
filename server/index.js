const express = require("express");
const app = express();

const userRoutes = require("./routes/User");
const profileRoutes = require("./routes/Profile");
const paymentRoutes = require("./routes/Payments");

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
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
)
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp"
}));

cloudinaryConnect();

app.use("/api/v1/auth", userRoutes);
// app.use("/api/v1/profile", profileRoutes);
// app.use("/api/v1/payments", paymentRoutes);

app.get("/", (req, res) => {
    res.send(`<h1> Welcome to Server </h1>`);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})