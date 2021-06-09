const { Router } = require("express");

const view = require("./view");
const auth = require("./auth");
const api = require("./api");

const router = Router();

router.use("/api", api);
router.use("/auth", auth);
router.use("/", view);

module.exports = router;
