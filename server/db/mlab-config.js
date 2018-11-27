const mongoose = require('mongoose')
const connectionString = 'mongodb://student3:student3@ds038888.mlab.com:38888/starlog'
const connection = mongoose.connection

mongoose.connect(connectionString, { useNewUrlParser: true })

connection.on('error', err => {
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', () => {
  console.log('Connected to Database')
})