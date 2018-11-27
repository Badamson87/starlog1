let router = require('express').Router()
let Ships = require('../models/ship')
let Users = require('../models/user')
let Logs = require('../models/log')
let Comments = require('../models/comment')

//get all
router.get('/', (req, res, next) => {
  Logs.find({})
    .then(log => res.send(log))
    .catch(next)
})

//get log by id
router.get('/:id/comments', (req, res, next) => {
  Logs.findById(req.params.id)
    .then(log => {
      Comments.find({ logId: log._id })
        .then(comments => {
          return res.send({ log, comments })
        })
    })
    //will have to find comments who's logId == log._id and assign return array

    .catch(next)
})

//VIEW ALL COMMENTS BY ID
router.get('/:id', (req, res, next) => {
  Logs.findById(req.params.id)
    .then(log => res.send(log))
    .catch(next)
})

//POST A log
router.post('/', (req, res, next) => {
  Logs.create(req.body)
    .then(log => res.send(log))
    .catch(next)
})

//DELETE THE log
router.delete('/:id', (req, res, next) => {
  Logs.findByIdAndDelete(req.params.id)
    .then(log => res.send(log))
    .catch(next)
})


//UPDATE THE log
router.put('/:id', (req, res, next) => {
  Logs.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(log => res.send(log))
    .catch(next)
})



module.exports = router