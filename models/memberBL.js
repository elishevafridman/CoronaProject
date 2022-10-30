const memberModel = require('./memberModel');

const getAllMembers = () => {
    return new Promise((resolve, reject) => {
        memberModel.find({}, (err, members) => {
            if (err) {
                console.log(err);
                reject(err)
            } else {
                resolve(members)
            }
        })
    })
}

const getMember = (id) => {
    return new Promise((resolve, reject) => {
        memberModel.findOne({"IDp":id}, (err,member) => {
            if (err) {
                reject(err)
            } else { resolve(member) }
        })
    })
}

const addMember = (member) => {
    //Validation of the new member
    if (member.IDp.length == 9) {
        if (member.firstName && member.lastName && member.phoneNumber && member.phoneMobileNumber && member.birthDate) {
            if (member.address.city && member.address.street && member.address.building) {
                if (member.positiveResult && member.recoveryDate || member.positiveResult || !member.positiveResult && !member.recoveryDate) {
                    if (member.vaccinations.length < 5 || !member.vaccinations) {
                        let valid = true;
                        member.vaccinations.forEach(vaccination => {
                            if (!vaccination.date || !vaccination.manufacturer) {
                                valid = false;
                            }
                        });
                        if (valid) {
                            return new Promise((resolve, reject) => {
                                let finalMember = new memberModel({
                                    firstName: member.firstName,
                                    lastName: member.lastName,
                                    IDp: member.IDp,
                                    address: {
                                        city: member.address.city,
                                        street: member.address.street,
                                        building: member.address.building
                                    },
                                    birthDate: member.birthDate,
                                    phoneNumber: member.phoneNumber,
                                    phoneMobileNumber: member.phoneMobileNumber,
                                    vaccinations: member.vaccinations,
                                    recoveryDate: member.recoveryDate,
                                    positiveResult: member.positiveResult
                                })
                                console.log("finalMember", finalMember);
                                finalMember.save(err => {
                                    if (err) {
                                        console.log("error", err);
                                        reject(err)
                                    } else { resolve("Created successfully", finalMember) }
                                })
                            })
                        } else {
                            return ("Invalid")
                        }
                    } else {
                        return ("Invalid")
                    }
                } else {
                    return ("Invalid")
                }
            } else {
                return ("Invalid")
            }

        } else {
            return ("Invalid")
        }
    } else {
        return ("Invalid")
    }
}

const updateMember = (id, member) => {
    //Validation of the new details
    if (member.IDp.length == 9) {
        if (member.firstName && member.lastName && member.phoneNumber && member.phoneMobileNumber && member.birthDate) {
            if (member.address.city && member.address.street && member.address.building) {
                if (member.positiveResult && member.recoveryDate || member.positiveResult || !member.positiveResult && !member.recoveryDate) {
                    if (member.vaccinations.length < 5 || !member.vaccinations) {
                        let valid = true;
                        member.vaccinations.forEach(vaccinations => {
                            if (!vaccinations.date || !vaccinations.manufacturer) {
                                valid = false;
                            }
                        });
                        if (valid) {
                            return new Promise((resolve, reject) => {

                                memberModel.findOneAndUpdate({IDp:id}, member, (err) => {
                                    if (err) {
                                        console.log("error", err);
                                        reject(err)
                                    } else { resolve("updated successfully") }
                                })
                            })
                        } else {
                            return ("Invalid")
                        }
                    } else {
                        return ("Invalid")
                    }
                } else {
                    return ("Invalid")
                }
            } else {
                return ("Invalid")
            }

        } else {
            return ("Invalid")
        }
    } else {
        return ("Invalid")
    }
}

const deleteMember = (id) => {
    return new Promise((resolve, reject) => {
        memberModel.findOneAndDelete({IDp:id}, (err) => {
            if (err) {
                console.log("error", err);
            } else { resolve("deleted successfully") }
        })
    })
}
module.exports = { getAllMembers, getMember, addMember, updateMember, deleteMember };