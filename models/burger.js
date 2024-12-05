const mongoose = require("mongoose");


const burgerSchema = new mongoose.Schema({

    title: {
        type:String
    },

    info: {
        type:String
    },

    price:{
        type:String
    }


})

const BurgerInfo = new mongoose.model("BurgerInfo",burgerSchema);


module.exports = BurgerInfo;