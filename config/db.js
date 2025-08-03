const mongoose = require("mongoose")

const db = async(link)=>{
    try{
        await mongoose.connect(link)
        console.log("db connected")
    }
    catch(err){
        console.error(err)
    }
}

module.exports = db;