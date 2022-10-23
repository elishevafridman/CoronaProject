const mongoose =require ("mongoose")
const memberDal =require("../dal/memberDal")
const memberModel =require("../models/memberModel")

const getMembers=async()=>{
    try{
        return await memberDal.getMembers()
    }
    catch(err){
     return err
    }
}

const getmemberByID = async (id) => {
console.log("bl")
    try {
        console.log("bl2")
        return await memberDal.getmemberById(id)


    } catch (e) {

        return e

    }

}

const addMember=async(obj)=>{
    console.log("bl")
    try{
        let newMember=new memberModel({
            ID:obj.ID,
            city:obj.city,
            street:obj.street,
            houseNum:obj.houseNum,
             bornDate:obj.bornDate,
             name:obj.name,
             phone:obj.phone,
             mobilePhone:obj.mobilePhone,
             image:obj.image
        })
        return await memberDal.addMember(newMember)
    }catch(err)
    {    return err
    }
}


const updateMember = async (id, obj) => {
    console.log("updateblmember")
    try {

        return await memberDal.updateMember(id, {
            ID:obj.ID,
            city:obj.city,
            street:obj.street,
            houseNum:obj.houseNum,
             bornDate:obj.bornDate,
             name:obj.name,
             phone:obj.phone,
             mobilePhone:obj.mobilePhone,
             image:obj.image})


    } catch (e) {

        return e

    }

}

const deleteMember = async (id) => {

    try {

        return await memberDal.deleteMember(id)


    } catch (e) {

        return e

    }

}


module.exports={getMembers,getmemberByID,addMember,updateMember,deleteMember}