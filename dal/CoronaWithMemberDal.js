const MemberModel=require("../models/memberModel")
const CoronaModel=require("../models/coronaModel")

       
    
                
    
   
    
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
    
    
   
    module.exports={addMember,updateMember}