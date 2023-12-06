const mongoose = require('mongoose')
const { Schema, ObjectId } = mongoose

const gallonsOwned = new Schema({
    item_id:{
        type: ObjectId
    },
    item_name: {
        type: String
    },
    qty: {
        type: Number,
        default: 0
    },
    unit_price: {
        type: Number,
        default: 0
    }, 
})


const UserSchema = new Schema({
    user_name: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    user_type: {
        type: String,
        default: 'customer',
        required: true
    },
    gallons: [gallonsOwned]
}, { timestamps: true })

// connected and created a schema model and inserted in the existing collection named user_db
module.exports = mongoose.model('User', UserSchema, 'user_db') 