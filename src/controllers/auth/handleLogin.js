const { User } = require("../../models");

const handleLogin = async (req, res) => {
  try {
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

    req.session.save(() => {
      req.session.isLoggedIn = true;
      req.session.username = user.username;
      req.session.userId = user.id;

      return res.status(200).json({ message: "success" });
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to login" });
  }
};

module.exports = handleLogin;
