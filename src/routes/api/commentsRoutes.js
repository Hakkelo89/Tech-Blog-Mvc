const { Router } = require("express");

const handleDeleteComment = require("../../controllers/api/handleDeleteComment");

const router = Router();

router.delete("/:id", handleDeleteComment);

module.exports = router;
