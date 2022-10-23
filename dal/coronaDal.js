const mongoose=require("mongoose")
const CoronaModel=require("../models/coronaModel")

const getCoronaDetails=()=>{
    return new Promise(((resolve, reject)=>{
        CoronaModel.find({},(err, data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    }))
}

const getCoronaDetailsById = (id) => {
    console.log("dal")
        return new Promise(((resolve, reject) => {
    
            CoronaModel.find({ ID: id }, (err, data) => {
    
                if (err) {
                    reject(err)
    
                }
                else {
                    resolve(data)
    
                }
    
            })
    
        }))
    
    }
   
    const addCoronaDet1ails=(obj)=>{
        return new Promise(((resolve,reject)=>{
                obj.save( (err) => {
                if (err) {
                    reject(err)
    
                }
                else {
                    resolve(obj)
    
                }
            })
    
        }))
    }
    
    const updateCoronaDetails = (id, obj) => {
    
        return new Promise(((resolve, reject) => {
    
            CoronaModel.findByIdAndUpdate(id, obj, (err) => {
    
                if (err) {
                    reject(err)
    
                }
    
                else {
                    resolve(CoronaModel.findById(id))
    
                }
    
            })
    
        }))
    
    }
    
    const deleteCoronaByID = (ID) => {
    
        return new Promise(((resolve, reject) => {
            CoronaModel.deleteOne({ID:ID}, (err) => {
    
                if (err) {
                    reject(err)
    
                }
                else {
                    resolve({})
    
                }
    
            })
    
        }))
    
    }
    const getCoronaByID=(ID)=>{
        return new Promise(((resolve,reject)=>{
            CoronaModel.find({ ID:ID},(err,data)=>{
                if(err){
                    reject(err)
                }
                else{
                    resolve(data)
        
                }
            })
        }))
        }
    module.exports={getCoronaByID,getCoronaDetails,getCoronaDetailsById,addCoronaDet1ails,updateCoronaDetails,deleteCoronaByID}