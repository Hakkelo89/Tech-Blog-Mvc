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

  const comments = post.comments.map((comment) => {
    return {
      ...comment,
      myComment: req.session.userId === comment.user_id,
    };
  });

  res.render("post", { ...post, comments });
};

module.exports = renderPostPage;
