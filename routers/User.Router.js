const userController = require("../controllers/User.Controllers")

const express = require("express")
const router = express.Router();

router.get("/",userController.read)
router.get("/:id",userController.FindById)
router.post("/",userController.create)
router.delete("/:id",userController.delete)
router.put("/:id",userController.update)
module.exports=router