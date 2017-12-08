const _ = require('lodash')
const Order = require('../models/order.js')

const order = app => {
    let _orders = []

    //create
    app.post('/api/orders', (req,res) => {
        const newOrder = new Order(req.body)
        newOrder.save().then(() => {
            res.json({"info": "Order Created"})
        }).catch(err => {
            console.error(err)
        })
    })

    //read
    app.get('/api/orders', (req,res) => {
        Order.find().then(orders => {
            res.json(orders)
        }).catch(err => {
            console.error(err)
        })
    })

    //update
    app.put('/api/orders/:id', (req,res) => {
        Order.update({ _id: req.params.id}, req.body)
        .then(() => {
            res.json({"info": "Order updated"})
        }).catch(err => {
            console.error(err)
        })
    })

    //delete
    app.delete('/api/orders/:id', (req, res) => {
        Order.remove({ _id: req.params.id}).then(() => {
            res.json({"info": "Order removed"})
        }).catch(err => {
            console.log(err)
        })
    })
}

module.exports = order