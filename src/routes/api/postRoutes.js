const { Router } = require("express");

const handleCommentForPost = require("../../controllers/api/handleCommentForPost");
const handleCreatePost = require("../../controllers/api/handleCreatPost");

const router = Router();

router.post("/:id/comments", handleCommentForPost);
router.post("/", handleCreatePost);

module.exports = router;
