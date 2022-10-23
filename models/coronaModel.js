const express=require("express")
const mongoose=require("mongoose")
const CoronaSchema=mongoose.Schema({
    ID:String,
vaccination:[{date:String,maker:String}],
positiveDate:String,
recoveryDate:String

})
module.exports=new mongoose.model("corona",CoronaSchema)