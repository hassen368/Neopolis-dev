const mongoose = require("mongoose");
const db = "mongodb://localhost:27017/neoplis-dev";

mongoose
  .connect(db)
  .then(() => {
    console.log("Success Connect To Mongodb");
  })
  .catch((err) => {
    console.error(" Error connect", err);
    process.exit();
  });


mongoose.Promise = global.Promise

mongoose.connection.on("error",console.error.bind(console,"MondoDB connection error"))
module.exports=mongoose