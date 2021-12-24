const TransactionController = require("../controllers/transaction.controller")
const express = require("express")
const router = express.Router();
router.get("/",TransactionController.read)
router.get("/:id",TransactionController.FindById)
router.post("/",TransactionController.create)
router.delete("/:id",TransactionController.delete)
router.put("/:id",TransactionController.update)

module.exports=router