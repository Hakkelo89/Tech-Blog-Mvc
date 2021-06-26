const { Router } = require("express");

const renderDashboardPage = require("../../controllers/view/renderDashboardPage");
const renderPostPage = require("../../controllers/view/renderPostPage");
const renderCreatePostPage = require("../../controllers/view/renderCreatePostPage");

const router = Router();

router.get("/dashboard", renderDashboardPage);
router.get("/posts/:id", renderPostPage);
router.get("/create-post", renderCreatePostPage);

module.exports = router;
