const { Router } = require("express");

const view = require("./view");

const router = Router();

// router.use("/api", apiRoutes);
// router.use("/auth", authRoutes);
router.use("/", view);

module.exports = router;
