const express = require("express");
const SubCategory = require("../models/subcategory");
const auth = require("../auth");
const router = express.Router();

//GET by all users including unauthorized users too
router.route("/")
    .get((req, res, next) => {
        SubCategory.find()
            .then((subcategory) => {
                res.json(subcategory);
            })
            .catch((err) => {
                next(err);
            });
    });

//POST, UPDATE and DELETE by admin only
router.route("/:parentcategory", auth.verifyAdmin)
    .post((req, res, next) => {
        let subcategory = new SubCategory(req.body);
        subcategory.parent_category = req.params.parentcategory;
        subcategory.save()
            .then((subcategory) => {
                res.statusCode = 201;
                res.json(subcategory);
            }).catch(next);
    });

module.exports = router;