const { Router } = require("express");

const renderDashboardPage = require("../../controllers/view/renderDashboardPage");
const renderPostPage = require("../../controllers/view/renderPostPage");
const renderCreatePostPage = require("../../controllers/view/renderCreatePostPage");

const router = Router();

// add auth middleware here
router.get("/dashboard", renderDashboardPage);
// add auth middleware here
router.get("/posts/:id", renderPostPage);
// add auth middleware here
router.get("/create-post", renderCreatePostPage);

module.exports = router;
