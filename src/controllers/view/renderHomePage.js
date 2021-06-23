const renderHomePage = (req, res) => {
  // get all posts
  // send posts to handlebars
  const { isLoggedIn } = req.session;
  res.render("homepage", { isLoggedIn });
};

module.exports = renderHomePage;
