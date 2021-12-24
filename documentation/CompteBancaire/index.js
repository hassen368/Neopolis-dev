

const getAllCompteBancaire=require("./getAllCompteBancaire")
const createCompteBancaire=require("./createCompteBancaire")
const updateCompteBancaire = require("./updateCompteBancaire")
const deleteCompteBancaireById = require("./deleteCompteBancaireById")

module.exports = {

 
        "/CompteBancaires": {
          ...getAllCompteBancaire,
          ...createCompteBancaire

        },
        "/CompteBancaires/{id}": {
            ...updateCompteBancaire,
            ...deleteCompteBancaireById
  
          }
}