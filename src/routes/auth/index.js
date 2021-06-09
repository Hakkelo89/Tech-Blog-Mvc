const { Router } = require("express");

const handleSignUp = require("../../controllers/auth/handleSignUp");
const handleLogin = require("../../controllers/auth/handleLogin");

const router = Router();

router.post("/sign-up", handleSignUp);
router.post("/login", handleLogin);

module.exports = router;
