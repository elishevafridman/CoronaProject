const express =require("express")
const app=express()
const route=express.Router()
const coronaBl =require("../bl/coronaBl")

route.get("/",async(req,res)=>{
    try{
        const corona=await coronaBl.getCoronaDetails()
        res.status(200).json(corona)
    }catch(err)
    {
        res.status(400)
    }
})



route.get("/:id",async(req,res)=>{
    console.log("route")
    try{
        const corona = await coronaBl.getCoronaDetailsByID(req.params.id)
         res.status(200).json(corona)
        }catch(err){
             res.status(400)
        }
    
})
route.post("/",async(req,res)=>{
    console.log("rout")
    try{
        console.log("rr",await coronaBl.addCoronaDet1ails(req.body))
        return res.status(200).json(await coronaBl.addCoronaDet1ails(req.body))
    }catch(err){
        res.status(400)
    }
    
})
route.put("/:id",async(req,res)=>{
    console.log("rout")
    try{
        return res.status(200).json(await coronaBl.updateCoronaDetails(req.params.id,req.body))
    }catch(err){
        res.status(400)
    }
    
})
route.delete("/:id",async(req,res)=>{
    console.log("rout")
    try{
        return res.status(200).json(await coronaBl.deleteCoronaByID(req.params.id))
    }catch(err){
        res.status(400)
    }
    
})
module.exports=route