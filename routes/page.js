const router = require("express").Router();
const page = require("../controllers/PageControllers");

router.get("/", page.home);

module.exports = router;