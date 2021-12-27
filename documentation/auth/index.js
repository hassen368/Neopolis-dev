

const login=require("./login")
const logout=require("./logout")
const refreshToken = require("./refreshToken")

module.exports = {

    
        "/auth": {
          ...login,

        },
        "/auth/refreshToken": {
            ...refreshToken
  
          },
          "/auth/logout": {
            ...logout
  
          }

       
    
}