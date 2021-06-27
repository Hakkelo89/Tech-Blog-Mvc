const { Post } = require("../../models");

const handleEditPost = async (req, res) => {
  const { id } = req.params;
  const { title, body } = req.body;

  const updatedPost = {
    title,
    body,
  };

  await Post.update(updatedPost, { where: { id } });

  res.status(200).json({ message: "success" });
};

module.exports = handleEditPost;
