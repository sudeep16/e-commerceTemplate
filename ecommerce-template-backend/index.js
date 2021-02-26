const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

//Routers
const userRouter = require("./routes/users");
const adminRouter = require("./routes/admin");
const categoryRouter = require("./routes/category");
const subcategoryRouter = require("./routes/subcategory");

const app = express();
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

//Routes
app.use("/users", userRouter);
app.use("/admin", adminRouter);
app.use("/category", categoryRouter);
app.use("/subcategory", subcategoryRouter);

//Database Config
mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then((db) => {
    console.log("Successfully connected to MongoDB server");
}, (err) => console.log(err));

//Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.statusCode = 500;
    res.json({ status: err.message });
});

app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`);
});