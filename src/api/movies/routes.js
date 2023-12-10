const router = require("express").Router();
const { getMovies } = require("./controller");
router.get("/moviesDetail", getMovies);

module.exports = router;
