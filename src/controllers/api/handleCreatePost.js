const { Post } = require("../../models");

const handleCreatePost = async (req, res) => {
  // get title and body from req body
  // insert new post with userId

  await Post.create(post);

  res.status(200).json({ message: "success" });
};

module.exports = handleCreatePost;
