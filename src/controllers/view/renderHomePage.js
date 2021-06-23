const { Post, User } = require("../../models");
const { getPlain } = require("../../utils");

const renderHomePage = async (req, res) => {
  const postsFromModel = await Post.findAll({
    include: {
      model: User,
      attributes: ["username"],
    },
  });

  const { isLoggedIn } = req.session;

  const posts = getPlain(postsFromModel);

  res.render("homepage", { isLoggedIn, posts });
};

module.exports = renderHomePage;
