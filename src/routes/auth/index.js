const { Router } = require("express");

const handleSignUp = require("../../controllers/auth/handleSignUp");

const router = Router();

router.post("/sign-up", handleSignUp);

module.exports = router;
