const mongoose = require("mongoose")
const coronaWithMemberDal = require("../dal/CoronaWithMemberDal")
const memberModel = require("../models/memberModel")
const coronaModel = require("../models/coronaModel")
const memberDal = require("../dal/memberDal")
const coronaDal = require("../dal/coronaDal")
const getAllDetailsByID = async (id) => {
    console.log("bl")
    try {
        const dataFromMember = await memberDal.getMemberByID(id)
        const dataFromCorona = await coronaDal.getCoronaByID(id)
        console.log(dataFromMember)
        console.log(dataFromCorona)
        const finalObj = {
            ID: null,
            address: null,
            bornDate: null,
            name: null,
            phone: null,
            mobilePhone: null,
            image: null,
            vaccination: null,
            positiveDate: null,
            recoveryDate: null,
            positiveDate: null,
            recoveryDate: null
        }
        console.log(dataFromMember[0])

        if (dataFromMember[0] != undefined) {
            {
                finalObj.ID = dataFromMember[0].ID,
                    finalObj.city = dataFromMember[0].city,
                    finalObj.street = dataFromMember[0].street,
                    finalObj.houseNum = dataFromMember[0].houseNum,
                    finalObj.bornDate = dataFromMember[0].bornDate,
                    finalObj.name = dataFromMember[0].name,
                    finalObj.phone = dataFromMember[0].phone,
                    finalObj.mobilePhone = dataFromMember[0].mobilePhone,
                    finalObj.image = dataFromMember[0].image
            }
            if (dataFromCorona[0] != undefined)
            {
                finalObj.vaccination=dataFromCorona[0].vaccination
                finalObj.positiveDate= dataFromCorona[0].positiveDate,
                        finalObj. recoveryDate= dataFromCorona[0].recoveryDate
            }
        //     vaccination: dataFromCorona[0].vaccination,
        //         positiveDate: dataFromCorona[0].positiveDate,
        //             recoveryDate: dataFromCorona[0].recoveryDate
        // }
        console.log(finalObj)
        return finalObj
        }

    } catch (e) {

        return e

    }

}
module.exports = { getAllDetailsByID }