const express = require("express");
const router = express.Router();
const {test} = require("../controllers/testController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/test").get(isAuthenticatedUser, authorizeRoles("admin") ,test)


module.exports = router