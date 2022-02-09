var express = require("express");
var router = express.Router();
const pageRouter = require("./page");

router.use(pageRouter);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
