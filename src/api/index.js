const router = require("express").Router();

router.use("/movies", require("./movies/routes"));


module.exports = router;
