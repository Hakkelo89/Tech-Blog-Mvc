const { Post } = require("../../models");

const renderEditPostPage = async (req, res) => {
  const { id } = req.params;

  const postFromModel = await Post.findByPk(id);

  const post = postFromModel.get({ plain: true });

  res.render("editPost", post);
};

module.exports = renderEditPostPage;
