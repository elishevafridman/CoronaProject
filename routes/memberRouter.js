const express =require("express")
const app=express()
const route=express.Router()
const memberBl =require("../bl/memberBl")

route.get("/",async(req,res)=>{
    try{
        const corona=await memberBl.getMembers()
        res.status(200).json(corona)
    }catch(err)
    {
        res.status(400)
    }
})



route.get("/:id",async(req,res)=>{
    console.log("route")
    try{
        const corona = await memberBl.getmemberByID(req.params.id)
         res.status(200).json(corona)
        }catch(err){
             res.status(400)
        }
    
})
route.post("/",async(req,res)=>{
    console.log("rout")
    try{
        console.log("rr",await memberBl.addMember(req.body))
        return res.status(200).json(await memberBl.addMember(req.body))
    }catch(err){
        res.status(400)
    }
    
})
route.put("/:id",async(req,res)=>{
    console.log("rout")
    try{
        return res.status(200).json(await memberBl.updateMember(req.params.id,req.body))
    }catch(err){
        res.status(400)
    }
    
})
route.delete("/:id",async(req,res)=>{
    console.log("rout")
    try{
        return res.status(200).json(await memberBl.deleteMember(req.params.id))
    }catch(err){
        res.status(400)
    }
    
})

route.get("/:id",async(req,res)=>{
    console.log("route")
    
        const id=req.params.id
        const member = await coronaWithMemberBl.getAllDetailsByID(id)
        console.log(member)
         res.status(200).json(member)
      
    
})

module.exports=route