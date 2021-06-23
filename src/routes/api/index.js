const { Router } = require("express");

const postsRoutes = require("./postRoutes");
const commentsRoutes = require("./commentsRoutes");

const router = Router();

router.use("/posts", postsRoutes);
router.use("/comments", commentsRoutes);

module.exports = router;
