const { Post } = require("../../models");

const handleDeletePost = async (req, res) => {
  const { id } = req.params;

  await Post.destroy({ where: { id } });

  res.status(200).json({ message: "success" });
};

module.exports = handleDeletePost;
