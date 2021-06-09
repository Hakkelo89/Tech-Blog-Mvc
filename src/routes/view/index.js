const { Router } = require("express");

const renderHomePage = require("../../controllers/view/renderHomePage");
const renderSignupPage = require("../../controllers/view/renderSignupPage");

const router = Router();

router.get("/sign-up", renderSignupPage);
router.get("/", renderHomePage);

module.exports = router;
