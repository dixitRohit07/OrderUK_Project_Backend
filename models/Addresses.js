const mongoose = require ("mongoose")



const addAllAdressesSchema = new mongoose.Schema({

    address: {
        type:String
    },

    number:{
        type:String
    }



})


const Add = new mongoose.model("Add",addAllAdressesSchema);


module.exports = Add;