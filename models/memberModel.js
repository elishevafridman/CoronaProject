const mongoose=require("mongoose")
const MemberSchema=mongoose.Schema({
    ID:String,
    city:String,
    street:String,
    houseNum:String,
     bornDate:String,
     name:String,
     phone:String,
     mobilePhone:String,
    //  image:Image

})
module.exports=new mongoose.model("member",MemberSchema)