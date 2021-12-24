

const login=require("./login")
const logout=require("./logout")
const refreshToken = require("./refreshToken")

module.exports = {

    
        "/users": {
          ...login,

        },
        "/users/refreshToken": {
            ...refreshToken
  
          },
          "/users/logout": {
            ...logout
  
          }

       
    
}