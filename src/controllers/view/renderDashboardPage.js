const { Post, User } = require("../../models");
const { getPlain } = require("../../utils");

const renderDashboardPage = async (req, res) => {
  const postsFromModel = await Post.findAll({
    include: {
      model: User,
      attributes: ["username"],
    },
    where: {
      user_id: req.session.userId,
    },
  });

  const posts = getPlain(postsFromModel);

  res.render("dashboard", { posts });
};

module.exports = renderDashboardPage;
