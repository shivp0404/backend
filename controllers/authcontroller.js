const intern = require("../Models/interndata")
require("dotenv").config()

exports.registration = async(req,res)=>{
   try{
     const {name,gender,age,degree,graduationyear,contact} = req.body
    if(!name) return res.status(404).json({message:"Name is not found"})
    if(!gender) return res.status(404).json({message:"gender is not found"})
    if(!age) return res.status(404).json({message:"age is not found"})
    if(!degree) return res.status(404).json({message:"degree is not found"})
    if(!graduationyear) return res.status(404).json({message:"graduationyear is not found"})
    if(!contact) return res.status(404).json({message:"contact is not found"})

   const register = intern.create({name,gender,age,degree,graduationyear,contact})

   res.status(201).json({success:true,message:"You are Registere"})
   }
   catch(err){
    res.status(500).json({message:"error while registration"})
   }

}

exports.login = async(req,res)=>{
    try{
        const {email,code} = req.body;
        

        if(!email) res.status(404).json({message:"email is not given"})
        // console.log(email,code)
        
        if(email === process.env.EMAIL &&  code === process.env.SECRET) return res.status(200).json({success:true,message:"allow the access"})
    
        return res.status(403).json({message:"Missing Something"}) 
        }   
    catch(err){
        res.status(404).json({message:"error getting login"})
    }
}


exports.getintern = async (req, res) => {
  try {
    const getall = await intern.find();

    if (!getall || getall.length === 0)
      return res.status(404).json({ success: false, message: "No interns are registered" });


    res.status(200).json(getall ); 
  } catch (err) {
    res.status(500).json({ message: "Error finding user" }); 
  }
};


