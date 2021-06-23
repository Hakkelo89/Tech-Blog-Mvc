const { Post, Comment, User } = require("../../models");

const renderPostPage = async (req, res) => {
  const { id } = req.params;

  const postFromModel = await Post.findByPk(id, {
    include: [
      {
        model: Comment,
        include: [
          {
            model: User,
            attributes: ["username"],
          },
        ],
      },
      { model: User, attributes: ["username"] },
    ],
  });

  const post = postFromModel.get({ plain: true });

  res.render("post", post);
};

module.exports = renderPostPage;
