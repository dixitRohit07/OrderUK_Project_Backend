const mongoose = require("mongoose")



const friesSchema = new mongoose.Schema({

    title:{
        type:String
    },

    info:{
        type:String
    },

    price:{
        type:String
    }

})

const friesInfo = new mongoose.model("friesInfo", friesSchema)


module.exports = friesInfo;