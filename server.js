const express = require("express");

const db = require("./dataBase/dBConfig");

const app = express();
const swaggerUi=require("swagger-ui-express")
const basicAuth=require("express-basic-auth")
const cors=require('cors')

const docs=require("./documentation")

app.use(cors("*"))

app.use(express.urlencoded({extended:true}))
app.use('/api-docs',basicAuth({
  users:{'hassen':'hassen'}, // pour mettre user name and password pour swagger
  challenge:true

}),swaggerUi.serve,swaggerUi.setup(docs))


const UserRouter = require("./routers/User.Router")
app.use("/users",UserRouter)

const AuthRouter = require("./routers/Auth.Router")
app.use("/auth",AuthRouter)

const TransactionRouter = require("./routers/transaction.router");
app.use("/transactions", TransactionRouter);

const CompteBancaireRouter = require("./routers/compteBancaire.router");
app.use("/compteBancaires", CompteBancaireRouter);



app.listen(3001, function () {
  console.log("start server");
});
