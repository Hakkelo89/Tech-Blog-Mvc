const { Router } = require("express");

const auth = require("../../middleware/auth");
const privateRouter = require("./privateRouter");
const publicRouter = require("./publicRouter");

const router = Router();

router.use(publicRouter);
router.use(auth, privateRouter);

module.exports = router;
