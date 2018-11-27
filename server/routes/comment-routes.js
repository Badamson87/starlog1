let router = require('express').Router()
let Ships = require('../models/ship')
let Users = require('../models/user')
let Comments = require('../models/comment')

// router.get('/', (req, res, next) => {
//   Comments.find({})
//     .then(Comments => res.send(Comments))
//     .catch(next)
// })


//VIEW ALL COMMENTS BY ID
router.get('/', (req, res, next) => {
  Comments.find({})
    .then(comment => res.send(comment))
    .catch(next)
})

//POST A COMMENT
router.post('/', (req, res, next) => {
  Comments.create(req.body)
    .then(comment => res.send(comment))
    .catch(next)
})

//DELETE THE COMMENT
router.delete('/:id', (req, res, next) => {
  Comments.findByIdAndDelete(req.params.id)
    .then(comment => res.send(comment))
    .catch(next)
})


//UPDATE THE COMMENT
router.put('/:id', (req, res, next) => {
  Comments.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(comment => res.send(comment))
    .catch(next)
})



module.exports = router