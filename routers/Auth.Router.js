const authController = require("../controllers/Auth.Controllers")

const express = require("express")
const router = express.Router();
router.post("/login",authController.login)
router.post("/refreshToken",authController.refreshToken)
router.post("/logout",authController.logout)
module.exports=router