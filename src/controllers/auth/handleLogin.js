const { User } = require("../../models");

const handleLogin = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.findOne({
    where: {
      username: username,
    },
  });

  if (!user) {
    console.log("User does not exists");
    return res.status(401).json({ error: "Failed to login" });
  }

  if (user.password !== password) {
    console.log("Incorrect password");
    return res.status(401).json({ error: "Failed to login" });
  }

  res.status(200).json({ message: "success" });

module.exports = handleLogin;
