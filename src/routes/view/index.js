const { Router } = require("express");

const renderHomePage = require("../../controllers/view/renderHomePage");
const renderLoginPage = require("../../controllers/view/renderLoginPage");
const renderSignupPage = require("../../controllers/view/renderSignupPage");
const renderDashboardPage = require("../../controllers/view/renderDashboardPage");

const router = Router();

router.get("/sign-up", renderSignupPage);
router.get("/login", renderLoginPage);
// add auth middleware here
router.get("/dashboard", renderDashboardPage);
router.get("/", renderHomePage);

module.exports = router;
