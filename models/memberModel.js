const mongoose = require('mongoose');

let MemmberSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    IDp: String,
    address: {
        city: String,
        street: String,
        building: Number
    },
    birthDate: Date,
    phoneNumber: String,
    phoneMobileNumber: String,
    vaccinations: [{ date: Date, manufacturer: String }],
    recoveryDate: Date,
    positiveResult: Date
}
)

module.exports = mongoose.model("members", MemmberSchema)