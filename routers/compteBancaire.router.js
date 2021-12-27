const CompteBancaireController = require("../controllers/compteBancaire.controller")
const express = require("express")
const router = express.Router();
router.post("/",CompteBancaireController.create)
router.get("/",CompteBancaireController.read)
router.get("/:id",CompteBancaireController.FindById)

router.delete("/:id",CompteBancaireController.delete)
router.put("/:id",CompteBancaireController.update)

module.exports=router