const mongoose = require('mongoose')

const orderScema = mongoose.Schema({
    food_name: String,
    customer_name: String,
    description: String,
    address: String,
    price: String,
    stock: Number,
    date_order: String,
    status_order: String
})

module.exports = mongoose.model('Order', orderScema)