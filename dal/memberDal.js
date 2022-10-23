const MemberModel=require("../models/memberModel")
const getMembers=()=>{
    return new Promise(((resolve,reject)=>{
        MemberModel.find({},(err,data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
    
            }
        })
    }))
    }
    const getmemberById = (id) => {
        console.log("dal")
            return new Promise(((resolve, reject) => {
        
                MemberModel.findById(id, function(err,data) {
        
                    if (err) {
                        reject(err)
        
                    }
                    else {
                        resolve(data)
        
                    }
        
                })
        
            }))
        
        }
    const addMember=(obj)=>{
        console.log("dal")
        return new Promise(((reject,resolve)=>{
            obj.save( (err) => {
    
                if (err) {
                    reject(err)
    
                }
                else {
                    console.log(obj);
    
                    resolve(obj)
    
                }
            })
        }))
    }
    const updateMember = (id, obj) => {

        return new Promise(((resolve, reject) => {
    
            MemberModel.findByIdAndUpdate(id, obj, (err) => {
    
                if (err) {
                    reject(err)
    
                }
    
                else {
                    resolve(MemberModel.findById(id))
    
                }
    
            })
    
        }))
    
    }
    
    
    const deleteMember = (ID) => {
    
        return new Promise(((resolve, reject) => {
    
            MemberModel.deleteOne({ID:ID}, (err) => {
    
                if (err) {
                    reject(err)
    
                }
                else {
                    resolve({})
    
                }
    
            })
    
        }))
    
    }
    const getMemberByID=(ID)=>{
        return new Promise(((resolve,reject)=>{
           MemberModel.find({ ID:ID},(err,data)=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve(data)
        
                }
            })
        }))
        }
    
    module.exports={getMemberByID,getMembers,getmemberById,addMember,updateMember,deleteMember}