const { Post } = require("../../models");

const handleCreatePost = async (req, res) => {
  const { title, body } = req.body;

  await Post.create({ title, body, user_id: req.session.userId });

  res.status(200).json({ message: "success" });
};

module.exports = handleCreatePost;
