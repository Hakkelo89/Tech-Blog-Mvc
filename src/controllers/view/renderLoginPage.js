const renderLoginPage = (req, res) => {
  console.log(req.body);
  res.render("login");
};

module.exports = renderLoginPage;
