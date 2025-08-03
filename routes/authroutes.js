const express = require("express")
const router  = express.Router();
const {registration,login,getintern} = require("../controllers/authcontroller")

router.post("/",registration)
router.post("/login",login)
router.get("/intern",getintern)

module.exports = router;