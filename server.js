const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://tests:tests@ds133496.mlab.com:33496/tests', {
    useMongoClient: true
})
mongoose.Promise = global.Promise
app.use(bodyParser.json())
const order = require('./controllers/order.js')(app)

app.get('/', (request, response) => {
    response.send('ok')
})

app.listen(3000, () => {
    console.log('Server is listening...')
})