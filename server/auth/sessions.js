let expressSession = require('express-session')
let MongoStore = require('connect-mongodb-session')(expressSession)

let store = new MongoStore({
  uri: 'mongodb://student3:student3@ds038888.mlab.com:38888/starlog',
  collection: 'Sessions'
})

store.on('error', error => {
  console.error('[Session error]', error)
})

let session = expressSession({
  secret: process.env.SESSIONSSECRET || "whaterver",
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 365
  },
  store,
  resave: true,
  saveUninitialized: true
})



module.exports = session 