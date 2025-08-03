const express = require("express")
const app = express();
const path = require("path");

const dotenv = require("dotenv")
const db = require("./config/db")
dotenv.config()
app.use(express.json())

app.use(express.static(path.join(__dirname, "public")));


db(process.env.LINK)
const authroutes = require('./routes/authroutes')

app.use('/',authroutes)
app.listen(process.env.PORT,()=>{
    console.log(`server is running at ${process.env.PORT}`)
})