const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");
const router = express.Router();

//Registration
router.post("/register", (req, res, next) => {
    let password = req.body.password;
    bcrypt.hash(password, 10, (err, hash) => {
        console.log(err);
        if (err) {
            let err = new Error("Could not hash");
            err.status = 500;
            return next(err);
        }
        Admin.create({
            username: req.body.username,
            password: hash,
        }).then((admin) => {
            let token = jwt.sign({ _id: admin._id }, process.env.SECRET);
            res.json({
                status: "Registered Successfully!",
                token: token
            });
        }).catch(next);
    })
});

//Login
router.post("/login", (req, res, next) => {
    Admin.findOne({
        username: req.body.username
    }).then((admin) => {
        if (admin == null) {
            let err = new Error("Admin not found");
            err.status = 401;
            return next(err);
        } else {
            bcrypt.compare(req.body.password, admin.password)
                .then((isMatch) => {
                    if (!isMatch) {
                        let err = new Error("Password doesn't match. Try again!");
                        err.status = 401;
                        return (err);
                    }
                    let token = jwt.sign({
                        _id: admin._id,
                    }, process.env.SECRET);
                    res.json({
                        status: "Login successful",
                        token: token
                    });
                    console.log(token);
                }).catch(next);
        }
    }).catch(next);
})

module.exports = router;