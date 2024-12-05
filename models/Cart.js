const mongoose = require ("mongoose")


const CartSchema = new mongoose.Schema({

    title:{
        type:String
    },
    price:{
        type:String
    }
})

const Cart = new mongoose.model("Cart",CartSchema)



module.exports =  Cart