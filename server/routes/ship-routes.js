let router = require('express').Router()
let Ships = require('../models/ship')
let Users = require('../models/user')

router.get('/', (req, res, next) => {
  Ships.find({})
    .then(ships => res.send(ships))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Ships.findById(req.params.id)
    .then(ships => res.send(ships))
    .catch(next)
})

module.exports = router