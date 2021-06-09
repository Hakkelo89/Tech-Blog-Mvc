const { Router } = require("express");

const handleCommentForPost = require("../../controllers/api/handleCommentForPost");

const router = Router();

router.post("/:id/comments", handleCommentForPost);

module.exports = router;
