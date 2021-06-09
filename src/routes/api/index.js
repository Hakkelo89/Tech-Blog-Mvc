const { Router } = require("express");

const postsRoutes = require("./postRoutes");

const router = Router();

router.use("/posts", postsRoutes);

module.exports = router;
