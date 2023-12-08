const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MeterSchema = new Schema({
    day_read: {
        type: String,
        required: true,
        unique: true
    },
    evening_read: {
        type: Number,
        required: true,
        default: 0.00
    },
}, { timestamps: true })

module.exports = mongoose.model('Meter', MeterSchema, 'meter_db') 