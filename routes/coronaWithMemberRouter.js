const express =require("express")
const app=express()
const route=express.Router()
const coronaWithMemberBl =require("../bl/coronaWithMemberBl") 

route.get("/:ID",async(req,res)=>{
    console.log("route")
    
        const ID=req.params.ID
        const details = await coronaWithMemberBl.getAllDetailsByID(ID)
        console.log(details)
         res.status(200).json(details)
      
    
})
module.exports=route