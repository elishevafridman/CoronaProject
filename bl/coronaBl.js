
const mongoose =require ("mongoose")
const coronaModel=require("../models/coronaModel")
const coronaDal =require("../dal/coronaDal")
const axios =require("axios")


const getCoronaDetails = async () => {
    try {


        return await coronaDal.getCoronaDetails()


    } catch (e) {

        return e

    }

}

const getCoronaDetailsByID = async (id) => {
console.log("blbyid")
    try {

        return await coronaDal.getCoronaDetailsByID(id)


    } catch (e) {

        return e

    }

}

const addCoronaDet1ails = async (obj) => {
    console.log("bl")
        try {
    
            let newCorona = new coronaModel({

               ID:obj.ID,
                vaccination:obj.vaccination,
                positiveDate:obj.positiveDate,
                recoveryDate:obj.recoveryDate
            })
            console.log("obj:",obj);
            console.log("newcorona",newCorona);
            return await coronaDal.addCoronaDet1ails(newCorona)
    
    
        } catch (e) {
    
            return e
    
        }
    
    }


const updateCoronaDetails = async (id, obj) => {

    try {

        return await coronaDal.updateCoronaDetails(id, {
             name: obj.name,
            premieredYear: obj.premieredYear,
            genres:obj.genres,
            vaccination:obj.vaccination,
            positiveDate:obj.positiveDate,
            recoveryDate:obj.recoveryDate })


    } catch (e) {

        return e

    }

}

const deleteCoronaByID = async (id) => {

    try {

        return await coronaDal.deleteCoronaByID(id)


    } catch (e) {

        return e

    }

}

module.exports = { getCoronaDetails,getCoronaDetailsByID,addCoronaDet1ails,updateCoronaDetails,deleteCoronaByID}
