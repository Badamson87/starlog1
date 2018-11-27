let express = require('express')
let bodyParser = require('body-parser')
require('./server/db/mlab-config')

let server = express()
const PORT = process.env.PORT || 3000 //FOR DEPLOYMENT

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(express.static(__dirname + '/public'))

// DONT REORDER THIS 
let auth = require('./server/auth/routes')
server.use(auth.session)
server.use('/account', auth.router)

let commentRoutes = require('./server/routes/comment-routes')
let logRoutes = require('./server/routes/log-routes')
let shipRoutes = require('./server/routes/ship-routes')
// let userRoutes = require('./server/routes/user-routes')

server.use('/api/logs', logRoutes)
server.use('/api/comments', commentRoutes)
server.use('/api/ship', shipRoutes)

//default error handler
server.use('*', (error, req, res, next) => {
  res.status(error.status || 400).send({ message: error.message })
})

server.listen(PORT, () => {
  console.log("Server is running on port:", PORT)
})