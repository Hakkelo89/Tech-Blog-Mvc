const router = require("express").Router();
const { Post } = require("../../models");

const handleCreatePost = async (req, res) => {
  const post = await Post.create({
    ...req.body,
    user_id: req.session.user_id,
  });

  res.status(200).json({ message: "Post created" });
};

module.exports = handleCreatePost;
