const express = require("express");
const Category = require("../models/category");
const auth = require("../auth");
const router = express.Router();

//GET by all users including unauthorized users too
router.route("/")
    .get((req, res, next) => {
        Category.find()
            .then((category) => {
                res.json(category);
            })
            .catch((err) => {
                next(err);
            });
    });

//POST, UPDATE and DELETE by admin only
router.route("/", auth.verifyAdmin)
    .post((req, res, next) => {
        let category = new Category(req.body);
        category.save()
            .then((category) => {
                res.statusCode = 201;
                res.json(category);
            }).catch(next);
    });

module.exports = router;