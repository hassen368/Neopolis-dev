

const getAllUser=require("./getAllUser")
const createUser=require("./createUser")
const updateUser = require("./updateUser")
const deleteUserById = require("./deleteUserById")

module.exports = {

 
        "/Users": {
          ...getAllUser,
          ...createUser

        },
        "/Users/{id}": {
            ...updateUser,
            ...deleteUserById
  
          }
}