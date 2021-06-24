const { Comment } = require("../../models");

const handleDeleteComment = async (req, res) => {
  const { id } = req.params;

  await Comment.destroy({ where: { id } });

  res.status(200).json({ message: "success" });
};

module.exports = handleDeleteComment;
