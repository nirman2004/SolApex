// *---------------------------------
//* Express.Router
// *---------------------------------

const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");
const { signupSchema, signinSchema } = require("../validators/auth-validators");
const validate = require("../middleware/validate-middleware");
const authMiddleware = require("../middleware/auth-middleware")

router.route("/register").post(validate(signupSchema), authControllers.register);
router.route("/login").post(validate(signinSchema), authControllers.login);
router.route("/user").get(authMiddleware, authControllers.user);

module.exports = router;