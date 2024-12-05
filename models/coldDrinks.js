const mongoose = require("mongoose")


const coldDrinksSchema = new mongoose.Schema({

    title:{
        type:String
    },

    info:{
        type:String
    },

    price:{
        type:String
    }
});

const Cold = new mongoose.model("Cold",coldDrinksSchema)


module.exports = Cold
