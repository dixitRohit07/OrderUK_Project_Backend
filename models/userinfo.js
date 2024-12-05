const mongoose = require("mongoose");


const userinfoSchema = new mongoose.Schema({

    name:{
        type:String,
        require:true
    },

    phone:{
        type:String,
        require:true
    },

    email:{
        type:String,
        require:true
    },

    password:{
        type:String,
        require:true
    },
});


const User = new mongoose.model("User",userinfoSchema);


module.exports = User;