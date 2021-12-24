

const getAllTransaction=require("./getAllTransactions")
const createTransaction=require("./createTransaction")
const updateTransaction = require("./updateTransaction")
const deleteTransactionById = require("./deleteTransactionById")

module.exports = {

 
        "/transactions": {
          ...getAllTransaction,
          ...createTransaction

        },
        "/transactions/{id}": {
            ...updateTransaction,
            ...deleteTransactionById
  
          }
}