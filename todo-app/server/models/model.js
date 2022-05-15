const mongoose = require('mongoose');
//const Schema = mongoose.Schema;

const numberSchema = new mongoose.Schema({
    phoneNumber: {
           type: Number,
        required: true,
    },
           name: {
        type: String,
        required: true,
    },
          address: {
        type: String,
        required: true,
    },
   
});



const customer  = mongoose.model("customer", numberSchema);

module.exports = customer;