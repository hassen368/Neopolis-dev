const basicInfo=require("./basicInfo")
const servers=require("./servers")
const tags=require("./tags")
const components=require("./components")
const paths=require("./paths")
//const security=require("./security")
module.exports ={
     ...basicInfo,
     ...servers,
     ...components,
     ...tags,
     ...paths,
   //  ...security
    }