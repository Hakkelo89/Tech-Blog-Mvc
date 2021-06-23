const handleLogout = (req, res) => {
  try {
    req.session.destroy(() => {
      return res.status(200).json({ message: "success" });
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to logout" });
  }
};

module.exports = handleLogout;
